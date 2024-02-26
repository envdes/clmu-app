# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import os
import sys
sys.path.insert(0, os.path.abspath('../src'))#指向src目录


project = 'clmu-app'
copyright = '2024, Junjie Yu, Zhonghua Zheng, Yuan Sun, Keith Oleson'
author = 'Junjie Yu, Zhonghua Zheng, Yuan Sun, Keith Oleson'
release = 'v0.0.0'

## -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
'recommonmark',
'sphinx_markdown_tables',
'sphinx.ext.githubpages',
'nbsphinx',
'IPython.sphinxext.ipython_console_highlighting',
'sphinx.ext.autodoc', 
'numpydoc', 
'sphinx.ext.autosummary',
'sphinx.ext.mathjax',
'sphinx.ext.autodoc',
'sphinx.ext.napoleon'
]

#pip install --upgrade jinja2==3.0.3
#pip install --upgrade nbconvert
#pip install --upgrade mistune


# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
# html_theme = 'alabaster'
html_theme = 'sphinx_rtd_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

