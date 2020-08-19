---
title: Everything is an object
date: "2020-05-26T13:32:32.169Z"
description: When I first read “in Python everything, absolutely everything, is an object” my mind exploded
---

![Who are we? Is it you or is it me?](./objects.png)

When I first read _“in Python everything, absolutely everything, is an object”_ my mind exploded. It took me a moment to understand because, like everything, no right answers come without the right questions.

So let’s build this statement through a series of different questions and maybe we can understand a little bit better, together:

### First of all, what on earth is an object in Python?

In simple terms, for Python, an object is anything that can be assigned to a variable, that is, every variable holds an object instance.
So you might say: but as far as I know everything in Python can be assigned into a variable. And that is the very truth . A class? No problem, list? Assignable, module? Am I a joke to you?.
Now that we know what is an object let’s break down the types of objects that we can find in Python.

### So.. what type of objects do we find in Python?

What every newcomer to Python should quickly learn is: _all objects in Python can be either **mutable** or **immutable**._

Let’s think carefully. We already know that everything in Python is an object. Every time an object is instantiated, a unique object id is assigned and also, during runtime, a type is assigned (once setted can never change).

But… If it cannot change how come there are mutable and immutable objects, what does even mean? Very simple: even though neither id nor type can change, the state can be changed (if mutable).

> In a nutshell, a mutable object can be changed after it’s creation, and an immutable object simply can’t.

### How do we know what objects are mutable and which are immutable?

```
Immutable Objects:
- int, float, long, complex
- str
- tuple
- frozen set

Mutable Objects:
- byte array
- list
- set
- dict
```

Let’s take a look at the table above, this table comes very handy when we learn how to use the built-in functions `type()` and `id()`.

```py
>>> a = ['one', 'two', 'three']
>>> type(a)
<class 'list'>

>>> a = (1, 2, 3)
>>> type(a)
<class 'tuple'>

>>> a = 'Hola'
>>> b = 'Hola'
>>> id(a)
4467227592
>>> id(b)
4467227592
```

As we can see we can either do `type(var)` and compare with the table to know the type of the object or we can see the `id(var)` of two variables with similar objects and if we get the same address this means that the object is immutable.

The main difference between the concepts of identity **(id)** and value **(the object itself)**, is described in Python Language Reference [Data](https://docs.python.org/3/reference/datamodel.html#objects-values-and-types) model chapter:

> Every object has an identity, a type and a value. An object’s identity never changes once it has been created; you may think of it as the object’s address in memory. The ‘is’ operator compares the identity of two objects; the id() function returns an integer representing its identity.

### Some exceptions: Immutable but potentially changing

But after all, is there a way to _“change”_ immutable objects?

There is actually a way, let me show you how. Let’s create a variable that points to an int object:

Let's have closer look to the example above.

```py
>>> a = 1
>>> b = b
>>> id(a)
4467227592
>>> id(b)
4467227592
```

As we can see **a** and **b** point to the same object therefore we can say is immutable. Now let’s do an operation with it:

```py
>>> a = 1
>>> id(a)
4467227592
>>> id(1)
4467227592

>>> a = a + 1
>>> a
2

>>> id(a)
4467227981
>>> id(1)
4467227592
```

The object in which `a` that was tagged has changed, but object **1** has suffer no modification. What we did was creating a copy and redefining it. Therefore we can say that immutable objects are very expensive to _“change”_ because in order to do so, a copy must be created.

More in depth and for the sake of all strict Pythoners not all immutable objects are actually immutable.

As Luciano Ramhalo explains in his [post](http://radar.oreilly.com/2014/10/python-tuples-immutable-but-potentially-changing.html):

> Python tuples have a surprising trait: they are immutable, but their values may change.

Once we create a tuple all the objects are automatically bind to tuple object, those bindings are, in fact, unchangeable but the objects they are bound to might not . Let’s look an example in order to understand better:

```py
>>> a = (1, [1, 2, 3])
>>> id(a)
4467227544
>>> a[1][1] = 6
>>> a
(1, [1, 2, 6])

>>> id(a)
4467227544
```

The above example shows a tuple that contains elements of different types, the first one is an integer (immutable) and the second one is a list (which is mutable). The tuple as the integer aren’t mutable. But the list object has methods that allow it to change. It is, indeed, a delicate matter, that can be resume as: an immutable object can’t change, but it’s objects might.

### Conclusion:

In Python everything, absolutely everything, is an object.
An object is anything that can be assigned to a variable, that is, every variable holds an object instance.
All objects in Python can be either **mutable** or **immutable**.
Immutable objects are very expensive to “change” because in order to do so, a copy must be created.
Python tuples have a surprising trait: they are immutable, but their values may change.
