---
title: This power that flows in my veins
date: "2020-08-24T16:53:32.169Z"
description: Streamlit, remarkable power for data scientists
---

### So, I found this [new framework](https://www.streamlit.io/) and decided to play around a little

A few days ago I discovered streamlit, which is basically an open-source framework that makes life way easier for data scientists. It helps to create web apps in no time! And the best of it is that is all in Python.

Now this isn't by anyhow paid advertisement, is just me sharing what I find to be a very powerful tool when it comes to data science and machine learning.

Without further ado here's an example of a simple SVR Model built with Streamlit along with the [source code](https://github.com/samgj18/house-pricing) (roughly 200 lines):

<video id="background-video" loop autoPlay style='width: 100%'>
<source src="./streamlit.mp4" type="video/mp4"/>
Your browser does not support the video tag.
</video>

## <br/>

## <br/>

```py
# Import Modules
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVR
import pandas as pd
from sklearn import datasets
from sklearn.model_selection import train_test_split
import seaborn as sns
import time
from sklearn.metrics import mean_absolute_error
from sklearn.preprocessing import StandardScaler
import streamlit as st

# Loading data and getting the characteristics of the dataset

boston = datasets.load_boston()
dfboston = pd.DataFrame(boston.data, columns=boston.feature_names)
target = pd.Series(boston.target)

st.write(""" # Boston house pricing - SVR with Scikit Learn

## Data visualization

""")
st.write(dfboston)

corrmat = dfboston.corr()
plt.subplots(figsize=(15, 12))
sns.heatmap(corrmat, vmax=0.9, annot=True)

st.write(""" ### Data correlation

Let's check for the variables correlation
""")

st.pyplot()

st.write("""
We can have a closer look with a seaborn pairplot
""")

sns.pairplot(dfboston, height=1.5)
st.pyplot()

# Select only the 5th column of our dataset for our X matrix

X = boston.data[:, 5]
X = X.reshape(-1, 1)

# Select the target for our y matrix

y = boston.target

# Let's divide our data between test(20%) and training

X_train, X_test, y_train, y_test = train_test_split(
dfboston, target, test_size=0.2)

# Obtaining predictors

predictors = list(dfboston.columns)

# Define SVR algorithm to use

svr = SVR() # Optional arguments kernel='linear', C=1.0, epsilon=0.2
svr_rbf = SVR(kernel='rbf', gamma=0.1)
svr_linear = SVR(kernel='linear')

# Function to launch different models and obtain their evaluations

def launch_model(name, model, X_train, y_train, X_test, y_test):
'''
Launch every model and returns a list with tuple with title,
expected values, actual values
'''
start = time.time()
model.fit(X_train[predictors], y_train)
y_pred = model.predict(X_test[predictors])
ypred_train = model.predict(X_train[predictors])
st.write('MSE train', mean_absolute_error(y_train, ypred_train))
st.write('MSE test', mean_absolute_error(y_test, y_pred))
r_2 = model.score(X_test[predictors], y_test)
st.write('R^2 test', r_2)
st.write('Execution time: {0:.2f} seconds.'.format(time.time() - start))
return name + '($R^2={:.3f}$)'.format(r_2), np.array(y_test), y_pred

# Function to plot results

def plot(results):
'''
Create a plot comparing multiple learners.
`results` is a list of tuples containing:
(title, expected values, actual values)

    All the elements in results will be plotted.
    '''

    # Using subplots to display the results on the same X axis
    fig, plts = plt.subplots(nrows=len(results), figsize=(8, 8))
    fig.canvas.set_window_title('Predicting Boston')

    # Show each element in the plots returned from plt.subplots()
    for subplot, (title, y, y_pred) in zip(plts, results):
        # Configure each subplot to have no tick marks
        # (these are meaningless for the sample dataset)
        subplot.set_xticklabels(())
        subplot.set_yticklabels(())

        # Label the vertical axis
        subplot.set_ylabel('House Price')

        # Set the title for the subplot
        subplot.set_title(title)

        # Plot the actual data and the prediction
        subplot.plot(y, 'b', label='actual')
        subplot.plot(y_pred, 'r', label='predicted')

        # Shade the area between the predicted and the actual values
        subplot.fill_between(
            # Generate X values [0, 1, 2, ..., len(y)-2, len(y)-1]
            np.arange(0, len(y), 1),
            y,
            y_pred,
            color='r',
            alpha=0.2
        )

        # Mark the extent of the training data
        subplot.axvline(len(y) // 2, linestyle='--', color='0', alpha=0.2)

        # Include a legend in each subplot
        subplot.legend()

    # Let matplotlib handle the subplot layout
    fig.tight_layout()

    # ==================================
    # Display the plot in interactive UI
    st.pyplot()

    # To save the plot to an image file, use savefig()
    plt.savefig('plot.png')

    # Open the image file with the default image viewer
    plt.close()

# Checking the results

results = []
st.write('-----------')
st.write('SVR - RBF')
st.write('-----------')
results.append(launch_model('SVR - RBF', svr_rbf,
X_train, y_train, X_test, y_test))
st.write('-----------')
st.write('SVR - linear')
st.write('-----------')
results.append(launch_model('SVR - linear', svr_linear,
X_train, y_train, X_test, y_test))
st.write('-----------')
st.write('SVR RBF - No Gamma')
st.write('-----------')
results.append(launch_model('SVR RBF - No Gamma',
svr, X_train, y_train, X_test, y_test))

plot(results)

# Many machine learning algorithms perform better or converge

# faster when features are on a relatively similar scale and/or close to

# normally distributed. Examples of such algorithm families include:

# linear and logistic regression

# nearest neighbors

# neural networks

# support vector machines with radial bias kernel functions

# principal components analysis

# linear discriminant analysis

# This is the reason why in order to get a better model we're going to use the

# StandardScaler

scaler = StandardScaler()
scaler = scaler.fit(X_train[predictors])
X_train[predictors] = scaler.transform(X_train[predictors])
X_test[predictors] = scaler.transform(X_test[predictors])

# Checking the new results

results = []
st.write('-----------')
st.write('SVR - RBF')
st.write('-----------')
results.append(launch_model('SVR - RBF', svr_rbf,
X_train, y_train, X_test, y_test))
st.write('-----------')
st.write('SVR - linear')
st.write('-----------')
results.append(launch_model('SVR - linear', svr_linear,
X_train, y_train, X_test, y_test))
st.write('-----------')
st.write('SVR RBF - No Gamma')
st.write('-----------')
results.append(launch_model('SVR RBF - No Gamma',
svr, X_train, y_train, X_test, y_test))

# Plotting new results

plot(results)

# Let's check for the scores

st.write("SVR model with no additional params score: {}".format(
svr.score(X_train, y_train)))
st.write("SVR model with rbf kernel score: {}".format(
svr_rbf.score(X_train, y_train)))
st.write("SVR model with linear kernel score: {}".format(
svr_linear.score(X_train, y_train)))

```

**You can find the live project [here](https://housing-prices-boston-app.herokuapp.com/).**

I know these are not the best of results, however the idea is to show how easy and fast can be to build and app with Streamlit. Next post will be about how to create a Streamlit project from scratch and deploy to Heroku or an EC2 aws instance. See you around!
