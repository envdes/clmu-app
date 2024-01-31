# Run a CLM case
We use the interactive way to run CLM case via docker container

```
# start the clm container
sudo docker start myclm

docker exec -it myclm /bin/bash
# Now we are in the Fedora 31 Bash.

```

## Try to run a single piont case

[How run a single point case?](https://escomp.github.io/ctsm-docs/versions/master/html/users_guide/running-single-points/index.html)

```
> cd scripts

# Create a case at the single-point resolutions with their forcing
> ./create_newcase -case testSPDATASETnAtmForcing -res 1x1_vancouverCAN -compset I1PtClm50SpGs
> cd testSPDATASETnAtmForcing

# Figure out the start and end date for this dataset
# You can do this by examining the datafile.
> set STOP_N=330
> set START_YEAR=1992
> set STARTDATE=${START_YEAR}-08-12
> @ NDAYS = $STOP_N / 24
> ./xmlchange RUN_STARTDATE=$STARTDATE,STOP_N=$STOP_N,STOP_OPTION=nsteps

# Set the User namelist to set the output frequencies of the history files
# Setting the stdurbpt use-case option create three history file streams
# The frequencies and number of time-samples needs to be set
> cat << EOF > user_nl_clm
hist_mfilt = $NDAYS,$STOP_N,$STOP_N
hist_nhtfrq = -1,1,1
EOF

> ./case.setup
> ./case.biuld
> ./case.submit
```

If you get the result like
```
...
check for resubmit
dout_s True 
mach clm5-docker 
resubmit_num 0
Submit job case.st_archive
ERROR: No result from jobs [('case.run', None), ('case.st_archive', 'case.run or case.test')]
```
**Congratuation**, you mostly successfully run your case.

If not, try to ask for help. [CESM FORUM](https://bb.cgd.ucar.edu/cesm/)