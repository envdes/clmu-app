.. ctsmpy documentation master file, created by
   sphinx-quickstart on Tue Jan 23 16:49:22 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

CLMU APP
==================================

|docs| |GitHub| |license|

.. |docs| image:: https://readthedocs.org/projects/urbanclimateexplorer/badge/?version=latest
   :target: https://urbanclimateexplorer.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation Status

.. |GitHub| image:: https://img.shields.io/badge/GitHub-clmu--app-brightgreen.svg
   :target: https://github.com/envdes/clmu-app

.. |license| image:: https://img.shields.io/badge/License-MIT-blue.svg
   :target: https://github.com/envdes/clmu-app/blob/main/LICENSE

Using Python to drive CLMU simulations via container.

Author: `Junjie Yu <https://junjieyu-uom.github.io>`_, `Dr. Zhonghua Zheng <https://zhonghuazheng.com>`_, `Yuan Sun <https://github.com/YuanSun-UoM>`_, `Dr. Keith Oleson <https://staff.ucar.edu/users/oleson>`_

.. toctree::
   :maxdepth: 2
   :caption: CLMU APP container

   container/intro.rst
   container/install_docker.rst
   container/run_container.md
   container/4_run_CLM_case.rst
   container/clmu_env.rst
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
