.. ctsmpy documentation master file, created by
   sphinx-quickstart on Tue Jan 23 16:49:22 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

CLMU APP
==================================

|doi| |docs| |GitHub| |license|

.. |doi| image:: https://zenodo.org/badge/DOI/10.5281/zenodo.6474004.svg
   :target: https://doi.org/10.5281/zenodo.6474004

.. |docs| image:: https://readthedocs.org/projects/urbanclimateexplorer/badge/?version=latest
   :target: https://urbanclimateexplorer.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation Status

.. |GitHub| image:: https://img.shields.io/badge/GitHub-CLMU--APP-brightgreen.svg
   :target: https://github.com/JunjieYU-UoM/CLMU-APP

.. |license| image:: https://img.shields.io/badge/License-GUN_GPL_V3.0-blue.svg
   :target: https://github.com/JunjieYU-UoM/CLMU-APP/blob/main/LICENSE

Using Python to drive CLMU simulations via container.

Author: `Junjie Yu <https://junjieyu-uom.github.io>`_, `Dr. Zhonghua Zheng <https://zhonghuazheng.com>`_, `Yuan Sun <https://github.com/YuanSun-UoM>`_, `Dr. Keith Oleson <https://staff.ucar.edu/users/oleson>`_

.. toctree::
   :maxdepth: 2
   :caption: CLMU APP container

   container/1_intro_container.md
   container/2_install_docker.md
   container/run_container.md
   container/4_run_CLM_case.md
   container/3_CLMU_env_details.md
   container/5_python_API.md

.. toctree::
   :maxdepth: 2
   :caption: Examples

   examples/Single_point_modeling.ipynb
   examples/modify_urban.ipynb

.. toctree::
   :maxdepth: 1
   :caption: Exploration

   examples/explore_up.md

.. toctree::
   :maxdepth: 2
   :caption: API Reference

   cesm.rst

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
