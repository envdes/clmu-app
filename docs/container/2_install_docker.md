### Install Docker and pull container
#### Check system info
We need to get familiar with our computer system before the next steps.
```
lsb_release -a

#LSB Version:    :core-4.1-amd64:core-4.1-noarch
#Distributor ID: CentOS
#Description:    CentOS Linux release 7.9.2009 (Core)
#Release:        7.9.2009
#Codename:       Core
```
#### Install docker

For CentOS, using yum to install packages.

```
# 1 Make your packages upadted, if needed.
sudo yum makecache fast 

# 2 install docker dependences
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 3 add docker repo
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 4 install docker
sudo yum install -y docker-ce docker-ce-cli containerd.io

# 5 start docker
sudo systemctl start docker

# 6 set Docker to boot automatically
sudo systemctl enable docker
# Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.

# 7 check docker
sudo docker --version
# Docker version 24.0.6, build ed223bc

# 8 for more docker info
docker info

# 9 We can reset the Docker Root Dir (/var/lib/docker, for default)

    sudo systemctl stop docker # stop docker

    sudo mkdir -p your_loc/docker/storage # create docker dir

    cat /etc/docker/daemon.json # check the docker configuration

    # if not exsit /etc/docker/daemon.json
    # create a json file using vi/vim or nona
    #{
    #    "data-root": "/datadisk/docker/storage"
    #}

    sudo systemctl start docker # reopen docker
    docker info # check docker configuration
```
#### Pull the ctsm env image
https://hub.docker.com/, the official sources of docker images.


```
docker pull clmu-container # pull the image
```

#### Biuld container

```
# case and inputdata dir
mkdir -vp p/project p/scratch/CESMDATAROOT/inputdata/ForcingData p/pyscripts

# do not change the hostname
docker run --hostname clm5-docker --name clm5.0 -it --mount type=bind,source="$(pwd)"/p,target=/p clm5docker:1
```

#### Install CTSM or CLM5.0
```
# in container
cd /p/project
git clone -b release-clm5.0 https://github.com/ESCOMP/CTSM.git clm5.0
cd clm5.0
./manage_externals/checkout_externals
```

If you need to change the config of CTSM, please refer to [key notes for seting config_manchine.xml](https://bb.cgd.ucar.edu/cesm/threads/issue-installing-on-centos-8-with-slurm-and-lmod.5884/#post-39110)

#### Singularity

Singularity is a container software ususally empoly in HPC. It provides a mechanism to run containers where containers can be used to package entire scientific workflows, software and libraries, and even data.
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

#### Tips for docker commander
- docker ps：check for the running container
- docker stop <container-id>：stop the container
- docker start <container-id>：start the container
- docker restart <container-id>：restart the container
- docker rm <container-id>：remove a container
- docker logs <container-id>：check the logs
- docker exec -it <container-id> /bin/bash：get into a running docker container with Bash shell.