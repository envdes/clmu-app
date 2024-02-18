# Introduction

### [What is a container?](https://docs.docker.com/guides/walkthroughs/what-is-a-container/)
From docker: A container is an isolated environment for your code. This means that a container does not know the machine's operating system or your files. It runs on the environment provided to you by Docker Desktop. Containers have everything that your code needs to run, down to a base operating system. You can use Docker Desktop to manage and explore your containers.

### What is CLMU?

CLMU is the Community Land Model-Urban, hosted by the National Center for Atmospheric Research (NCAR). CLMU acts as an urban model with a single-layer canopy scheme under the Earth system model hierarchy. 

See more details in [CLM Technical Note](https://escomp.github.io/ctsm-docs/versions/master/html/tech_note/Urban/CLM50_Tech_Note_Urban.html). 

![Alt text](fig/clmu.jpg "CLMU")
<center>Urban parameterization in CLMU. <a href="https://escomp.github.io/ctsm-docs/versions/master/html/tech_note/Urban/CLM50_Tech_Note_Urban.html">(Fig sources)</a></center>

### Why use a container for CLMU?

Running CMLU within CLM (Community Land Model) requires a Linux operation system with certain [software requirements](https://escomp.github.io/CESM/versions/cesm2.2/html/introduction.html#cesm2-software-operating-system-prerequisites). Without professional support from technicians, it is a challenge for scientists or other potential users to port the CLM running environment by themselves. Here, we use a container to build an ENV fitting the recent version of [CTSM/CLM](https://github.com/ESCOMP/CTSM). Further, we can apply the container on cloud platforms or local computers to conduct some interesting experiments.

### User notice

Running a global CESM/CTSM case requires a lot of computing resources that cannot be done on a local computer. Therefore, the clmu-app only serves a single point of simulation, and it is not recommended to use container for global simulation. In addition, running a long CESM/CTSM case requires a lot of forcing data, so running it locally will also be taxing. Therefore, we recommend using this container for the following related research:

- single point case, [ref](https://escomp.github.io/ctsm-docs/versions/master/html/users_guide/running-single-points/index.html)
- test case on local before an expensive simulation
- test parameter sensitivity

### [Python for urban climate exploration](5_python_API.md)
We apply some Python codes to help run a case of CLM to explore urban climate. 

