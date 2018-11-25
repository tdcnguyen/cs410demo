# First-time Setup
Pre-requisites:
1. Python 3.X
2. npm

To initialize and obtain all required package dependencies:

- Backend

Run the following commands:

```
pip install pipenv
pipenv install
```

- Frontend

```
cd www
npm install

```

# Hosting

To run a local server:

1. Start the backend Flask server.
```
pipenv run python app.py
```

2. Start the frontend Angular server in a separate window.
```
cd www
ng serve
```

3. Open a browser and the server will be running on http://localhost:4200/.


# Development

Pre-requisite:
To ensure that the same libraries are available on the server as well as your local development environment, use the Pipfile included to ensure all packages are available. Run `pipenv shell` to obtain an environment that mimicks the server.

1. Create your classifier that implements pre-processing, training and prediction. See samples/template.py for documentation, and other sample files included for examples.
2. Copy the source code into the root folder of the server (same folder as app.py).
3. Save an instance of your classifier so that it can then be easily uploaded.
In this example, we have created a classifier called *MyClassifier*. In a Python shell, run the following commands:
```
from <MyModule> import <MyClassifier>
from sklearn.externals import joblib
myInstance = <MyClassifier>()
joblib.dump(myInstance, 'my_model_file')
```
4. my_model_file is created and can be uploaded to the application for training and testing. Enjoy!