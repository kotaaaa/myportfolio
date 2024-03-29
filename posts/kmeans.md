---
title: Kmeans method scrach implementation
date: "2019-04-25"
techStack: ["Python", "Algorizm"]
category: Python
background: "#4169e1"
image: img/python/python-symbol.png
---

# Overview

This is a python implementation of kmeans.
The program classifies 30 randomly generated points into 3 classes.
The classification task is implemented using the kmeans algorithm.
Any advice on coding would be greatly appreciated.

## Environment

## Local environment

- MACOS-High Sierra
- Python 2.7.13

## Python modules used

- matplotlib (2.1.2)
- numpy (1.14.0)
- multipledispatch (0.4.9)

## Code actually used

```py
# -*- coding: utf-8 -*-
import math
from time import sleep
from matplotlib import pyplot as plt
from mpl_toolkits.mplot3d.axes3d import Axes3D
import matplotlib.animation as animation
from numpy.random import *

ims = []

NUM = 5
dot_num = 30

initial = randint(-5,10,size=(3,3))
init_list = initial.tolist()

centroid=init_list
clasta = [0 for i in range(dot_num)]
value = [0 for i in range(dot_num)]
k = [0 for i in range(NUM)]


t1 = randint(-5,10,size=(dot_num))
t2 = randint(-5,10,size=(dot_num))
t3 = randint(-5,10,size=(dot_num))


def kyori(x1, x2, x3, y1, y2, y3):

    length = math.sqrt((x1-y1)*(x1-y1) + (x2-y2)*(x2-y2) + (x3-y3)*(x3-y3))
    return length


def center(a, b, r):

    count = 0
    c = 0
    cen = 0

    for i in range(dot_num):

        if (b[i] == r):
            c+=a[i]
            count+=1

    if(count != 0):
        cen = c/count

    return  cen


def idle(i, centroid, ims):

    for i in range(dot_num):
        k[0] = kyori(t1[i], t2[i], t3[i], centroid[0][0], centroid[0][1], centroid[0][2])
        k[1] = kyori(t1[i], t2[i], t3[i], centroid[1][0], centroid[1][1], centroid[1][2])
        k[2] = kyori(t1[i], t2[i], t3[i], centroid[2][0], centroid[2][1], centroid[2][2])

        mindot = k[0]
        minnum = 0

        for j in range(3):
            if(mindot > k[j]):
                mindot = k[j]
                minnum = j

        print mindot, minnum


        if (minnum==0):
            clasta[i]=0
            value[i] = "red"
        elif (minnum==1):
            clasta[i]=1
            value[i] = "blue"
        elif (minnum==2):
            clasta[i]=2
            value[i] = "green"


        centroid[0][0] = center(t1, clasta, 0)
        centroid[0][1] = center(t2, clasta, 0)
        centroid[0][2] = center(t3, clasta, 0)
        centroid[1][0] = center(t1, clasta, 1)
        centroid[1][1] = center(t2, clasta, 1)
        centroid[1][2] = center(t3, clasta, 1)
        centroid[2][0] = center(t1, clasta, 2)
        centroid[2][1] = center(t2, clasta, 2)
        centroid[2][2] = center(t3, clasta, 2)

    p = ax.scatter(t1, t2, t3, s=50, marker = "*",c=value)
    ims.append([p])

    print clasta;


fig = plt.figure()
ax = Axes3D(fig)
ani = animation.FuncAnimation(fig, idle, fargs = (centroid, ims), frames = 10, interval = 500)


plt.title("Kmeans Result(3 claster)")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

plt.show()
```
