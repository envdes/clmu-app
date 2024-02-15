# Docker Tips for clmu-app

### Install Docker and pull the container
#### Check system info
First of all, get familiar with our computer system before the next steps. Noted that the commands below run in Linux.  
```
lsb_release -a

#LSB Version:    core-4.1-amd64:core-4.1-noarch
#Distributor ID: CentOS
#Description:    CentOS Linux release 7.9.2009 (Core)
#Release:        7.9.2009
#Codename:       Core
```
#### Install docker

Use **yum** to install packages in CentOS.

```
# 1 Make your packages updated, if needed.
sudo yum makecache fast 

# 2 Install docker dependences
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 3 Add docker repo
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 4 Install docker
sudo yum install -y docker-ce docker-ce-cli containerd.io

# 5 Start docker
sudo systemctl start docker

# 6 Set Docker to boot automatically
sudo systemctl enable docker
# Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.

# 7 Check docker
sudo docker --version
# Docker version 24.0.6, build ed223bc

# 8 Check more docker info
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
#### Pull the clmu-app image
https://hub.docker.com/, the official sources of docker images.


```
docker pull installed in clmu-app # pull the image
```

#### Build container (installed in clmu-app)

```
# Do not change the hostname
# ContainerName --> user define
docker run --hostname clmu-app --name ContainerName -it clmu-app:1
```

#### Install CLM5.0 (installed in clmu-app)
```

# Noted, clm5.0 has beed installed in /p/project
# In the container directory
cd /p/project
git clone -b release-clm5.0 https://github.com/ESCOMP/CTSM.git clm5.0
cd clm5.0
./manage_externals/checkout_externals

# Check if all components needed are downloaded
./manage_externals/checkout_externals -S
```

If you want to modify model configuration, please refer to [key notes for setting config_manchine.xml](https://bb.cgd.ucar.edu/cesm/threads/issue-installing-on-centos-8-with-slurm-and-lmod.5884/#post-39110).

#### Optional: Singularity (Container software for HPC)

Singularity is a container software usually employed in HPC. It provides a mechanism to run containers where containers can be used to package entire scientific workflows, software and libraries, and even data.
Ref: https://ri.itservices.manchester.ac.uk/csf3/software/applications/singularity/

Using Singularity from the docker image

```
# Save image as tar file
docker save -o ~/docker/clmu-app.tar clmu-app:1
# Transport tar file
scp ~/docker/clmu-app.tar ...
# Biuld image form tar
singularity build clmu-app.sif docker-archive://clmu-app.tar
scp /Users/user/Documents/GitHub/DRL_urban_climate_adaptation/2_CTSM_container/dockerfile/cime_config/config_machines.xml z47137jy@csf3.itservices.manchester.ac.uk:~/.cime
scp /Users/user/Documents/GitHub/DRL_urban_climate_adaptation/2_CTSM_container/dockerfile/cime_config/config_compilers.xml z47137jy@csf3.itservices.manchester.ac.uk:~/.cime
mkdir -vp p/project p/scratch/CESMDATAROOT/inputdata

singularity run --hostname clmu-app -B "$(pwd)"/p:/p clmu-app.sif 
# Do not change hostname, either need to change cime.config file 

# Export CLM5 environment variables
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
- docker ps: check for the running container
- docker stop <container-id>: stop the container
- docker start <container-id>: start the container
- docker restart <container-id>: restart the container
- docker rm <container-id>: remove a container
- docker logs <container-id>: check the logs
- docker exec -it <container-id> /bin/bash: get into a running docker container with Bash shell