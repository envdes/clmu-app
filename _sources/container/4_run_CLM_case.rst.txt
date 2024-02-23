Run a CLM case
==============

We use the interactive way to run CLM case via docker container

.. code-block:: bash

    # start the clmu container
    sudo docker start myclmu

    # Use interactivate way to operate container
    docker exec -it myclmu /bin/bash
    # Now we are in the Fedora 31 Bash.


Try to run a single-point case
------------------------------

`How to run a single-point case? <https://escomp.github.io/ctsm-docs/versions/master/html/users_guide/running-single-points/index.html>`_

.. code-block:: bash

    cd scripts
    # Create a case at the single-point resolutions with their forcing
    ./create_newcase -case testSPDATASETnAtmForcing -res 1x1_vancouverCAN -compset I1PtClm50SpGs
    cd testSPDATASETnAtmForcing

    # Figure out the start and end date for this dataset
    # You can do this by examining the datafile.
    set STOP_N=330
    set START_YEAR=1992
    set STARTDATE=${START_YEAR}-08-12
    @ NDAYS = $STOP_N / 24
    ./xmlchange RUN_STARTDATE=$STARTDATE,STOP_N=$STOP_N,STOP_OPTION=nsteps

    # Set the User namelist to set the output frequencies of the history files
    # Setting the stdurbpt use-case option create three history file streams
    # Set frequencies and numbers of time-samples for outputs
    cat << EOF > user_nl_clm
    hist_mfilt = $NDAYS,$STOP_N,$STOP_N
    hist_nhtfrq = -1,1,1
    EOF

    ./case.setup
    ./case.build
    ./case.submit


If you get the result like

.. code-block:: bash

    ./case.submit
    Submitting case...
    check for resubmit
    dout_s True 
    resubmit_num 0
    Submit job case.st_archive
    ERROR: No result from jobs [('case.run', None), ('case.st_archive', 'case.run or case.test')]

**Congratulations**, you mostly successfully run your case.

If not, try to ask for help in `CESM FORUM <https://bb.cgd.ucar.edu/cesm/>`_