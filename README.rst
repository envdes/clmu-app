CLMU-App: Enabling Operating System Independent Urban Climate Simulations
==========================================================================
|DOI| |GitHub| |Docs| |License|

.. |DOI| image:: https://zenodo.org/badge/750479733.svg
  :target: https://zenodo.org/doi/10.5281/zenodo.10710695

.. |GitHub| image:: https://img.shields.io/badge/GitHub-clmu--app-brightgreen.svg
   :target: https://github.com/envdes/clmu-app

.. |Docs| image:: https://readthedocs.org/projects/clmu-app/badge/?version=latest
   :target: https://clmu-app.readthedocs.io/en/latest/?badge=latest

.. |license| image:: https://img.shields.io/badge/License-MIT-blue.svg
   :target: https://github.com/envdes/clmu-app/blob/main/LICENSE

CLMU-App is a containerized application for urban climate simulations. It is designed to provide a platform for running Community Land Model-Urban (CLMU) simulations.
CLMU is the Community Land Model-Urban, hosted by the National Center for Atmospheric Research (NCAR). CLMU acts as an urban model with a single-layer canopy scheme under the Earth system model hierarchy. Running a CLMU simulation, at least, needs to run a Community Land Model (CLM) case. Running a global CESM/CTSM case requires a lot of computing resources that HARDLY be done on a local computer. Therefore, the CLMU-App only serves a single point of simulation, and it is not recommended to use container for global simulation. The clm5.0 has beed installed in `/p/project` in CLMU-App. For the detail of CLMU-App, please refer to `CLMU-App document <https://envdes.github.io/clmu-app/>`_.

Author: `Junjie Yu <https://junjieyu-uom.github.io>`_, `Keith Oleson <https://staff.ucar.edu/users/oleson>`_, `Yuan Sun <https://github.com/YuanSun-UoM>`_, `David Topping <https://research.manchester.ac.uk/en/persons/david.topping>`_, `Zhonghua Zheng <https://zhonghuazheng.com>`_ (zhonghua.zheng@manchester.ac.uk)

How to ask for help
-------------------
The `GitHub issue tracker <https://github.com/envdes/clmu-app/issues>`_ is the primary place for bug reports. 
