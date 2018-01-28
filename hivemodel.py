# -*- coding: utf-8 -*-
"""

Modify the different dropdown boxes to test different hive scenarios

1) cd to the folder where this is stored

2) Use the "bokeh serve" command to run the model by executing:
     bokeh serve hivemodel.py
   at your command prompt. 
   
3) Then navigate to the URL
     http://localhost:5006/hivemodel
   in your browser.

Reference:
# tooltips: https://bokeh.pydata.org/en/latest/docs/user_guide/tools.html#basic-tooltips
# server guide: http://bokeh.pydata.org/en/latest/docs/user_guide/server.html#userguide-server

sliders.py
https://github.com/bokeh/bokeh/blob/master/examples/app/sliders.py

TODO:
    Make plot span whole window



"""

import numpy as np

from bokeh.io import curdoc
from bokeh.layouts import row, widgetbox, gridplot
from bokeh.models import ColumnDataSource
from bokeh.models.widgets import Select
from bokeh.plotting import figure

from datetime import date

# my files:

from bee_sim import beeSim

# Set up data
#    N = 200
#    x = np.linspace(0, 4*np.pi, N)
#    y = 30000*np.sin(x) + 30000
    
    
# Set up widgets
peakEggRate = Select(title="Peak egg rate:", value="1500", 
                     options=["1000", "1250", "1500", "1750", "2000"])

startDate = Select(title="Start Conditions:", value="Feb 15", 
                   options=["Feb 15", "Mar 1", "Mar 15", "Apr 1", "Apr 15", "May 1", 
                            "May 15", "Jun 1", "Jun 15"])
    
startBees = Select(title="", value="1kg (6600 bees)", 
                   options=["1kg (6600 bees)", 
                            "3lb (9000 bees)", "2 Frames (6000 bees)", "3 Frames (9000 bees)", 
                            "4 Frames (12000 bees)", "5 Frames (15000 bees)", "6 Frames (18000 bees)",
                            "7 Frames (21000 bees)", "8 Frames (24000 bees)", "9 Frames (27000 bees)"])
    
startCond = Select(title="Start Conditions:", value="Packaged", 
                   options=["Packaged", "Wintered", "Nuc with Queen", "Nuc with Cell", 
                            "Nuc make Queen"])
    
evictDrones = Select(title="Evict Drones:", value="Sept 15", 
                     options=["Aug 1", "Aug 15", "Sept 1", "Sept 15", "Oct 1"])

Manipulations = Select(title="", value="No Manipulations", 
                   options=["No Manipulations", "Kill Queen", "Swarm", "Requeen (Caged)", 
                            "Requeen (Cell)", "Cutdown (2 Frames)","Harvest 1 Brood", 
                            "Harvest 2 Brood","Harvest Brood 4x7","Harvest Brood 8x7"])

slowDown = Select(title="Slowdown:", value="Sept 1", 
                     options=["July 1", "July 15", "Aug 1", "Aug 15", "Sept 1", 
                              "Sept 15"])

broodlessDate = Select(title="Broodless Date:", value="Nov 1", 
                     options=["Oct 1", "Oct 15", "Nov 1", "Nov 15"])

treat_1 = Select(title="Treatment:", value="None", 
                     options=["None", "Formic Flash", "OAV", "OAV 2x7", "OAV 3x7",
                              "OAV 4x5"])

treat_1_date = Select(title="", value="July 1", 
                     options=["Apr 1", "Apr 15", "May 1", "May 15", "Jun 1", "Jun 15",
                              "July 1", "July 15", "Aug 1", "Aug 15", "Sept 1", "Sept 15",
                              "Oct 1", "Oct 15", "Nov 1"])

treat_2 = Select(title="Treatment:", value="None", 
                     options=["None", "Formic Flash", "OAV", "OAV 2x7", "OAV 3x7",
                              "OAV 4x5"])

treat_2_date = Select(title="", value="July 1", 
                     options=["Apr 1", "Apr 15", "May 1", "May 15", "Jun 1", "Jun 15",
                              "July 1", "July 15", "Aug 1", "Aug 15", "Sept 1", "Sept 15",
                              "Oct 1", "Oct 15", "Nov 1"])

startMites = Select(title="Start Mites:", value="0", 
                     options=["0", "1", "5", "10", "50", "100", "500", "1000"])

# Set up callbacks
#def update_title(attrname, old, new):
#    plot.title.text = text.value

#text.on_change('value', update_title)

# get some initial data
#N = 200
#x = np.linspace(0, 4*np.pi, N)
#y = 30000*np.sin(x) + 30000
#
#source = ColumnDataSource(data=dict(x=x, y=y))


# get the initial data:
peak_egg_rate = peakEggRate.value
start_date = startDate.value
start_bees = startBees.value
start_cond = startCond.value
evict_drones = evictDrones.value
manipulations = Manipulations.value
slowdown = slowDown.value
broodless_date = broodlessDate.value
treat1 = treat_1.value
treat1date = treat_1_date.value
treat2 = treat_2.value
treat2date = treat_2_date.value
start_mites = startMites.value

inputData = dict(peak_egg_rate=peak_egg_rate,start_date=start_date,start_bees=start_bees,
                 start_cond=start_cond,evict_drones=evict_drones,manipulations=manipulations,
                 slowdown=slowdown,broodless_date=broodless_date,treat1=treat1,
                 treat1date=treat1date,treat2=treat2,treat2date=treat2date,start_mites=start_mites)

source = ColumnDataSource(data=beeSim(inputData))

# Set up plot
plot = figure(plot_height=400, plot_width=800, title="Colony Progression Thru the Season",
              tools="crosshair,pan,reset,save,wheel_zoom",
              x_range=[0, 4*np.pi], y_range=[0, 90000])

plot.line('x', 'y', source=source, line_width=3, line_alpha=0.6)


def update_data(attrname, old, new):
    print('In update_data')
    # get the data:
    peak_egg_rate = peakEggRate.value
    start_date = startDate.value
    start_bees = startBees.value
    start_cond = startCond.value
    evict_drones = evictDrones.value
    manipulations = Manipulations.value
    slowdown = slowDown.value
    broodless_date = broodlessDate.value
    treat1 = treat_1.value
    treat1date = treat_1_date.value
    treat2 = treat_2.value
    treat2date = treat_2_date.value
    start_mites = startMites.value
    
    inputData = dict(peak_egg_rate=peak_egg_rate,start_date=start_date,start_bees=start_bees,
                     start_cond=start_cond,evict_drones=evict_drones,manipulations=manipulations,
                     slowdown=slowdown,broodless_date=broodless_date,treat1=treat1,
                     treat1date=treat1date,treat2=treat2,treat2date=treat2date,start_mites=start_mites)

    # run the simulation again
    source.data = beeSim(inputData) #dict(x=x, y=y) 

for w in [peakEggRate, startDate, startBees, startCond, evictDrones,Manipulations,
              slowDown,broodlessDate,treat_1,treat_1_date,treat_2,treat_2_date,startMites]:
    w.on_change('value', update_data)

# Set up layouts and add to document
inputs = widgetbox(peakEggRate, startDate, startBees, startCond, evictDrones,Manipulations,
              slowDown,broodlessDate,treat_1,treat_1_date,treat_2,treat_2_date,startMites)

curdoc().add_root(row(inputs, plot, width=1200))
curdoc().title = "HiveModel"
    





