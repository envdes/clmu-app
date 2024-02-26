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

    cd $CASESCRIPT
    # Create a case at the single-point resolutions with their forcing
    ./create_newcase -case testSPDATASETnAtmForcing -res 1x1_vancouverCAN -compset I1PtClm50SpGs
    cd testSPDATASETnAtmForcing

    # Figure out the start and end date for this dataset
    # You can do this by examining the datafile.
    export STOP_N=30
    export START_YEAR=1992
    export STARTDATE=${START_YEAR}-08-12
    ./xmlchange RUN_STARTDATE=$STARTDATE,STOP_N=$STOP_N

    ./case.setup
    ./case.build
    ./case.submit
    # There will need plenty of input data, so it will take a long time to download the data.
    # Make sure you have enough space to store the data.


If you get the result like

.. code-block:: bash

    copying file /p/scratch/CESMDATAROOT/CaseOutputs/testSPDATASETnAtmForcing/run/testSPDATASETnAtmForcing.cpl.r.1992-08-13-21600.nc to /p/scratch/CESMDATAROOT/Archive/rest/1992-08-13-21600/testSPDATASETnAtmForcing.cpl.r.1992-08-13-21600.nc
    Archiving restarts for dart (esp)
    Archiving history files for datm (atm)
    Archiving history files for clm (lnd)
    Archiving history files for mosart (rof)
    Archiving history files for drv (cpl)
    Archiving history files for dart (esp)
    st_archive completed
    ERROR: No result from jobs [('case.run', None), ('case.st_archive', 'case.run or case.test')]

**Congratulations**, you mostly successfully run your case.

If not, try to ask for help in `CESM FORUM <https://bb.cgd.ucar.edu/cesm/>`_

**check the result**

.. code-block:: bash
    ncdump -h /p/scratch/CESMDATAROOT/Archive/rest/1992-08-13-21600/testSPDATASETnAtmForcing.cpl.r.1992-08-13-21600.nc
    # You will see the result of the case.
    #        double fractions_lx_lfrin(fractions_lx_ny, fractions_lx_nx) ;
    #                fractions_lx_lfrin:_FillValue = 1.e+30 ;
    #                fractions_lx_lfrin:units = "unknown" ;
    #                fractions_lx_lfrin:long_name = "unknown" ;
    #                fractions_lx_lfrin:standard_name = "unknown" ;
    #                fractions_lx_lfrin:internal_dname = "fractions_lx" ;
    #
    #// global attributes:
    #                :file_version = "cpl7v10" ;
    #                :model_doi_url = "https://doi.org/10.5065/D67H1H0V" ;
    #}
