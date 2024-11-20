# Run container

We can use docker or singularity to run a container.

## Docker
#### Pull the clmu-app image
[Docker Hub](https://hub.docker.com/) is the official source of docker images.
The CLMU-App is located at [**envdes/clmu-app**](https://hub.docker.com/r/envdes/clmu-app)

```
docker pull envdes/clmu-app:1.0 # pull the image
```

#### Build container

```
# Do not change the hostname
# ContainerName --> user defines (in this document, ContainerName is myclmu)
docker run --hostname clmu-app --name ContainerName -it envdes/clmu-app:1.0
# Now we are in the Fedora 31 Bash.
```

If user wants to change the hostname, make sure to change the configuration of CESM/CTSM.

#### Install CLM5.0 (installed in clmu-app)

The CLM5.0 was install in `/p/project/clm5.0`.

User can install it other dir using commanders below, but make sure the container environment are suitable for the installed CLM. 

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

# run the container via sif image
# singularity only need image to run container
singularity run --hostname clmu-app clmu-app.sif 
# we can also bind the p dir in local to contianer
singularity run --hostname clmu-app -B "$(pwd)"/p:/p clmu-app.sif 
# Do not change hostname, either need to change cime.config file 

# Note to export the environment variables if using singularity clmu-app
export CESMDATAROOT=/p/scratch/CESMDATAROOT
export CSMDATA=/p/scratch/CESMDATAROOT/inputdata
export CASESCRIPT=/p/project/clm5.0/cime/scripts
```

#### Tips for docker commands
- docker ps: check for the running container
- docker stop <container-id>: stop the container
- docker start <container-id>: start the container
- docker restart <container-id>: restart the container
- docker rm <container-id>: remove a container
- docker logs <container-id>: check the logs
- docker exec -it <container-id> /bin/bash: get into a running docker container with Bash shell