# Install Docker
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