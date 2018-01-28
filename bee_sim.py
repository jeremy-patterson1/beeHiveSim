# -*- coding: utf-8 -*-
"""
Created on Sat Jan 27 15:58:17 2018

@author: Desktop
"""

import numpy as np


def beeSim(inputData):

    N = 200
    x = np.linspace(0, 4*np.pi, N)
    y = int(inputData["peak_egg_rate"])*10*np.sin(x) + 30000
    
    output = dict(x=x, y=y)

    return output