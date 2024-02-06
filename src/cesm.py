# Junjie Yu, 2023-11-24, Mancheser UK
#------------------------------------------------------------------------------
# This script is used to run CESM2 via python

import os
import subprocess
import shutil
import json
import xarray as xr
import numpy as np
import time
import gc
import copy

# Set the path of the CESM2
class cesm_run():

    """
    This class is used to create CESM2/CTSM case.
    =============================================
    Run the CESM2/CTSM case should be done by running the generated shell script
         using terminal or python subprocess or container (docker or singularity with CESM2/CTSM installed)
    """

    def __init__(self, CASESCRIPT, CASESCRIPT_local, CASEROOT_local, DOUT_S_ROOT, JSONPATH):
        """
        Initialize CESM2.

        Args:
            CASESCRIPT (str): Path of the CESM2/CTSM scripts folder.
                e.g., CASESCRIPT = "/p/project/myclm/cime/scripts".
            CASESCRIPT_local (str): Path of the CESM2/CTSM scripts folder on the local machine.
                e.g., CASESCRIPT_local = "/home/zhonghua/p/project/clm5.0/cime/scripts".
            CASEROOT_local (str): Path of the CESM2/CTSM case folder on the local machine.
                e.g., CASEROOT_local = "/home/zhonghua/p/scratch/CESMDATAROOT/CaseOutputs".
            DOUT_S_ROOT (str): Path of the CESM2/CTSM output folder.
                e.g., DOUT_S_ROOT = "/p/scratch/CESMDATAROOT/Archive".
            JSONPATH (str or dict): Path of the json file or the json file itself.
                e.g., JSONPATH = "config.json" or 
                JSONPATH = {"case_lat": 0.9, "case_lon": 1.25, "case_name": "test", 
                            "fsurdat": "/p/project/myclm/cime/scripts/f19_g16.B1850.f19_g16.c090918.clm2.r.0.5x0.5_20090202.nc"}.

        Returns:
            An instance of the cesm_run class.
        """
        self.CASESCRIPT = CASESCRIPT
        self.CASESCRIPT_local = CASESCRIPT_local
        #self.CIMEROOT = os.path.join(SRCROOT, 'cime')
        self.CASEROOT_local = CASEROOT_local
        self.DOUT_S_ROOT = DOUT_S_ROOT
        self.case_lat = 0.9
        self.case_lon = 1.25
        self.case_name = 'test'
        self.RLmodel = "PPO"

        if isinstance(JSONPATH, str):
            self.json_file_path = JSONPATH
            with open(JSONPATH, 'r') as f:
                self.config = json.load(f)
        if isinstance(JSONPATH, dict):
            self.config = JSONPATH
            self.json_file_path = None
        self.case_lat = self.config['case_lat']
        self.case_lon = self.config['case_lon']
        self.case_name = self.config['case_name']
        self.fsurdat = self.config['fsurdat']
        self.local_fsurdat = self.config['local_fsurdat']

    # Read the config file
    def read_json_config(self):
        """
        Read the JSON config file.

        Args:
            file_path (str): The path of the config file.

        Returns:
            dict: The configuration data.

        """
        with open(self.json_file_path, 'r') as f:
            config = json.load(f)

        return config

    def modify_case_config(self, scriptpaht):
        
        """
        Modify the case config file.

        Args:
            scriptpath (str): The path of the script file.
            config (dict): The configuration data.

        Returns:
            str: The modified script file.
        """

        # read the shell script
        with open(scriptpaht, 'r') as f:
            script = f.read()
        for i in self.config.keys():
            input_sc = "${" + i + "}"
            # replace the value
            script = script.replace(input_sc, self.config[i])

        return script


    def create_case(self, scriptpath):

        """
        Create the case scripts for single point modeling.

        Args:
            filepath (str): File path of the config file.

        Returns:
            str: The case script.
        """

        script = self.modify_case_config(scriptpath)

        return script
        
    def reset_case(self, password=None):

        """
        Reset the case. (delete the case folders and files)

        Args:
            password (str): The password of the server.
        
        Returns:
            subprocess.CompletedProcess: The result of the command.
        """
        # Remove the case
        if password == None:
            script = "rm -rf " + self.CASESCRIPT_local + "/" + self.config['case_name']
            result = subprocess.run(script, text=True, check=True, shell=True)
            script = "rm -rf " + self.CASEROOT_local + "/" + self.config['case_name']
            result = subprocess.run(script, text=True, check=True, shell=True)

        else:
            script = "sudo -S rm -rf " + self.CASESCRIPT_local + "/" + self.config['case_name']
            result = subprocess.run(script, input=password, text=True, check=True, shell=True)
            script = "sudo -S rm -rf " + self.CASEROOT_local + "/" + self.config['case_name']
            result = subprocess.run(script, input=password, text=True, check=True, shell=True)

        return result


    def nc_view(self):

        """
        View the netcdf file. The netcdf file should be in the DOUT_S_ROOT folder. 

        Args:
            xarray.Dataset: The xarray dataset. 
        
        """

        # Read the netcdf file
        self.filepath = self.DOUT_S_ROOT + '/lnd/hist/' + self.config['case_name'] + '.clm2.h0.' \
                        + self.config['case_start_year'] + '-' + self.config['filemonth'] + '.nc'
        ds = xr.open_dataset(self.filepath)

        return ds
    
    def modify_surf(self, var, action, param_location):
            
        """
        Modify the surface data file.

        Args:
            var (str): The variable to be modified.
            action (str): The action to be taken.
            param_location (dict): The location of the parameter.

        Returns:
            str: The modified surface data file path.
        """

        # Open the file
        ds = xr.open_dataset(self.config['local_fsurdat'])
        # Modify the file
        if float(self.config['case_lon']) < 0:
            case_lon = float(copy.deepcopy(self.config['case_lon'])) + 360
        else:
            case_lon = float(copy.deepcopy(self.config['case_lon']))
        llat = int((float(copy.deepcopy(self.config['case_lat']))+90)/(180/192))
        llon = int(case_lon/1.25)
        # * Set the location of the parameter, only one location is modified
        # numurbl is the number of urban land units, here is 1, indicating HD urban
        #param_location = dict(lsmlat=llat, lsmlon=llon, numurbl=1)
        #param_location = dict(lsmlat=0, lsmlon=0, numurbl=1)
        if isinstance(action, float):
            ds[var].loc[param_location] = ds[var].loc[param_location].values + action
            #ds[var].loc[:] = ds[var].loc[:].values + action
        if isinstance(action, np.ndarray):
            ds[var].loc[param_location] = action
            #ds[var].loc[:] = action

        if isinstance(action, dict):
            #print('action is a dict')
            for i in action.keys():
                if isinstance(action[i], float) or isinstance(action[i], np.float64) or isinstance(action[i], np.float32):
                    #print('action is a float')
                    ds[i].loc[param_location] = ds[i].loc[param_location].values + action[i]
                    #ds[i].loc[:] = ds[i].values + action[i]
                    #print(param_location)
                    #print(ds[i].loc[param_location].values)
                if isinstance(action[i], np.ndarray):
                    #print('action is a ndarray')
                    ds[i].loc[param_location] = action[i]
                    #ds[i].loc[:] = action[i]
                    

        if os.path.exists(self.config['local_fsurdat']):
            # Remove the file if exists
            # this will cause the error if the file does is exist 
            # and we still want to modify the file
            # will make it can not be modified any more
            # !!!!!!! don't resvie this
            os.remove(self.config['local_fsurdat'])
        # Save the file
        ds.to_netcdf(self.config['local_fsurdat'])

        ds.close()
        del ds
        gc.collect()
                       
def run_command(command, password=None):
    """
    Run the command. There are two ways to run the command, with or without password.
    The loges will be saved in the log_ppo.txt file.

    Args:
        command (str): The command to be run.
        password (str, optional): The password of the server.

    Returns:
        None
    """
    

    try:
        if password == None:
            result = subprocess.run(command, text=True, check=True, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        else:    
            result = subprocess.run(command, input=password, text=True, check=True, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        with open('log_ppo.txt', 'w') as f:
            f.write(now_time())
            if result.stdout is not None:
                f.write(result.stdout)
    except subprocess.CalledProcessError as e:
        with open('log_ppo.txt', 'w') as f:
            f.write(now_time())
            if e.stdout is not None:
                f.write(e.stdout)
                f.write(e.stderr)      


def run_command_envid(command, envid="1", model="PPO",  password=None):
    """
    Run the command.

    Args:
        command (str): The command to be run.
        envid (str, optional): The environment ID. Defaults to "1".
        model (str, optional): The model to be used. Defaults to "PPO".
        password (str, optional): The password of the server. Defaults to None.

    Returns:
        None
    """
    

    try:
        if password == None:
            result = subprocess.run(command, text=True, check=True, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        else:    
            result = subprocess.run(command, input=password, text=True, check=True, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        with open(f'{model}_cesmlog_{envid}.txt', 'w') as f:
            f.write(now_time())
            if result.stdout is not None:
                f.write(result.stdout)
    except subprocess.CalledProcessError as e:
        with open(f'{model}_cesmlog_{envid}.txt', 'w') as f:
            f.write(now_time())
            if e.stdout is not None:
                f.write(e.stdout)
                f.write(e.stderr)   

def now_time():
    """
    Get the current time
    """
    return "Current time: " + time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + "\n"

def copy_file_if_not_exists(source_path, destination_path):
    # check if the destination file exists
    if not os.path.exists(destination_path):
        # copy the file
        shutil.copy2(source_path, destination_path)

def copy_file_if_not_exists2(source_path, destination_path, lon, lat):
    # check if the destination file exists
    if not os.path.exists(destination_path):
        # copy the file

        ds = xr.open_dataset(source_path)

        # Modify the file
        if float(lon) < 0:
            lon = float(lon) + 360
        llat = int((float(lat)+90)/(180/192))
        llon = int(float(lon)/1.25)
        #paramdict = dict(lsmlat=llat, lsmlon=llon, numurbl=1)
        ds.sel(lsmlat=slice(llat, llat+2), lsmlon=slice(llon, llon+2)).to_netcdf(destination_path)
        #shutil.copy2(source_path, destination_path)