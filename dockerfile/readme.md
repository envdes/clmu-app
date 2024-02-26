# 1 installation CTSM-ENV-IMGANE
Junjie Yu, 2023-11-28, Manchester, UK

```
# into the work dir
cd to current dir with a dockerfile and cime_config
docker build -t clmu-app:1 .
```

```
# case and inputdata dir
mkdir -vp p/project p/scratch/CESMDATAROOT/inputdata/ForcingData p/pyscripts
```

# 2 biuld container

```
docker run --hostname clmu-app --name clmu -it clmu-app:1.0
```

# 3 install CTSM or CLM5.0
```
# in docker containls
cd /p/project
git clone -b release-clm5.0 https://github.com/ESCOMP/CTSM.git myclm
cd myclm
./manage_externals/checkout_externals
```

# [key notes for seting config_manchine.xml](https://bb.cgd.ucar.edu/cesm/threads/issue-installing-on-centos-8-with-slurm-and-lmod.5884/#post-39110)
The reference set it wrong.

***This is the corret version***
You have defined it here...

<DIN_LOC_ROOT_CLMFORC>common/contrib/cesm/inputdata/lmwg</DIN_LOC_ROOT_CLMFORC>

Change it so that it points to this...

<DIN_LOC_ROOT_CLMFORC>$DIN_LOC_ROOT/atm/datm7</DIN_LOC_ROOT_CLMFORC>

that should then get the paths to line up so it can download the data. As we talk about in the first link I share above I recommend that you only download the forcing data a few years at a time. It's likely going to take days to download and as such you don't want to do it all once.


# 4 Singularity

Singularity provides a mechanism to run containers where containers can be used to package entire scientific workflows, software and libraries, and even data.
Ref: https://ri.itservices.manchester.ac.uk/csf3/software/applications/singularity/

Using Singularity from docker image

```
# save image as tar file
docker save -o ~/docker/clm5docker.tar clm5docker:1
# transport tar file
scp ~/docker/clm5docker.tar ...
# biuld image form tar
singularity build clm5docker.sif docker-archive://clm5docker.tar
scp /Users/user/Documents/GitHub/DRL_urban_climate_adaptation/2_CTSM_container/dockerfile/cime_config/config_machines.xml z47137jy@csf3.itservices.manchester.ac.uk:~/.cime
scp /Users/user/Documents/GitHub/DRL_urban_climate_adaptation/2_CTSM_container/dockerfile/cime_config/config_compilers.xml z47137jy@csf3.itservices.manchester.ac.uk:~/.cime
mkdir -vp p/project p/scratch/CESMDATAROOT/inputdata

singularity run --hostname clm5-docker -B "$(pwd)"/p:/p clm5docker.sif # do not change hostname, either need to change cime.config file 

singularity run --net --network=none --hostname clm5-docker -B "$(pwd)"/p:/p clm5docker.sif

# then in singularity, as singularity are not same as 
# CLM5 environment variables

export PROJECT=/p/project
export SCRATCH=/p/scratch
export BUDGET_ACCOUNTS=slts
export CESMDATAROOT=/p/scratch/CESMDATAROOT
export CSMDATA=/p/scratch/CESMDATAROOT/inputdata
export CASESCRIPT=/p/project/myclm/cime/scripts
export OMPI_ALLOW_RUN_AS_ROOT_CONFIRM=1
export OMPI_ALLOW_RUN_AS_ROOT=1
```