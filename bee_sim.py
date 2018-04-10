# -*- coding: utf-8 -*-
"""
Created on Sat Jan 27 15:58:17 2018

@author: Jeremy

ToDo:
  Add Varroa Mites

"""

import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import math
from matplotlib.dates import MonthLocator, DateFormatter

def beeSim(inputData):

    output = dict()

    # get input data
    peakEggRate = int(inputData["peak_egg_rate"])
    start_date = inputData["start_date"]
    end_date = inputData["end_date"]
    start_bees = inputData["start_bees"]
    startCond = inputData["start_cond"]
    evict_drones = inputData["evict_drones"]
    manipulations = inputData["manipulations"]
    slowdown = inputData["slowdown"]
    broodless_date = inputData["broodless_date"]
    treat1 = inputData["treat1"]
    treat1date = inputData["treat1date"]
    treat2 = inputData["treat2"]
    treat2date = inputData["treat2date"]
    start_mites = inputData["start_mites"]

    # Number of days to run simulation:
    currentTime = datetime.now()
    startDateString = start_date + ' ' + str(currentTime.year)
    startDate = datetime.strptime(startDateString, '%b %d %Y')
    endDateString = end_date + ' ' + str(currentTime.year)
    endDate = datetime.strptime(endDateString, '%b %d %Y')
    numDays = (endDate - startDate).days

    slowdownString = slowdown + ' ' + str(currentTime.year)
    slowdownDate = datetime.strptime(slowdownString, '%b %d %Y')
    broodlessDateString = broodless_date + ' ' + str(currentTime.year)
    broodlessDate = datetime.strptime(broodlessDateString, '%b %d %Y')
    lastEggDate = broodlessDate - timedelta(days=20)

    # initial bees:
    strings = start_bees.split()
    for index, value in enumerate(strings):
        strings[index] = strings[index].replace("(", "")
        if strings[index].isdigit() and int(strings[index]) > 10:
            startBees = int(strings[index])
            break


    N = 200
    output['x'] = np.linspace(0, 4 * np.pi, N)
    output['y'] = peakEggRate * 10 * np.sin(output['x']) + 30000

    # how long workers live?
    springAge = 6 * 10  # days
    springStartString = "Feb 20 " + str(currentTime.year)
    springStartDate = datetime.strptime(springStartString, '%b %d %Y')
    summerAge = 6 * 7  # days
    summerStartString = "Apr 21 " + str(currentTime.year)
    summerStartDate = datetime.strptime(summerStartString, '%b %d %Y')
    fallAge = 6 * 12  # days
    fallStartString = "Sep 22 " + str(currentTime.year)
    fallStartDate = datetime.strptime(fallStartString, '%b %d %Y')
    winterAge = 6 * 30  # days
    winterStartString = "Dec 21 " + str(currentTime.year)
    winterStartDate = datetime.strptime(winterStartString, '%b %d %Y')
    sickAge = 30  # days

    # How old and which bees?
    if startCond == "Packaged":
        # how fast do bees build comb:
        combBuildSpeed = 10  # bees/cells/day

        numDrones = int(math.ceil(startBees*0.01))
        numWinterBees = 0
        numSickWorkers = int(math.ceil(startBees*0.01))
        numSickDrones = int(math.ceil(numDrones*0.01))

    numWorkers = startBees - numDrones - numSickDrones - numSickWorkers
    # build arrays with bee ages in them
    workerArray = np.random.randint(2, high=springAge, size=numWorkers)
    droneArray = np.random.randint(2, high=springAge, size=numDrones)
    sickWorkerArray = np.random.randint(2, high=sickAge, size=numSickWorkers)
    sickDroneArray = np.random.randint(2, high=sickAge, size=numSickDrones)

    # Probability of Death for each kind of bee (healthy/sick)
    # since the prob. dist. of death is normally distributed around max age, just assume all the bees die at max age

    numEggsLayed = np.zeros(numDays)
    output['numWorkers'] = np.zeros(numDays)
    output['numBrood'] = np.zeros(numDays)
    output['numDrones'] = np.zeros(numDays)
    output['numCombs'] = np.zeros(numDays)
    output['dates'] = np.array([startDate+timedelta(days=i) for i in xrange(numDays)])
    broodArray = np.empty(0)

    if startCond == "Packaged":
        combsBuilt = 0

    # the loop:
    for index in range(0, numDays - 1):
        # get the outputs
        output['numWorkers'][index] = len(workerArray)
        output['numDrones'][index] = len(droneArray)
        output['numBrood'][index] = len(broodArray)
        output['numCombs'][index] = combsBuilt

        todaysDate = startDate + timedelta(days=index)

        # what are the bees doing?
        # http://healthywithhoney.com/the-jobs-of-a-bee-what-is-the-life-of-a-bee/
        housekeepers = len(workerArray[(workerArray >= 1) & (workerArray <= 2)])
        housekeepers_sick = len(sickWorkerArray[(sickWorkerArray >= 1) & (sickWorkerArray <= 2)])
        nurseNanny1 = len(workerArray[(workerArray >= 3) & (workerArray <= 5)])
        nurseNanny1_sick = len(sickWorkerArray[(sickWorkerArray >= 3) & (sickWorkerArray <= 5)])
        nurseNanny2 = len(workerArray[(workerArray >= 6) & (workerArray <= 11)])
        nurseNanny2_sick = len(sickWorkerArray[(sickWorkerArray >= 6) & (sickWorkerArray <= 11)])
        hiveBuilder = len(workerArray[(workerArray >= 12) & (workerArray <= 17)])
        hiveBuilder_sick = len(sickWorkerArray[(sickWorkerArray >= 12) & (sickWorkerArray <= 17)])
        guardVentilator = len(workerArray[(workerArray >= 18) & (workerArray <= 21)])
        guardVentilator_sick = len(sickWorkerArray[(sickWorkerArray >= 18) & (sickWorkerArray <= 21)])
        forager = len(workerArray[(workerArray > 21)])
        forager_sick = len(sickWorkerArray[(sickWorkerArray > 21)])

        # they have to build the comb so the queen will have a low number of open combs for the first 3 weeks
        if startCond == "Packaged" and index < 3 * 7:
            # how many new comb build per day?

            hiveBuilder = len(workerArray[(workerArray >= 12) & (workerArray <= 30)])
            hiveBuilder_sick = len(sickWorkerArray[(sickWorkerArray >= 12) & (sickWorkerArray <= 30)])

            combsBuilt = math.ceil((hiveBuilder + hiveBuilder_sick/2)/combBuildSpeed + combsBuilt)
            openComb = combsBuilt

            numEggsLayed[index] = np.minimum(openComb, peakEggRate)
            numHatched = 0



        elif startCond == "Packaged" and index < 6 * 7:

            hiveBuilder = len(workerArray[(workerArray >= 12) & (workerArray <= 20)])
            hiveBuilder_sick = len(sickWorkerArray[(sickWorkerArray >= 12) & (sickWorkerArray <= 20)])

            # X eggs hatch each day and bees build X comb
            numHatched = len(broodArray[broodArray > 20])
            broodArray = broodArray[broodArray <= 21]

            combsBuilt = math.ceil((hiveBuilder + hiveBuilder_sick / 2) / combBuildSpeed + combsBuilt)

            openComb = combsBuilt + numHatched

            # how many will the queen lay today?
            numEggsLayed[index] = np.minimum(openComb, peakEggRate)


        elif startCond == "Packaged":

            # X eggs hatch each day and bees build X comb
            numHatched = len(broodArray[broodArray > 20])
            broodArray = broodArray[broodArray <= 21]

            combsBuilt = math.ceil((hiveBuilder + hiveBuilder_sick / 2) / combBuildSpeed + combsBuilt)

            openComb = combsBuilt + numHatched

            # how many will the queen lay today?
            numEggsLayed[index] = np.minimum(openComb, peakEggRate)


        # Egg laying stops 20 days before broodless
        # this is a linear ramping down of the rate of eggs that starts on slowdown day, and ramps to zero
        # one brood cycle before broodless day
        if todaysDate > slowdownDate:
            percent = (todaysDate - slowdownDate).days / float((lastEggDate - slowdownDate).days)
            if percent >= 1:
                numEggsLayed[index] = 0
            else:
                numEggsLayed[index] = math.ceil(peakEggRate * (1 - percent))

        # how much brood is there now?
        broodArray = np.append(broodArray, np.zeros(int(numEggsLayed[index])))

        # Bees dieing today
        # what season are we in?
        if todaysDate < springStartDate:
            # winter (no drones)
            print "num old workers: ", len(workerArray[workerArray > winterAge])
            workerArray = workerArray[workerArray <= winterAge]
        elif todaysDate < summerStartDate:
            # spring
            print "num old workers: ", len(workerArray[workerArray > springAge])
            workerArray = workerArray[workerArray <= springAge]
            droneArray = droneArray[droneArray <= springAge]
        elif todaysDate < fallStartDate:
            # summer
            print "num old workers: ", len(workerArray[workerArray > summerAge])
            workerArray = workerArray[workerArray <= summerAge]
            droneArray = droneArray[droneArray <= summerAge]
        elif todaysDate < winterStartDate:
            # fall: send out the drones
            print "num old workers: ", len(workerArray[workerArray > fallAge])
            workerArray = workerArray[workerArray <= fallAge]
            droneArray = []
        else:
            # winter (no drones)
            print "num old workers: ", len(workerArray[workerArray > winterAge])
            workerArray = workerArray[workerArray <= winterAge]
            droneArray = []

        # sick bees:
        sickWorkerArray = sickWorkerArray[sickWorkerArray < sickAge]
        sickDroneArray = sickDroneArray[sickDroneArray < sickAge]

        # Bees hatching today
        workerArray = np.append(workerArray, np.zeros(int(math.ceil(numHatched*0.99))))
        droneArray = np.append(droneArray, np.zeros(int(math.ceil(numHatched * 0.01))))

        # Age by 1 day for tomorrow
        workerArray = workerArray + 1
        droneArray = droneArray + 1
        sickWorkerArray = sickWorkerArray + 1
        sickDroneArray = sickDroneArray + 1
        broodArray = broodArray + 1

        print "done with day: ", index
        print "worker average age:", np.average(workerArray)
        print "num eggs laid: ", numEggsLayed[index]
        print "num workers", len(workerArray)


    # store the rest of the output
    output['numEggsLayed'] = numEggsLayed

    return output


if __name__ == "__main__":
    # Data from widgets (camelCase)
    peakEggRate = "1500"
    startDate = "Feb 15"
    endDate = "Dec 15"
    startBees = "1kg (6600 bees)"
    startCond = "Packaged"
    evictDrones = "Sep 15"
    Manipulations = "No Manipulations"
    slowDown = "Sep 1"
    broodlessDate = "Nov 1"
    treat_1 = "None"
    treat_1_date = "Jul 1"
    treat_2 = "None"
    treat_2_date = "Jul 1"
    startMites = "0"

    inputData = dict(peak_egg_rate=peakEggRate, start_date=startDate, end_date=endDate, start_bees=startBees,
                     start_cond=startCond, evict_drones=evictDrones, manipulations=Manipulations,
                     slowdown=slowDown, broodless_date=broodlessDate, treat1=treat_1,
                     treat1date=treat_1_date, treat2=treat_2, treat2date=treat_2_date, start_mites=startMites)

    outputData = beeSim(inputData)

    # plot the output Data:
    # fig, ax = plt.subplots()
    # line1, = ax.plot(outputData['x'], outputData['y'], '--', linewidth=2)
    # plt.show()
    # plt.grid()


    months = MonthLocator(range(1, 13), bymonthday=1, interval=3)
    monthsFmt = DateFormatter("%b")
    fig2, ax2 = plt.subplots()
    line2 = ax2.plot_date(outputData['dates'], outputData['numWorkers'], '--', linewidth=2, label='# Workers')
    line3 = ax2.plot_date(outputData['dates'], outputData['numEggsLayed'], '--', linewidth=2, label='# Eggs Layed')
    line4 = ax2.plot_date(outputData['dates'], outputData['numBrood'], '--', linewidth=2, label='# Brood')
    line5 = ax2.plot_date(outputData['dates'], outputData['numCombs'], '--', linewidth=2, label='# Combs Built')

    ax2.xaxis.set_major_locator(months)
    ax2.xaxis.set_major_formatter(monthsFmt)
    ax2.legend()
    ax2.autoscale_view()

    plt.grid()
    plt.show()


print "bee_sim done"
