---
title: Learning with Geron - Chapter 1
date: "2020-08-27T11:25:02.169Z"
description: After reading the first chapter of 'Hands on machine learning'
---

I find myself amused by how well written and easy to understand the **'Hands on machine learning'** book is. [Aurélien Géron](https://www.linkedin.com/in/aurelien-geron/) made quite a job bringing what seemed to be reserved knowledge within everyone's reach.

At the end of every chapter there is a questionnaire that helps to beef up everything you just read, in order not only to strengthen knowledge but also to share it, I've decide to answer those questions publicly in a series that I'll call 'Learning with Geron'.

## So, what is machine learning?

Arthur Samuel defined Machine Learning as:

> The field of study that gives computers the ability to learn without being explicitly programmed. —[Arthur Samuel](https://history-computer.com/ModernComputer/thinkers/Samuel.html), 1959

There are many types of problems where ML is really useful, for example, deciding weather an email is spam or not, recommending movies in your favorite streaming platform, but in essence there are four particular real world problems where ML shines:

- Problems for which existing solutions require a granular tuning or long lists of rules _(The way Google provides results deppending on your location)_.
- Complex problems for which using a traditional approach don't offer any good solution _([Machine Learning in Genomics](https://emerj.com/ai-sector-overviews/machine-learning-in-genomics-applications/))_.
- Fluctuating environments _(Cryptocurrency is a very good example)_.
- Getting insights or useful about complex problems or large amounts of data _(Division of the clientele into groups depending on unknown similarities)_.

There are different types of Machine Learning systems, that's why they're categorized, from Supervised or Unsupervised Learning up to Instance-based or Model-based Learning.

![Machine Learning Categories](./ML.svg)

Labeled data is data that has the desired solution, for example, you want to create a model that predicts the price of houses in a particular area. To do so you need examples of houses with their respective prices and attributes.

_The most common tasks Supervised Learning has are:_

- Classification: Deciding if a person is most likely to have diabetes or not according to his eating habbits.
- Regression (Targeting numeric values): Predicting the price of a product based of previous prices and the characteristics of that product.

_The most common tasks of Unsupervised Learning are:_

- Clustering: Detecting groups of similar visitors in a webpage.
- Anomaly detection and novelty detection: Detecting fraud or unusual use of a credit card.
- Visualization and dimensionality reduction: Identify unsuspected patterns in data or simplify a lot of information without losing quality.
- Association rule learning: Helps in discovering realations between attributes.

---

Say we have a robot, what type of algorithm would help in order to allow it to walk in various terrains? - **Reinforcement Learning**, this type of learning let machines to create the best strategies to maximize the rewards of their behavior.

For this particular blog I have no track of visitors, people come and go as they please. But I could use **clustering algorithm** to try to detect groups of similar visitors and segment the newsletter depending on the posts that they have read.

**Online Learning** means that you train your system incrementally, by feeding instances sequentially, in small groups that are called _mini-batches_. This type of learning is widely used when the amount of data is huge, so huge that doesn't fit in one machine's memory so is splitted into multiple instances or machines and the algorithm loads part of the data, learns, and move on repeating the process.

Just like humans, algorithms have a way to learn. Some of them learn by similarities and some of them try to learn the critical information of the dataset and make predictions based on that. These are **Instance-Based** and **Model-Based** algorithms respectively.

Algorithms have both **model parameters** that can be inferred from the data and external parameters or **hyperparameters**. Let's say we've trained a model and the performance of the model is very good. One way to avoid overfitting is to choose a **regularization hyperparameter** that prevents it.

---

## Some challenges of ML

Last but not least, when it comes to ML there are five challenges that are critical to handle in order to get the best out of every model:

- [Insufficient Quantity of Training Data](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35179.pdf)

- [Nonrepresentative Training Data](https://www.math.upenn.edu/~deturck/m170/wk4/lecture/case1.html)

- [Poor-Quality Data](https://www.talend.com/resources/machine-learning-data-quality/)

- [Overfitting the Training Data](https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/)

- [Underfitting the Training Data](https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/)

Those two require a more in depth explanation that will come in the next post along with some new concepts as **Testing, Validating, Hyperparameter Tuning, Model Selection and Data Mismatch**.

Sumary:

Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed.

- There are different types of ML systems: supervised or semisupervised, unsupervised, batch or online among others
- In a ML project you gather data in a training set, and you feed the training set to a learning algorithm. If the algorithm is model-based it learns the critical information of the dataset and make predictions based on that. If the algorithm is instance-based, it just learns by heart and predicts by similiraties.

### Again, all credits to Aurélien Gerón and to you guys that take the time to read.
