Search.setIndex({"docnames": ["cesm", "container/1_intro_container", "container/2_install_docker", "container/3_CLMU_env_details", "container/4_run_CLM_case", "container/5_python_API", "examples/Single_point_modeling", "examples/modify_urban", "index", "modules"], "filenames": ["cesm.rst", "container/1_intro_container.md", "container/2_install_docker.md", "container/3_CLMU_env_details.md", "container/4_run_CLM_case.md", "container/5_python_API.md", "examples/Single_point_modeling.ipynb", "examples/modify_urban.ipynb", "index.rst", "modules.rst"], "titles": ["python API", "Introduction", "Install Docker and pull the container", "CLM ENV Container detail", "Run a CLM case", "Wrokflow of cesm.py", "Single point modeling of CLMU", "How dose the land surface affect the urban cliamte?", "CLMU APP", "scr"], "terms": {"class": 0, "cesm": [0, 4, 8], "cesm_run": [0, 6, 7, 8, 9], "casescript": [0, 2, 6, 7], "casescript_loc": [0, 6, 7], "caseroot_loc": [0, 6, 7], "dout_s_root": [0, 6, 7], "jsonpath": [0, 6], "base": [0, 1, 3, 6], "object": [0, 6], "method": 0, "create_cas": [0, 6, 7, 9], "scriptpath": [0, 6, 7], "creat": [0, 2, 4, 6], "case": [0, 1, 6, 8], "script": [0, 2, 4, 8], "singl": [0, 1, 5, 8], "point": [0, 5, 8], "model": [0, 1, 2, 5, 8], "paramet": 0, "filepath": 0, "str": 0, "file": [0, 1, 2, 4, 6], "path": [0, 6], "config": [0, 2, 6], "return": 0, "The": 0, "type": [0, 6], "modify_case_config": [0, 9], "scriptpaht": 0, "modifi": [0, 2, 8], "dict": 0, "configur": [0, 2], "data": [0, 2, 8], "modify_surf": [0, 7, 9], "var": [0, 2, 7], "action": [0, 7], "param_loc": 0, "surfac": [0, 8], "variabl": [0, 2, 6], "taken": 0, "locat": [0, 6, 7], "nc_view": [0, 6, 7, 9], "view": [0, 8], "netcdf": [0, 3], "should": 0, "folder": [0, 6], "xarrai": [0, 6], "dataset": [0, 4, 6], "read_json_config": [0, 9], "read": 0, "json": [0, 2, 6, 7], "file_path": 0, "reset_cas": [0, 6, 7, 9], "password": [0, 6, 7], "none": [0, 2, 4, 6], "reset": [0, 2, 6], "delet": 0, "server": [0, 6, 7], "result": [0, 4, 8], "command": [0, 6, 7, 8], "subprocess": 0, "completedprocess": 0, "copy_file_if_not_exist": [0, 8, 9], "source_path": 0, "destination_path": 0, "copy_file_if_not_exists2": [0, 8, 9], "lon": [0, 6, 7], "lat": [0, 6, 7], "now_tim": [0, 6, 7, 8, 9], "get": [0, 2, 4, 8], "current": [0, 6, 7], "time": [0, 4, 6, 7], "run_command": [0, 6, 7, 8, 9], "run": [0, 1, 2, 8], "There": 0, "ar": [0, 2, 4, 6], "two": 0, "wai": [0, 4], "without": [0, 1, 6], "loge": 0, "save": [0, 2], "log_ppo": 0, "txt": 0, "option": [0, 4], "run_command_envid": [0, 8, 9], "envid": 0, "1": [0, 2, 3, 4, 8], "ppo": 0, "environ": [0, 1, 2, 3], "id": [0, 2, 6], "default": [0, 2], "us": [0, 2, 4, 8], "from": [1, 2, 4, 6, 7], "docker": [1, 4, 6, 7, 8], "A": 1, "an": 1, "isol": 1, "your": [1, 2, 4, 6], "code": 1, "thi": [1, 4, 6], "mean": [1, 6], "doe": 1, "know": 1, "machin": [1, 6], "": [1, 2, 6, 7], "oper": 1, "system": [1, 8], "It": [1, 2], "provid": [1, 2], "you": [1, 2, 4, 6], "desktop": 1, "have": 1, "everyth": 1, "need": [1, 2, 6], "down": 1, "can": [1, 2, 4, 6, 7], "manag": [1, 2], "commun": [1, 6], "land": [1, 6, 8], "host": 1, "nation": 1, "center": 1, "atmospher": 1, "research": 1, "ncar": 1, "act": 1, "layer": [1, 6], "canopi": 1, "scheme": 1, "under": 1, "earth": 1, "hierarchi": 1, "see": [1, 6], "more": [1, 2], "detail": [1, 8], "clm": [1, 8], "technic": 1, "note": [1, 2, 6], "parameter": 1, "cmlu": [1, 3], "fig": [1, 6, 7], "sourc": [1, 2, 6], "within": 1, "requir": 1, "linux": [1, 2], "certain": 1, "softwar": [1, 2], "profession": 1, "support": 1, "technician": 1, "challeng": 1, "scientist": 1, "other": [1, 6, 7], "potenti": 1, "user": [1, 2, 4], "port": 1, "themselv": 1, "here": [1, 7], "we": [1, 2, 4, 7], "build": [1, 4, 8], "env": [1, 6, 7, 8], "fit": 1, "recent": 1, "version": [1, 2], "ctsm": [1, 2, 6], "further": 1, "appli": 1, "cloud": 1, "platform": 1, "local": [1, 6], "comput": [1, 2, 6], "conduct": 1, "some": 1, "interest": 1, "experi": 1, "help": [1, 4], "first": 2, "all": 2, "familiar": 2, "our": 2, "befor": [2, 6], "next": 2, "step": [2, 6], "below": 2, "lsb_releas": 2, "lsb": 2, "core": 2, "4": [2, 3, 6], "amd64": 2, "noarch": 2, "distributor": 2, "cento": 2, "descript": 2, "releas": [2, 6], "7": [2, 3, 6], "9": [2, 3, 6], "2009": 2, "codenam": 2, "yum": 2, "packag": 2, "make": 2, "updat": 2, "sudo": [2, 4, 6, 7], "makecach": 2, "fast": 2, "2": [2, 3, 8], "depend": 2, "y": 2, "util": [2, 6, 7], "devic": 2, "mapper": 2, "persist": 2, "lvm2": 2, "3": [2, 3, 8], "add": [2, 6, 7], "repo": 2, "http": [2, 6, 7], "download": 2, "com": 2, "ce": 2, "cli": 2, "containerd": 2, "io": 2, "5": [2, 3, 6, 7], "start": [2, 4], "systemctl": 2, "6": [2, 6], "set": [2, 4, 6, 7], "boot": 2, "automat": 2, "enabl": 2, "symlink": 2, "etc": 2, "systemd": 2, "multi": 2, "target": 2, "want": 2, "servic": 2, "usr": 2, "lib": 2, "24": [2, 4], "ed223bc": 2, "8": [2, 6], "root": 2, "dir": 2, "stop": 2, "mkdir": 2, "p": [2, 6, 7], "your_loc": 2, "storag": 2, "cat": [2, 4], "daemon": 2, "exsit": 2, "vi": 2, "vim": 2, "nona": 2, "datadisk": 2, "reopen": 2, "hub": 2, "offici": 2, "do": [2, 4, 6], "chang": [2, 6, 7], "hostnam": [2, 6], "name": [2, 6], "containernam": 2, "In": 2, "directori": 2, "cd": [2, 4], "project": [2, 6, 7], "git": 2, "clone": 2, "b": 2, "github": 2, "escomp": 2, "manage_extern": 2, "checkout_extern": 2, "compon": 2, "If": [2, 4], "pleas": 2, "refer": 2, "kei": 2, "_": 2, "manchin": 2, "xml": 2, "i": [2, 8], "usual": 2, "emploi": 2, "hpc": 2, "mechan": 2, "where": 2, "entir": 2, "scientif": 2, "workflow": 2, "librari": 2, "even": 2, "ref": 2, "ri": 2, "itservic": 2, "manchest": [2, 6, 7], "ac": 2, "uk": [2, 6, 7], "csf3": 2, "applic": 2, "tar": 2, "o": [2, 3], "clm5docker": [2, 6, 7], "transport": 2, "scp": 2, "biuld": 2, "form": 2, "sif": 2, "archiv": [2, 6, 7], "document": 2, "drl_urban_climate_adapt": 2, "2_ctsm_contain": 2, "dockerfil": 2, "cime_config": 2, "config_machin": 2, "z47137jy": 2, "cime": [2, 6, 7], "config_compil": 2, "vp": 2, "scratch": [2, 6, 7], "cesmdataroot": [2, 6, 7], "inputdata": 2, "pwd": 2, "either": 2, "net": 2, "network": 2, "export": 2, "budget_account": 2, "slt": 2, "csmdata": 2, "myclm": [2, 4, 6, 7], "ompi_allow_run_as_root_confirm": 2, "ompi_allow_run_as_root": 2, "restart": 2, "rm": 2, "remov": 2, "log": 2, "exec": [2, 4, 6, 7], "bin": [2, 4], "bash": [2, 4], "shell": [2, 8], "fedora": [3, 4], "31": [3, 4], "major": 3, "app": [3, 5], "compil": 3, "gcc": 3, "cmake": 3, "18": [3, 6], "c": [3, 6, 7], "0": [3, 4, 6, 7, 8], "fortran": 3, "python": [3, 5, 8, 9], "svn": 3, "12": [3, 4, 6, 7], "interact": 4, "via": [4, 8], "contain": [4, 6, 7], "now": 4, "how": [4, 8], "resolut": 4, "forc": 4, "create_newcas": 4, "testspdatasetnatmforc": 4, "re": 4, "1x1_vancouvercan": 4, "compset": 4, "i1ptclm50spg": 4, "figur": 4, "out": 4, "end": 4, "date": [4, 6], "examin": 4, "datafil": 4, "stop_n": 4, "330": 4, "start_year": 4, "1992": 4, "startdat": 4, "08": [4, 6], "ndai": 4, "xmlchang": 4, "run_startd": 4, "stop_opt": 4, "nstep": [4, 6], "namelist": 4, "output": [4, 6], "frequenc": 4, "histori": [4, 6], "stdurbpt": 4, "three": 4, "stream": 4, "number": 4, "sampl": 4, "eof": 4, "user_nl_clm": 4, "hist_mfilt": 4, "hist_nhtfrq": 4, "setup": 4, "submit": 4, "like": 4, "check": [4, 8], "resubmit": 4, "dout_": 4, "true": [4, 6, 7], "mach": 4, "clm5": [4, 6, 7, 8], "resubmit_num": 4, "job": 4, "st_archiv": 4, "error": 4, "No": 4, "test": [4, 6], "congratul": 4, "mostli": 4, "successfulli": 4, "ask": 4, "forum": 4, "api": [5, 9], "drive": [5, 8], "clmu": 5, "junji": [6, 7, 8], "yu": [6, 7, 8], "2023": [6, 7], "06": [6, 7], "rl_urban": [6, 7], "imag": [6, 7, 8], "simul": [6, 7, 8], "new": [6, 7], "york": [6, 7], "citi": [6, 7], "coordin": [6, 7], "replac": [6, 7], "40": [6, 7], "42": [6, 7], "46": [6, 7], "n": [6, 7], "74": [6, 7], "00": [6, 7], "22": [6, 7], "w": [6, 7], "en": [6, 7], "wikipedia": [6, 7], "org": [6, 7], "wiki": [6, 7], "new_york_c": [6, 7], "import": [6, 7], "print": [6, 7], "home": [6, 7], "zhonghua": [6, 7, 8], "caseoutput": [6, 7], "scr": [6, 7], "pts_ssp370": 6, "sh": [6, 7], "configpath": [6, 7], "config_ssp370": 6, "cesm2": 6, "e": 6, "g": 6, "case_lat": 6, "case_lon": 6, "25": 6, "case_nam": 6, "fsurdat": 6, "f19_g16": 6, "b1850": 6, "c090918": 6, "clm2": 6, "r": 6, "5x0": 6, "5_20090202": 6, "nc": 6, "input": [6, 7], "permiss": [6, 7], "command_0": [6, 7], "chmod": [6, 7], "x": [6, 7], "pyscript": [6, 7], "open": [6, 7], "f": [6, 7], "write": [6, 7], "d0": [6, 7], "09": 6, "16": 6, "26": 6, "05": 6, "case_start_year": 6, "2055": 6, "d2055": 6, "lt": 6, "gt": 6, "dimens": 6, "levgrnd": 6, "levlak": 6, "10": [6, 7], "levdcmp": 6, "hist_interv": 6, "column": 6, "14": 6, "gridcel": 6, "landunit": 6, "pft": 6, "28": 6, "float32": 6, "01": 6, "04": 6, "19": 6, "48": 6, "87": 6, "34": [6, 7], "33": 6, "44": 6, "78": 6, "07": 6, "286": 6, "54": 6, "mcdate": 6, "int32": 6, "mcsec": 6, "mdcur": 6, "mscur": 6, "time_bound": 6, "pfts1d_itype_veg": 6, "pfts1d_itype_col": 6, "pfts1d_itype_lunit": 6, "pfts1d_activ": 6, "trefmnav": 6, "trefmxav": 6, "attribut": 6, "38": 6, "titl": 6, "inform": 6, "comment": 6, "convent": 6, "cf": 6, "23": 6, "13": 6, "clm4": 6, "ctype_urban_shadewal": 6, "73": 6, "ctype_urban_impervious_road": 6, "ctype_urban_pervious_road": 6, "75": 6, "cft_c3_crop": 6, "cft_c3_irrig": 6, "time_period_freq": 6, "month_1xarrai": 6, "datasetdimens": 6, "25levlak": 6, "10levdcmp": 6, "1time": 6, "3hist_interv": 6, "2lon": 6, "1lat": 6, "1column": 6, "14gridcel": 6, "1landunit": 6, "5pft": 6, "28coordin": 6, "float320": 6, "0long_nam": 6, "soil": 6, "levelsunit": 6, "marrai": 6, "000000e": 6, "02": 6, "600000e": 6, "800000e": 6, "060000e": 6, "360000e": 6, "700000e": 6, "080000e": 6, "500000e": 6, "990000e": 6, "580000e": 6, "270000e": 6, "950000e": 6, "940000e": 6, "030000e": 6, "795000e": 6, "332777e": 6, "948313e": 6, "887072e": 6, "199844e": 6, "dtype": 6, "78long_nam": 6, "lake": 6, "325": 6, "775": 6, "float321": 6, "object2055": 6, "long_nam": 6, "timebound": 6, "time_boundsarrai": 6, "cftime": 6, "datetimenoleap": 6, "has_year_zero": 6, "float32286": 6, "2long_nam": 6, "longitudeunit": 6, "degrees_eastarrai": 6, "float3240": 6, "05long_nam": 6, "latitudeunit": 6, "degrees_northarrai": 6, "052357": 6, "yyyymmdd": 6, "valu": 6, "second": 6, "dateunit": 6, "dai": 6, "interv": 6, "endpoint": 6, "date_written": 6, "s16": 6, "time_written": 6, "area": 6, "grid": [6, 7], "cell": 6, "areasunit": 6, "km": 6, "landfrac": 6, "fraction": 6, "landmask": 6, "float64": 6, "ocean": 6, "mask": 6, "pftmask": 6, "real": 6, "fake": 6, "nbedrock": 6, "index": [6, 8], "shallowest": 6, "bedrock": 6, "zsoi": 6, "depthunit": 6, "m": 6, "350": 6, "dzsoi": 6, "thicknessunit": 6, "watsat": 6, "satur": 6, "water": 6, "content": 6, "poros": 6, "unit": 6, "mm3": 6, "sucsat": 6, "matric": 6, "potentialunit": 6, "mm": 6, "bsw": 6, "slope": 6, "retent": 6, "curveunit": 6, "unitless": 6, "hksat": 6, "hydraul": 6, "conductivityunit": 6, "zlake": 6, "node": 6, "140": 6, "dzlake": 6, "grid1d_lon": 6, "degrees_east": 6, "grid1d_lat": 6, "degrees_north": 6, "grid1d_ixi": 6, "2d": 6, "longitud": 6, "correspond": 6, "grid1d_jxi": 6, "latitud": 6, "land1d_lon": 6, "land1d_lat": 6, "land1d_ixi": 6, "land1d_jxi": 6, "land1d_wtgcel": 6, "weight": 6, "rel": 6, "land1d_ityplunit": 6, "veget": 6, "urban": [6, 8], "wetland": 6, "glacier": 6, "glacier_mec": 6, "land1d_act": 6, "landunitflag_valu": 6, "flag_mean": 6, "fals": 6, "truevalid_rang": 6, "cols1d_lon": 6, "cols1d_lat": 6, "cols1d_ixi": 6, "cols1d_jxi": 6, "cols1d_wtgcel": 6, "cols1d_wtlunit": 6, "cols1d_itype_col": 6, "global": 6, "cols1d_itype_lunit": 6, "cols1d_act": 6, "columnflag_valu": 6, "pfts1d_lon": 6, "pfts1d_lat": 6, "pfts1d_ixi": 6, "pfts1d_jxy": 6, "pfts1d_wtgcell": 6, "pfts1d_wtlunit": 6, "pfts1d_wtcol": 6, "pftflag_valu": 6, "daili": 6, "minimum": 6, "averag": 6, "temperatureunit": 6, "kcell_method": 6, "15": [6, 7], "maximum": 6, "levgrndpandasindexpandasindex": 6, "009999999776482582": 6, "03999999910593033": 6, "09000000357627869": 6, "1599999964237213": 6, "25999999046325684": 6, "4000000059604645": 6, "5799999833106995": 6, "800000011920929": 6, "059999942779541": 6, "3600000143051147": 6, "7000000476837158": 6, "0799999237060547": 6, "990000009536743": 6, "5799999237060547": 6, "269999980926514": 6, "949999809265137": 6, "940000057220459": 6, "029999732971191": 6, "795000076293945": 6, "327767372131348": 6, "483129501342773": 6, "870723724365234": 6, "41": 6, "998435974121094": 6, "x27": 6, "levlakpandasindexpandasindex": 6, "05000000074505806": 6, "6000000238418579": 6, "0999999046325684": 6, "599999904632568": 6, "100000381469727": 6, "600000381469727": 6, "32500076293945": 6, "775001525878906": 6, "levdcmppandasindexpandasindex": 6, "timepandasindexpandasindex": 6, "cftimeindex": 6, "length": 6, "calendar": 6, "noleap": 6, "freq": 6, "lonpandasindexpandasindex": 6, "latpandasindexpandasindex": 6, "informationcom": 6, "0histori": 6, "13sourc": 6, "0hostnam": 6, "dockerusernam": 6, "rootvers": 6, "35": 6, "gd010e00d5revision_id": 6, "histfilemod": 6, "f90": 6, "42903": 6, "2012": 6, "21": 6, "32": 6, "10z": 6, "muszala": 6, "case_titl": 6, "unsetcase_id": 6, "ssp370_expsurface_dataset": 6, "surfdata_0": 6, "9x1": 6, "25_hist_16pfts_irrig_cmip6_simyr1850_c190214": 6, "ncinitial_conditions_dataset": 6, "arbitrari": 6, "initializationpft_physiological_constants_dataset": 6, "clm5_param": 6, "c171117": 6, "ncltype_vegetated_or_bare_soil": 6, "1ltype_crop": 6, "2ltype_unus": 6, "3ltype_landice_multiple_elevation_class": 6, "4ltype_deep_lak": 6, "5ltype_wetland": 6, "6ltype_urban_tbd": 6, "7ltype_urban_hd": 6, "8ltype_urban_md": 6, "9ctype_vegetated_or_bare_soil": 6, "1ctype_crop": 6, "2ctype_crop_noncompet": 6, "100": 6, "cft_lb": 6, "cft_ubctype_landic": 6, "3ctype_landice_multiple_elevation_class": 6, "glcnecctype_deep_lak": 6, "5ctype_wetland": 6, "6ctype_urban_roof": 6, "71ctype_urban_sunwal": 6, "72ctype_urban_shadewal": 6, "73ctype_urban_impervious_road": 6, "74ctype_urban_pervious_road": 6, "75cft_c3_crop": 6, "1cft_c3_irrig": 6, "2time_period_freq": 6, "month_1": 6, "matplotlib": [6, 7], "pyplot": [6, 7], "plt": [6, 7], "ax": [6, 7], "subplot": [6, 7], "figsiz": [6, 7], "assign_coord": 6, "dim": 6, "plot": [6, 7], "scatter": 6, "500": 6, "label": [6, 7], "2035": 6, "set_xlabel": [6, 7], "lanuint": 6, "set_ylabel": [6, 7], "2m": 6, "air": 6, "temperatur": 6, "legend": [6, 7], "loc": 6, "upper": 6, "left": 6, "bbox_to_anchor": 6, "line": [6, 7], "color": [6, 7], "grai": [6, 7], "linestyl": [6, 7], "dash": [6, 7], "align": [6, 7], "axi": [6, 7], "tick": [6, 7], "set_axisbelow": [6, 7], "show": [6, 7], "29": 6, "pts_script": 7, "config_newyork": 7, "hia_u": 7, "hia_r": 7, "45": 7, "albedo": 7, "abl": 7, "roof": 7, "wall": 7, "respect": 7, "explor": [7, 8], "hia": 7, "gird": 7, "indic": 7, "alb_roof_dir": 7, "d_m_roof": 7, "alb_wall_dir": 7, "d_m_wall": 7, "d_m_roof_wal": 7, "rest": 7, "arrai": 7, "192": 7, "30399999": 7, "27200001": 7, "json_file_path": 7, "raw": 7, "author": 8, "dr": 8, "zheng": 8, "yuan": 8, "sun": 8, "keith": 8, "oleson": 8, "introduct": 8, "what": 8, "why": 8, "climat": 8, "instal": 8, "pull": 8, "info": 8, "singular": 8, "tip": 8, "try": 8, "wrokflow": 8, "py": 8, "dose": 8, "affect": 8, "cliamt": 8, "modul": 8, "search": 8, "page": 8}, "objects": {"": [[0, 0, 0, "-", "cesm"]], "cesm": [[0, 1, 1, "", "cesm_run"], [0, 3, 1, "", "copy_file_if_not_exists"], [0, 3, 1, "", "copy_file_if_not_exists2"], [0, 3, 1, "", "now_time"], [0, 3, 1, "", "run_command"], [0, 3, 1, "", "run_command_envid"]], "cesm.cesm_run": [[0, 2, 1, "", "create_case"], [0, 2, 1, "", "modify_case_config"], [0, 2, 1, "", "modify_surf"], [0, 2, 1, "", "nc_view"], [0, 2, 1, "", "read_json_config"], [0, 2, 1, "", "reset_case"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"python": [0, 1], "api": [0, 8], "introduct": 1, "what": 1, "i": 1, "contain": [1, 2, 3, 8], "clmu": [1, 2, 6, 8], "why": 1, "us": 1, "urban": [1, 7], "climat": 1, "explor": 1, "instal": 2, "docker": 2, "pull": 2, "check": 2, "system": 2, "info": 2, "clm": [2, 3, 4, 6, 7], "env": [2, 3], "imag": 2, "build": 2, "app": [2, 8], "clm5": 2, "0": 2, "singular": 2, "tip": 2, "command": 2, "detail": 3, "run": [4, 6, 7], "case": 4, "try": 4, "singl": [4, 6], "point": [4, 6], "wrokflow": 5, "cesm": [5, 6, 7], "py": 5, "model": 6, "1": [6, 7], "get": [6, 7], "shell": [6, 7], "script": [6, 7], "2": [6, 7], "modifi": [6, 7], "data": [6, 7], "3": [6, 7], "view": [6, 7], "result": [6, 7], "how": 7, "dose": 7, "land": 7, "surfac": 7, "affect": 7, "cliamt": 7, "exampl": 8, "refer": 8, "indic": 8, "tabl": 8, "scr": 9}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "nbsphinx": 4, "sphinx": 58}, "alltitles": {"python API": [[0, "module-cesm"]], "Introduction": [[1, "introduction"]], "What is a container?": [[1, "what-is-a-container"]], "What is CLMU?": [[1, "what-is-clmu"]], "Why use a container for CLMU?": [[1, "why-use-a-container-for-clmu"]], "Python for urban climate exploration": [[1, "python-for-urban-climate-exploration"]], "Install Docker and pull the container": [[2, "install-docker-and-pull-the-container"]], "Check system info": [[2, "check-system-info"]], "Install docker": [[2, "install-docker"]], "Pull the clm env image": [[2, "pull-the-clm-env-image"]], "Build container (installed in clmu-app)": [[2, "build-container-installed-in-clmu-app"]], "Install CLM5.0 (installed in clmu-app)": [[2, "install-clm5-0-installed-in-clmu-app"]], "Singularity": [[2, "singularity"]], "Tips for docker commander": [[2, "tips-for-docker-commander"]], "CLM ENV Container detail": [[3, "clm-env-container-detail"]], "Run a CLM case": [[4, "run-a-clm-case"]], "Try to run a single-point case": [[4, "try-to-run-a-single-point-case"]], "Wrokflow of cesm.py": [[5, "wrokflow-of-cesm-py"]], "Single point modeling of CLMU": [[6, "Single-point-modeling-of-CLMU"]], "1 Get the shell script for running CESM/CLM": [[6, "1-Get-the-shell-script-for-running-CESM/CLM"], [7, "1-Get-the-shell-script-for-running-CESM/CLM"]], "2 Modify the data": [[6, "2-Modify-the-data"]], "3 View the results": [[6, "3-View-the-results"], [7, "3-View-the-results"]], "How dose the land surface affect the urban cliamte?": [[7, "How-dose-the-land-surface-affect-the-urban-cliamte?"]], "2 Modify the surface data": [[7, "2-Modify-the-surface-data"]], "CLMU APP": [[8, "clmu-app"]], "CLMU APP container": [[8, null]], "Examples": [[8, null]], "API Reference": [[8, null]], "Indices and tables": [[8, "indices-and-tables"]], "scr": [[9, "scr"]]}, "indexentries": {"cesm": [[0, "module-cesm"]], "cesm_run (class in cesm)": [[0, "cesm.cesm_run"]], "copy_file_if_not_exists() (in module cesm)": [[0, "cesm.copy_file_if_not_exists"]], "copy_file_if_not_exists2() (in module cesm)": [[0, "cesm.copy_file_if_not_exists2"]], "create_case() (cesm.cesm_run method)": [[0, "cesm.cesm_run.create_case"]], "modify_case_config() (cesm.cesm_run method)": [[0, "cesm.cesm_run.modify_case_config"]], "modify_surf() (cesm.cesm_run method)": [[0, "cesm.cesm_run.modify_surf"]], "module": [[0, "module-cesm"]], "nc_view() (cesm.cesm_run method)": [[0, "cesm.cesm_run.nc_view"]], "now_time() (in module cesm)": [[0, "cesm.now_time"]], "read_json_config() (cesm.cesm_run method)": [[0, "cesm.cesm_run.read_json_config"]], "reset_case() (cesm.cesm_run method)": [[0, "cesm.cesm_run.reset_case"]], "run_command() (in module cesm)": [[0, "cesm.run_command"]], "run_command_envid() (in module cesm)": [[0, "cesm.run_command_envid"]]}})