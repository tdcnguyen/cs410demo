# CS 410 Text Information Systems, 2018 Fall

## A Customizable Web Interface for Text Mining Demonstrations

Wei Lim (wkl2@illinois.edu),
Thai Duy Cuong Nguyen (thaidn2@illinois.edu),
Purba Pattanaik (bp7@illinois.edu)

# Abstract

We designed, developed and implemented a prototype web interface and application called *Spotlight* that allows researchers to present text mining and analysis algorithms quickly and easily. Our application provides a generic, customizable and extensible framework for presenting these algorithms. The minimum viable product (MVP) that we created is tailored to classification tasks but could be adapted to other tasks in the future.

# Introduction

In research, we often make new discoveries that could be demonstrated to the community but we frequently lack the capability to do so quickly and easily. Moreover, the time spent by researchers to construct demos and perform other auxiliary tasks should be ideally minimized. Thus, a rich and user-friendly web application that can provide a dynamic interface for showcasing algorithms and analysis is highly desirable.

A useful application for demos would allow the user to upload specific input data which would then be processed in real-time to produce relevant output. For example, a user should be able to input text in the form of a tweet, sentence, or phrase, and observe different outputs depending on the text mining and analysis task demonstrated. These outputs include the following:

1. For classification tasks, a label, or probability distribution across labels.
2. For sequence labeling tasks, a set of labels for a given input.
3. For translation tasks, the translated input.
4. For regression tasks, one or more real-valued outputs.

In response to this need, we created a customizable web interface called *Spotlight* for text mining tasks that allows researchers to easily demonstrate their algorithms. Researchers and text mining enthusiasts can upload data sets, train or upload models, test these models, and view or download both specific results and aggregated statistics using our web application. Our prototype is tailored to classification tasks but could be expanded to other text mining and analysis tasks.

# Implementation
We could not find any standard tools, either packaged as part of a data mining library, or a standalone application, that perform direct integration of text mining algorithms into a demonstrable application with visualization. There are sample libraries in certain machine learning packages that provide sample code for producing a small subset of demonstrable applications.

Since the project was built to support existing implementations of data mining tasks, we targeted the most common libraries used for building text mining algorithms. We leveraged the pandas Python package to build data frames, and used the scikit-learn Python machine learning library as a test bench to support various text mining and analysis tasks.

We implemented the web application front-end using Angular, a TypeScript-based open-source platform. For the application back-end, we used Flask, a web framework written in Python.

# Usage

## Initial Setup

### Software Requirements

1. Python 3.X (https://www.python.org/)
2. pip
3. npm (https://www.npmjs.com/)

### Back-end Setup

The application back-end requires the `pipenv` tool.
Run the following commands:

```
pip install pipenv
pipenv install
```

### Front-end Setup

The application front-end requires the installation of Node.js package dependencies.
Run the following commands:

```
cd www
npm install
```

## Startup

### Back-end Startup

Start the back-end Flask server.

1. Open a command-line interface.
2. Change directories to the application root.
3. Run the following command: `pipenv run python app.py`

### Front-end Startup

Start the front-end Angular server.

1. Open a command-line interface.
2. Change directories to the application *www* folder.
3. Run the following command: `ng serve`

## Access

Once the back-end and front-end servers are running, the web application can be accessed on the host machine using port 4200. For example, the web application can be accessed on a localhost using the following URL http://localhost:4200/.


# Customization

*Spotlight* can be customized to include user-provided classifier code written in Python.

## Environment

To ensure that the same libraries are available on the server as well as your local development environment, use the *Pipfile* included in the repository to ensure that all packages are available. Run `pipenv shell` to obtain an environment that mimicks the server.

## Creating and Installing a New Classifier

1. Write your classifier to implement the `IClassifier` interface for `predict`, `train` and `pre_process`. See *IClassifier.py* for documentation, and other sample files included in the *classifiers* folder.
2. Copy your classifier into the *classifiers* folder.
3. Add a *classifier.yapsy-plugin* file to describe your classifier.

When you start *Spotlight*, the classifier will automatically be loaded for testing and training. If you would like to train your model outside your application, but test the model within the application, you may create a pickle (.pkl) file containing the model and upload it directly.
