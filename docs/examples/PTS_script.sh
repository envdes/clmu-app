#!/bin/bash

# Junjie Yu, 2023-11-24, Manchester, UK
# This script is used to create a CESM case with the PTS mode on.

export USER=root
source ~/.bashrc

cd ${CASESCRIPT} # scripts folder

if [ -d "${case_name}" ]; then
    cd ${case_name}
else
    ./create_newcase --case ${case_name} --res ${resolution} --compset ${compset} --run-unsupported
    cd ${case_name}

    ./xmlchange PTS_MODE=TRUE,PTS_LAT=${case_lat},PTS_LON=${case_lon}

    ./xmlchange DATM_CLMNCEP_YR_START=${case_start_year}
    ./xmlchange DATM_CLMNCEP_YR_END=${case_end_year}
    ./xmlchange RUN_STARTDATE=${case_start_year}-01-01
    ./xmlchange STOP_OPTION='nyear'
    ./xmlchange STOP_N=${case_length}
    ./xmlchange NTASKS=1
    ./xmlchange CLM_FORCE_COLDSTART=on

    # Set up the case
    ./case.setup

    # Modify the user_nl_clm file

    echo "hist_avgflag_pertape='${hist_avgflag_pertape}'" >> user_nl_clm
    echo "hist_nhtfrq=${hist_nhtfrq}" >> user_nl_clm
    echo "hist_mfilt=${hist_mfilt}" >> user_nl_clm

    echo "hist_empty_htapes = .true." >> user_nl_clm
    echo "hist_fincl1='TREFMNAV','TREFMXAV'" >> user_nl_clm

    echo "hist_dov2xy=.false." >> user_nl_clm
    echo "hist_type1d_pertape='LAND'" >> user_nl_clm
    echo "fsurdat='${fsurdat}'" >> user_nl_clm

    # Set up the case
    ./case.build
fi


./xmlchange DATM_CLMNCEP_YR_START=${case_start_year}
./xmlchange DATM_CLMNCEP_YR_END=${case_end_year}
./xmlchange RUN_STARTDATE=${case_start_year}-06-01
./xmlchange STOP_OPTION='nmonths'
./xmlchange STOP_N=${case_length}
./xmlchange NTASKS=1
./xmlchange CLM_FORCE_COLDSTART=on

# Submit the case
./case.submit