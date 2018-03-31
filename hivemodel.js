'use strict';

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	brightred: 'rgb(255, 0, 0)',
	darkred: 'rgb(148, 0, 0)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	lightblue: 'rgb(66, 244, 223)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)',
	black: 'rgb(0, 0, 0)'
};

        var config = {
            type: 'line',
            data: {
                labels: [""],
                datasets: [{
                    label: "Total",
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                }, {
                    label: "Eggs",
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
 
{
                    label: "Open Brood",
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Brood",
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Nurse Bees",
                    backgroundColor: window.chartColors.purple,
                    borderColor: window.chartColors.purple,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Waxmakers",
                    backgroundColor: window.chartColors.lightblue,
                    borderColor: window.chartColors.lightblue,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },{
                    label: "Foragers",
                    backgroundColor: window.chartColors.grey,
                    borderColor: window.chartColors.grey,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },{
                    label: "WinterBees",
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Phoretic Varroa",
                    backgroundColor: window.chartColors.brightred,
                    borderColor: window.chartColors.brightred,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Varroa",
                    backgroundColor: window.chartColors.darkred,
                    borderColor: window.chartColors.darkred,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                }, 
{
                    label: "Sick Bees",
                    backgroundColor: window.chartColors.black,
                    borderColor: window.chartColors.black,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Mite Drop",
                    backgroundColor: window.chartColors.grey,
                    borderColor: window.chartColors.grey,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
{
                    label: "Wash Count",
                    backgroundColor: window.chartColors.grey,
                    borderColor: window.chartColors.grey,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },
                ]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Colony progression thru the season for conditions in Canada'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
			type: 'time',
			time: {
			  unit: 'week',
			  displayFormats: {
				'week': 'MMM D'
			  }
			},
			ticks: {
			  autoSkip: true,
			  autoSkipPadding: 10
			}
                    }],
                    yAxes: [{
                        display: true,
						ticks: {
							beginAtZero: true,
							steps: 9,
							stepValue: 10000,
							max: 90000
						} ,
                        scaleLabel: {
                            display: true,
                            labelString: 'Population'
                        }
                    }]
                }
            }
        };
        var config2 = {
            type: 'line',
            data: {
                labels: [""],
                datasets: [{
                    label: "Total",
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
					pointRadius: 0,
					pointHoverRadius: 5,
                    data: [
                        1000
                    ],
                    fill: false,
                },      ]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Mite Load'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
			type: 'time',
			time: {
			  unit: 'week',
			  displayFormats: {
				'week': 'MMM D'
			  }
			},
			ticks: {
			  autoSkip: true,
			  autoSkipPadding: 10
			}
                    }],
                    yAxes: [{
                        display: true,
						ticks: {
							beginAtZero: true,
							steps: 10,
							//stepValue: 10000,
							//max: 80000
						} ,
                        scaleLabel: {
                            display: true,
                            labelString: 'Population'
                        }
                    }]
                }
            }
        }; 
	//var StartDate=new moment('20180215');
	function newDate(days) {
		var tt=new moment(StartDate);
		return tt.add(days, 'days');
	}


	var bees=new Array();
	var brood=new Array();
	var Population=new Array();
	var Eggs=new Array();
	var TotalBrood=new Array();
	var OpenBrood=new Array();
	var NurseBees=new Array();
	var WaxMakers=new Array();
	var Winter=new Array();
	var Foragers=new Array();
	var DroneBrood=new Array();
	var Drones=new Array();
	var pv=new Array();
	var WorkerVarroa=new Array();
	var DroneVarroa=new Array();
	var Phoretic=new Array();
	var Varroa=new Array();
	var SickBees=new Array();
	var TotalSick=new Array();
	var DropCount=new Array();
	var WashCount=new Array();
	var EggsToday=new Array();

	function ApplyTreatment(TreatmentType) {
		var mt;	//  total mites
		var me;	//  mites after kill
		var efficacy;
		switch (TreatmentType) {
		case 1:		//  formic flash
			//  the flash will kill 90% of the mites in each category
			efficacy=0.9;
			//  including those under caps
			mt=0;
			//  first we deal with phoretic varroa
			for(x=0; x<5; x++) mt+=pv[x];
			//  now we kill them based on efficacy
			me=mt*(1.0-efficacy);
			//  round to an integer
			me=parseInt(me.toFixed(0));
			//  now clear the array of phoretic population
			for(x=0; x<5; x++) pv[x]=0;
			//window.alert(mt+" "+me);
			// now put the phoretic survivors back in the slots
			//  evenly spread over those slots
			x=0;
			while(me > 0) {
				pv[x]++;
				me--;
				x++;
				if(x > 5) x=0;
			}
			//  now we have to repeat the process for mites under worker caps
			mt=0;
			for(x=0; x<11; x++) mt+=WorkerVarroa[x];
			for(x=0; x<11; x++) WorkerVarroa[x]=0;
			me=mt*(1.0-efficacy);
			me=parseInt(me.toFixed(0));
			x=0;
			while(me > 0) {
				WorkerVarroa[x]++;
				me--;
				x++;
				if(x > 10) x=0;
			}			

			//  and now repeat the process for the drone varroa
			mt=0;
			for(x=0; x<14; x++) mt+=DroneVarroa[x];
			for(x=0; x<14; x++) DroneVarroa[x]=0;
			me=mt*(1.0-efficacy);
			me=parseInt(me.toFixed(0));
			x=0;
			while(me > 0) {
				DroneVarroa[x]++;
				me--;
				x++;
				if(x>13) x=13;
			}
			//window.alert(mt);
			break;

		case 2:		//  OAV
			// an oav treatment kills 95% of phoretic mites
			//  and gets 95% of those that emerge today as well
			efficacy=0.95;
			mt=0;
			for(x=0; x<6; x++) mt+=pv[x];
			for(x=0; x<6; x++) pv[x]=0;
			me=mt*(1.0-efficacy);
			me=parseInt(me.toFixed(0));
			x=0;
			while(me > 0) {
				pv[x]++;
				me--;
				x++;
				if(x > 5) x=0;
			}
			//  phoretic mites are killed
			//  now get those emerging today
			mt=WorkerVarroa[10];
			me=mt*(1.0-efficacy);
			me=parseInt(me.toFixed(0));
			WorkerVarroa[x]=me;
			mt=DroneVarroa[13];
			me=mt*(1.0-efficacy);
			me=parseInt(me.toFixed(0));
			DroneVarroa[13]=me;

			break;

		default: //  the default is to do nothing
			//window.alert(TreatmentType);
			break;
			
		}
	}

	function RunHiveSim(FirstDay,NumDays,StartPopulation,MaxEggRate,MinEggRate,BroodlessDate,SlowDownDate,StartType,StartMites,DroneEviction,TreatType,TreatDay,T2Type,T2Day,Man1Type,Man1Day) {
		var x;
		var y;
		var dt,dt1;
		var day;
		var NumBees;
		var NumBrood;
		var BroodTotal;
		var NumChilled;
		var MaxIncubate;
		var MaxNewEggs;
		var IncubateRatio;
		var eggrate=MinEggRate;
		var WinterBees;
		var Nurses;
		var forage;
		var NursesNeeded;
		var OpenLarvae;
		var LastEggDay;
		var SlowDownDay;
		var EggIncrease=1.20;
		var RipeVarroa;
		var WorkerVarroaEmerged;
		var DroneVarroaEmerged;
		var NumSick;
		var LastDroneEgg;
		var MiteDrop;

		//window.alert(MaxEggRate);

		//  Now clear the bees and brood arrays
		while(bees.length > 0) bees.pop();
		while(brood.length > 0) brood.pop();
		//  clear the arrays of populations
		while(Population.length > 0) Population.pop();
		while(Eggs.length > 0) Eggs.pop();
		while(TotalBrood.length > 0) TotalBrood.pop();
		while(OpenBrood.length > 0) OpenBrood.pop();
		while(NurseBees.length > 0) NurseBees.pop();
		while(WaxMakers.length > 0) WaxMakers.pop();
 		while(Winter.length > 0) Winter.pop();
 		while(Foragers.length > 0) Foragers.pop();
 		while(Drones.length > 0) Drones.pop();
 		while(DroneBrood.length > 0) DroneBrood.pop();
 		while(pv.length > 0) pv.pop();
 		while(WorkerVarroa.length > 0) WorkerVarroa.pop();
 		while(DroneVarroa.length > 0) DroneVarroa.pop();
 		while(Phoretic.length > 0) Phoretic.pop();
 		while(Varroa.length > 0) Varroa.pop();
 		while(SickBees.length > 0) SickBees.pop();
 		while(TotalSick.length > 0) TotalSick.pop();
 		while(DropCount.length > 0) DropCount.pop();
 		while(WashCount.length > 0) WashCount.pop();
 		while(EggsToday.length > 0) EggsToday.pop();
		//  bee duty by age taken from wikipedia https://en.wikipedia.org/wiki/Worker_bee
		//  Now set up arrays for current bee population by age
		//  Brood will emerge on day 21
		for(x=0; x<22; x++) brood.push(0);
		//  Forgagers last till day 42
		for(x=0; x<53; x++) bees.push(0);
		for(x=0; x<53; x++) Drones.push(0);
		for(x=0; x<26; x++) SickBees.push(0);
		//  Drone brood takes 24 days to emerge
		for(x=0; x<26; x++) DroneBrood.push(0);
		//  Now set up arrays for aging Varroa mites
		for(x=0; x<6; x++) pv.push(0);
		for(x=0; x<25; x++) WorkerVarroa.push(0);
		for(x=0; x<25; x++) DroneVarroa.push(0);
		//  Now set up empty arrays for population(s) over time

		//  Now we have to populate the bees array with bees by age depending on the type of
		//  start we are doing
		WinterBees=0;
		//window.alert(StartType);


		switch(StartType) {
		case 1:	//  this is a package, no winter bees
			y=StartPopulation/42;
			// make it an integer and make half of the bees Winterbees
			y=parseInt(y.toFixed(0));
			for(x=0; x<42; x++) bees[x]=y;
		  break;
		case 2:	//  this is a wintered colony, no brood, with winter bees
			//y=parseInt(StartPopulation);
			//WinterBees=parseInt(y.toFixed(0));

			//  half the bees are graduated to various levels of
			//  nurse ages
			y=StartPopulation/42;
			// make it an integer and make half of the bees Winterbees
			y=y/2;
			WinterBees=parseInt(y.toFixed(0));
			WinterBees=WinterBees*42;
			y=parseInt(y.toFixed(0));
			for(x=0; x<42; x++) bees[x]=y;

		  break;
		case 3:	//  this is a nuc, has brood and bees and queen 
		case 4:	//  this is a nuc started with a cell
		case 5:	//  this is a nuc left to make a queen
			y=StartPopulation/21;
			y=parseInt(y.toFixed(0));
			for(x=0; x<21; x++) bees[x]=y;
			//  now put in 2/3 of this number as brood
			y=StartPopulation*3/2;
			y=y/20;
			y=parseInt(y.toFixed(0));
			for(x=0; x<20; x++) brood[x]=y;
		  break;
		}

		//  Lets divide our varroa population over our phoretic slots
		y=0;
		x=0;
		while(y < StartMites) {
			pv[x]++;
			x++;
			y++;
			if(x > 5) x=0;
        }
		//y=y/5;	// divide it over 5 slots
		//y=parseInt(y.toFixed(0));
		//for(x=0; x<5; x++) pv[x]=y;

		//  now set up more conditions
		dt=moment(FirstDay);
		dt1=moment(BroodlessDate);
		y=dt1.diff(dt,'days');
		//  Egg laying stops 20 days before broodless
		y=y-20;
		LastEggDay=y;
		//  Slowdown starts around July 15
		dt1=moment(SlowDownDate);
		y=dt1.diff(dt,'days');
		SlowDownDay=y;
		// drone eviction starts 
		dt1=moment(DroneEviction);
		y=dt1.diff(dt,'days');
		LastDroneEgg=y-31;



		//  Now we have initial conditions all set, lets run our simulation for
		//  The number of days we need to run
		for(day=0; day<NumDays; day++) {
			var localmax;
			var wd;
			var z;
			var q;
			var pmites;
			//  We begin by aging all the bees, those in the oldest slot die and disappear
			MiteDrop=0;
			for(x=47; x>0; x--) {
				bees[x]=bees[x-1];
			}
			//  Now age any in the sick bees slots, those 25 days old die off
			for(x=25; x>0; x--) SickBees[x]=SickBees[x-1];
			//SickBees[]=0;
			//  now we die off bees in the slots from 37 to 47, 10% die in each slot
            //  which accounts for +- 5 days on bee life span
			for(x=37; x<47; x++) {
				y=bees[x]*0.9;
				y=parseInt(y.toFixed(0));
				bees[x]=y;
            }
			//  Now we age the drones, those in the oldest slots die off
			for(x=47; x>0; x--) {
				Drones[x]=Drones[x-1];
			}

			//  winter bees die at the rate of 5% a month
			wd=WinterBees*.0015;
			wd=parseInt(wd.toFixed(0));
			WinterBees=WinterBees-wd;
			if(WinterBees < 0) WinterBees=0;
			

			//  next we emerge the oldest brood as new bees in day 0
			bees[0]=brood[20];
			brood[20]=0;
			//  now we age all the brood;
			for(x=20; x>0; x--) {
				brood[x]=brood[x-1];
			}
			brood[0]=0;
			//  next step, emerge any drone brood that's ripe and put it in day 0
			Drones[0]=DroneBrood[24];
			DroneBrood[24]=0;
			for(x=24; x>0; x--) {
				DroneBrood[x]=DroneBrood[x-1];
			}
			DroneBrood[0]=0;

			//  Apply the first mite treatment
			switch(TreatType) {
				case 1:		//  single formic flash
				if(day==TreatDay) ApplyTreatment(1);
				break;
				case 2:		//  single OAV
				if(day==TreatDay) ApplyTreatment(2);
				break;
				case 3:		//  2 OAV at 7 day intervals
				if(day==TreatDay) ApplyTreatment(2);
				if(day==TreatDay+7) ApplyTreatment(2);
				break;
				case 4:		//  3 OAV at 7 day intervals
				if(day==TreatDay) ApplyTreatment(2);
				if(day==TreatDay+7) ApplyTreatment(2);
				if(day==TreatDay+14) ApplyTreatment(2);
				break;
				case 5:		//  4 OAV at 5 day intervals
				if(day==TreatDay) ApplyTreatment(2);
				if(day==TreatDay+5) ApplyTreatment(2);
				if(day==TreatDay+10) ApplyTreatment(2);
				if(day==TreatDay+15) ApplyTreatment(2);
				break;

				default:	//  nothing
			}			
			//  Apply the second mite treatment
			switch(T2Type) {
				case 1:		//  single formic flash
				if(day==T2Day) ApplyTreatment(1);
				break;
				case 2:		//  single OAV
				if(day==T2Day) ApplyTreatment(2);
				break;
				case 3:		//  2 OAV at 7 day intervals
				if(day==T2Day) ApplyTreatment(2);
				if(day==T2Day+7) ApplyTreatment(2);
				break;
				case 4:		//  3 OAV at 7 day intervals
				if(day==T2Day) ApplyTreatment(2);
				if(day==T2Day+7) ApplyTreatment(2);
				if(day==T2Day+14) ApplyTreatment(2);
				break;
				case 5:		//  4 OAV at 5 day intervals
				if(day==T2Day) ApplyTreatment(2);
				if(day==T2Day+5) ApplyTreatment(2);
				if(day==T2Day+10) ApplyTreatment(2);
				if(day==T2Day+15) ApplyTreatment(2);
				break;

				default:	//  nothing
			}		

			//  Now we need to age the phoretic varroa mites, but, the oldest mites stay in this slot for now
			//  until they find a cell to go into
			pv[5]=pv[5]+pv[4];
			for(x=4; x>0; x--) pv[x]=pv[x-1];
			pv[0]=0;
			//  Now we have some phoretic varroa fall and die
			y=pv[5]*.003;
			//y=y*0.003;
			y=parseInt(y.toFixed(0));
			MiteDrop=MiteDrop+y;
			pv[5]=pv[5]-y;
			//  Now we have to emerge any varroa in worker cells
			//  varroa spend 11 days under caps in a worker
			y=WorkerVarroa[10];
			WorkerVarroaEmerged=y;
			y=y*2;	//  Each varroa produced one offspring
			// one in 4 is an original foundress mite that dies off
			z=y/4;
			z=parseInt(z.toFixed(0));
			MiteDrop+=z;
			y=y-z;
			pv[0]+=y;
			//  and now we age the varroa mites in worker cells
			for(x=10; x>0; x--) WorkerVarroa[x]=WorkerVarroa[x-1];
			WorkerVarroa[0]=0;
			//  Now we have to emerge any varroa in drone cells
			//  varroa spend 14 days under caps in a drone
			y=DroneVarroa[13];
			DroneVarroaEmerged=y;
			//  each foundress produced two offspring
			y=y*3;
			//  one in 9 of these is an original foundress mite
			z=y/9;
			z=parseInt(z.toFixed(0));
			MiteDrop+=z;
			y=y-z;
			pv[0]+=y;
			//  now age the drone varroa
			for(x=13; x>0; x--) DroneVarroa[x]=DroneVarroa[x-1];
			DroneVarroa[0]=0;

			//  Now we have to account for how many of our newly emerged worker bees
			//  are sick due to varroa in the cells as they matured
			SickBees[0]=0;
			if(WorkerVarroaEmerged < bees[0]) {
				SickBees[0]+=WorkerVarroaEmerged;
				bees[0]-=WorkerVarroaEmerged;
			} else {
				//  the number of varroa emerging is equal to or greater than
				//  the number of bees emerging
				//  those bees emerging with more than one varroa
				//  are already dead
				var deadbees;
				deadbees=WorkerVarroaEmerged-bees[0];
				//  remove dead ones from the bees count
				bees[0]=bees[0]-deadbees;
				if(bees[0] < 0) bees[0]=0;
				//  the rest are just sick, and go into the sick bee counts
				SickBees[0]+=bees[0];
				bees[0]=0;
			}
			// now we do the same for drones
			if(DroneVarroaEmerged < Drones[0]) {
				SickBees[0]+=DroneVarroaEmerged;
				Drones[0]-=DroneVarroaEmerged;
			} else {
				SickBees[0]+=Drones[0];
				Drones[0]=0;
			}

			//  Now lets see how many varroa are going to end up in cells
			//  Assume one quarter that are ripe will find a cell
			RipeVarroa=pv[5]/4;
			RipeVarroa=parseInt(RipeVarroa.toFixed(0));
			pv[5]-=RipeVarroa;
			//  first try is to put them into ripe drone cells which would be capped
			//  on day 10, and lets assume half of the varroa find drone cells

			if((DroneBrood[10] > 0)&&(RipeVarroa > 0)) {
				if(DroneBrood[10] > RipeVarroa) {
					//  just put them all in drone cells
					DroneVarroa[0]=RipeVarroa/2;
					RipeVarroa/=2;
				} else {
					//  drone cells couldn't take them all
					if(DroneBrood[10] > 0) {
						DroneVarroa[0]=DroneBrood[10]/2;
						RipeVarroa-=DroneBrood[10]/2;
					}
				}
			}
			//  and now we place what's left into worker cells
			if(RipeVarroa > 0) {
				//  we have ripe varroa, and the drone cells couldn't take them all
				// varroa go into worker brood on day 9
				if(brood[9] > RipeVarroa) {
					WorkerVarroa[0]=RipeVarroa;
					RipeVarroa=0;
				} else {
					RipeVarroa-=brood[9];
					WorkerVarroa[0]=brood[9];
				}
			}
			//  if there are still more varroa to go in cells
			//  some cells will get a second mite
			if(RipeVarroa > 0) {
				if(brood[9] > RipeVarroa) {
					WorkerVarroa[0]+=RipeVarroa;
					RipeVarroa=0;
				} else {
					RipeVarroa-=brood[9];
					WorkerVarroa[0]+=brood[9];
				}
			}

			//  any that didn't fit in cells, just wait now
			if(RipeVarroa > 0) pv[5]+=RipeVarroa;
			// now tally up the phoretic varroa
			y=0;
			for(x=0; x<6; x++) y+=pv[x];
			y=parseInt(y.toFixed(0));
			pmites=y;
			Phoretic.push(y);
			//  now add in all the varroa uner caps
			for(x=0; x<8; x++) y=y+WorkerVarroa[x];
			for(x=0; x<11; x++) y=y+DroneVarroa[x];
			y=parseInt(y.toFixed(0));
			Varroa.push(y);

			//  We need to adjust maximum egg rate later in the season
			if(day > SlowDownDay) {
				//  this is a linear ramping down of the rate of eggs
				//  that starts on slowdown day, and ramps to zero
				//  one brood cycle before broodless day
				var s;	//  slope of the line for egg reduction rate
				s=(day-SlowDownDay)/(LastEggDay-SlowDownDay);
				s=MaxEggRate*s;
				localmax=MaxEggRate-s;
				if(localmax < 0) localmax=0;

			} else {
				localmax=MaxEggRate;
			}
			//  Account for starts that need to make a queen or emerge a cell
			if(StartType==4) {
				//  a nuc started with a cell has no new eggs for 12 days
				if(day < 12) localmax=0;
			}
			if(StartType==5) {
				//  a nuc making a queen has no new eggs for 28 days
				if(day < 28) localmax=0;
			}
			
			//  Account for manipulations
			switch(Man1Type) {
			case "1":	//  queen was killed, no eggs for 25 days
				if((day > Man1Day) &&(day < (Man1Day+25))) {
					localmax=0;
				}
				break;
			case "2":	//  Requeen with caged queen, no eggs for 4 days
				if((day > Man1Day) &&(day < (Man1Day+4))) localmax=0;
				break;
			case "3":	//  Requeen with cell, no eggs for 10 days
				if((day > Man1Day) &&(day < (Man1Day+10))) localmax=0;
				break;
			case "4":	// CutDown split, queen removed no eggs for 25 days
				if((day > Man1Day) &&(day < (Man1Day+25))) {
					localmax=0;
				}
				if(day==Man1Day) {
					//  we removed two frames of brood
					//  and the house bees on those frames
					//  remove 10000 brood evenly spaced works out to
					//  238 in each brood slot
					for(x=0; x<21; x++) {
						if(brood[x] > 238*2) brood[x]-=238*2;
						else brood[x]=0;
					}
					//  and we lost 3000 house bees which works out
					//  to 142*2 in each slot up to day 21
					for(x=0; x<21; x++) {
						if(bees[x] > 142*2) bees[x]-=142*2;
						else bees[x]=0;
					}
					
				}
				break;
			case "5":	// Harvest a brood frame
				if(day==Man1Day) {
					//  we removed one frame of brood
					//  and the house bees on that frame
					//  remove 5000 brood evenly spaced works out to
					//  238 in each brood slot
					for(x=0; x<21; x++) {
						if(brood[x] > 238) brood[x]-=238;
						else brood[x]=0;
					}
					//  and we lost 3000 house bees which works out
					//  to 142 in each slot up to day 21
					for(x=0; x<21; x++) {
						if(bees[x] > 142) bees[x]-=142;
						else bees[x]=0;
					}
					
				}
				break;
			case "6":	// Harvest 2 brood frames
				if(day==Man1Day) {
					//  we removed two frame of brood
					//  and the house bees on each frame
					//  remove 5000 brood evenly spaced works out to
					//  238 in each brood slot
					for(x=0; x<21; x++) {
						if(brood[x] > 238*2) brood[x]-=238*2;
						else brood[x]=0;
					}
					//  and we lost 3000 house bees per frame which works out
					//  to 142 in each slot up to day 21
					for(x=0; x<21; x++) {
						if(bees[x] > 142*2) bees[x]-=142*2;
						else bees[x]=0;
					}
					
				}
				break;
			case "7":	// Harvest a brood frame once a week for 4 weeks
				if((day==Man1Day)||(day==Man1Day+7)||(day==Man1Day+14)||(day==Man1Day+21)) {
					//  we removed one frame of brood
					//  and the house bees on that frame
					//  remove 5000 brood evenly spaced works out to
					//  238 in each brood slot
					for(x=0; x<21; x++) {
						if(brood[x] > 238) brood[x]-=238;
						else brood[x]=0;
					}
					//  and we lost 3000 house bees which works out
					//  to 142 in each slot up to day 21
					for(x=0; x<21; x++) {
						if(bees[x] > 142) bees[x]-=142;
						else bees[x]=0;
					}
					
				}
				break;
			case "8":	// Harvest a brood frame once a week for 8 weeks
				if((day==Man1Day)||(day==Man1Day+7)||(day==Man1Day+14)||(day==Man1Day+21)||
					(day==Man1Day+28)||(day==Man1Day+35)||(day==Man1Day+42)||(day==Man1Day+49) ) {
					//  we removed one frame of brood
					//  and the house bees on that frame
					//  remove 5000 brood evenly spaced works out to
					//  238 in each brood slot
					for(x=0; x<21; x++) {
						if(brood[x] > 238) brood[x]-=238;
						else brood[x]=0;
					}
					//  and we lost 3000 house bees which works out
					//  to 142 in each slot up to day 21
					for(x=0; x<21; x++) {
						if(bees[x] > 142) bees[x]-=142;
						else bees[x]=0;
					}
					
				}
				break;
			case "9":	// Swarm, same egg math as a requeen with cell
						//  but we lost 1/3 of the bees too
				if((day > Man1Day) &&(day < (Man1Day+10))) localmax=0;
				if(day==Man1Day) {
					for(x=0; x<40; x++) {
						var q;
						q=bees[x]*0.66;
						q=parseInt(q.toFixed(0));
						bees[x]=q;
					}
				}
				break;
			default:
				break;
			}

			//  Now we need to calculate how many eggs the queen can lay today
			//  Assumption here, she can lay 5% more than yesterday, up to the
			//  her peak rate
			if(eggrate < localmax) eggrate = eggrate * EggIncrease;
			if(eggrate > localmax) eggrate = localmax;
			if(eggrate < 0) eggrate=0;

			EggsToday.push(eggrate)
			//  if the phoretic mite population exceeds the bee population
			//  then no eggs will be laid anymore
			if(pmites > (NumBees)) eggrate=0;

			//  now put that many eggs into the brood arrays
			//  put 10% of the eggs into drone brood
			//  put the number of drone eggs in y
			y=eggrate/10;
			y=parseInt(y.toFixed(0));
			//y++;
			if(y < 0) y=0;
			//  If we are after the last drone day, no drone eggs laid
			if(day > LastDroneEgg) y=0;
			DroneBrood[0]=y;
			//  figure out how many workers after subtracting drones
			//  from total eggs
			//y=0;
			//  now figure out how many workers get laid in cells
			//  account for rounding
			
			wd=eggrate
			wd++;
			wd=wd-y;
			//wd++;
			wd=parseInt(wd.toFixed(0));
			brood[0]=wd;

			NumBees=0;
			for(x=0; x<47; x++) {
				NumBees=NumBees+bees[x];
			}
			for(x=0; x<47; x++) {
				NumBees=NumBees+Drones[x];
			}
			NumSick=0;
			for(x=0; x<25; x++) {
				NumSick+=SickBees[x];
			}
			NumBees+=WinterBees;
			NumBees+=NumSick;
			Population.push(parseInt(NumBees.toFixed(0)));
			TotalSick.push(parseInt(NumSick.toFixed(0)));

			//  Our total of phoretic mites is in the pv array, ripe ones in pv[5]
			//  if we have more varroa than bees, then varroa will starve
			y=pv[5];
			if(y > NumBees ) {
				//  calculate the number of varroa greater than bees
				y=y-NumBees;
				//  estimate that 25% of them starve
				y=y/4;
				y=parseInt(y.toFixed(0));
				MiteDrop += y;
				pv[5]=pv[5]-y;
			}

			BroodTotal=0;
			for(x=0; x<21; x++) BroodTotal+=brood[x];
			for(x=0; x<24; x++) BroodTotal+=DroneBrood[x];
			TotalBrood.push(parseInt(BroodTotal.toFixed(0)));
			//  now we know how many bees in the colongy, and how much brood
			//  lets see if they can incubate that much
			//  simple assumption, one bee can incubate one brood, flesh this out better later
			dt=moment(FirstDay);
			dt=dt.add(day,'days');
			y=dt.month();
			switch(y) {
			case 1:	// January
			case 2: // February
				IncubateRatio=0.8;
				break;
			case 3:	// March
				IncubateRatio=1.0;
				break;
			case 4:	//  April
				IncubateRatio=1.25;
				break;
			//case 8:	//  August
			//	IncubateRatio=1.0;
			//	break;
			case 9:	//  September
				IncubateRatio=1.0;
				break;
			case 10:	// October
				IncubateRatio=0.7;
				break;
				
			default:
				IncubateRatio=1.5;
				break;
			}


{
//  lets change this from a monthly step function to a linear function
//  temperatures rising consistently from Feb 15 to July 1
var d1;
var d2;
var d3;
var m;
var b;

dt=moment("2018-02-15");
d1=dt.dayOfYear();
dt=moment("2018-05-01");
d2=dt.dayOfYear();
dt=moment(FirstDay);
dt=dt.add(day,'days');
d3=dt.dayOfYear();
//  y=mx+b y=0.7 when x=d1 y=1.5 when x=d2
//  0.7=m*d1 + b
//  1.5 = m*d2 +b
//  b = 1.5 - m *d2
//  b = 0.7 - m *d1
//  1.5 - m * d2 = 0.7 - m * d1
//  1.5 - 0.7 = -m* d1 + m * d2
//  0.8 = m * (d2 - d1)
//  0.8 / (d2 - d1 ) = m;

m= 0.8 / (d2 - d1);
b= 0.7 - (m * d1);

IncubateRatio=m * d3 +b;
if(IncubateRatio > 1.5) IncubateRatio=1.5;

//IncubateRatio=1.5;

}


			//MaxIncubate=(NumBees-NumSick)*IncubateRatio;
			MaxIncubate=(NumBees)*IncubateRatio;

			if(MaxIncubate < BroodTotal) {
				//  if we have more brood than we can incubate
				//  some of it will chill and die
				NumChilled=BroodTotal-MaxIncubate;
				x=0;
				//  start by chilling drone brood

				while((NumChilled > 0)&&(x<24)) {
					if(DroneBrood[x] > NumChilled) {
						//  all the chilled brood comes from this one
						DroneBrood[x]-=NumChilled;
						NumChilled=0;
                    } else {
						//  all of the brood in this slot chills
						NumChilled-=DroneBrood[x];
						DroneBrood[x]=0;
					}
					x++;	//  go to the next slot
				}
				x=0;
				while((NumChilled > 0)&&(x<20)) {
					if(brood[x] > NumChilled) {
						//  all the chilled brood comes from this one
						brood[x]-=NumChilled;
						NumChilled=0;
                    } else {
						//  all of the brood in this slot chills
						NumChilled-=brood[x];
						brood[x]=0;
					}
					x++;	//  go to the next slot
				}
			}
			OpenLarvae=0;
			for(x=4; x<10; x++) OpenLarvae=OpenLarvae+brood[x];
			for(x=4; x<11; x++) OpenLarvae=OpenLarvae+DroneBrood[x];
			Nurses=0;
			for(x=3; x<12; x++) Nurses=Nurses+bees[x];

			NursesNeeded=OpenLarvae*5/3;
			if(( NursesNeeded > Nurses)) {
				var shortfall;
				shortfall=NursesNeeded-Nurses;
				if(WinterBees > shortfall) {
					//  graduate some winter bees to nurse duty
					bees[4]+=shortfall;
					WinterBees-=shortfall;
				} else {
					//  graduate any left
					if(WinterBees > 0) {
						bees[4]+=WinterBees;
						WinterBees=0;
					}
				}
			}
			if(Nurses > NursesNeeded) {
				var excess;
				excess=Nurses-NursesNeeded;
				if(excess > bees[4]) {
					WinterBees+=bees[4];
					bees[4]=0;
				} else {
					WinterBees+=excess;
					bees[4]-=excess;
				}
			}

			//  if our phoretic mite count is greater than our bee count
			if(pmites > NumBees) {
				//  If we have winter bees, then some of them get infected
				var tt;
				tt=pmites - NumBees;
				// 1/4 of the surplus mites find a winter bee
				tt=tt/4;
				if(tt < WinterBees) {
					WinterBees=WinterBees-tt;
					SickBees[0]+=tt;
				} else {
					//  the last of our winter bees are getting hit by mites now
					SickBees[0]+=WinterBees;
					WinterBees=0;
				}
			}

			//  recalc active nurses after adjusting for graduation to winter bees
			Nurses=0;
			for(x=3; x<12; x++) Nurses=Nurses+bees[x];
			NurseBees.push(parseInt(Nurses));
			//  if we actually ended up with less eggs than queen is capable of
			//  increase her rate, with a minimum of the initial rate
			if((brood[0]+DroneBrood[0]) < eggrate) eggrate=eggrate/EggIncrease;
			if(eggrate < MinEggRate) eggrate=MinEggRate;
			if(eggrate > localmax) eggrate=localmax;
			
			forage=0;
			for(x=22; x<42; x++) forage=forage+bees[x];
			y=0;
			for(x=0; x<3; x++) y=y+brood[x];
			for(x=0; x<3; x++) y=y+DroneBrood[x];
			Eggs.push(parseInt(y));
			y=0;
			for(x=12; x<17; x++) y=y+bees[x];
			WaxMakers.push(parseInt(y));
			OpenBrood.push(parseInt(OpenLarvae.toFixed(0)));

			Foragers.push(parseInt(forage.toFixed(0)));
			Winter.push(parseInt(WinterBees.toFixed(0)));
			DropCount.push(MiteDrop);

			//  A mite wash done properly takes 300 bees
			//  so figure out how many phoretic varroa per bee
			y=0;
			for(x=0; x<6; x++) y=y+pv[x];
			//  y= number of phoretic mites
			//  mites get on winter bees thru the winter
			q=Nurses+WinterBees;
			//  early in the buildup, bees in the nurse age are limited
			//  and foragers are delayed.  Account for this so our number
			//  doesn't get skewed by the small number of correct age bees
			//  temporary value of q, how many bees are actually in the nest
			//  when sampled for a wash
			if(q < TotalBrood) q=TotalBrood;
			if(q > NumBees*0.75) q=NumBees*0.75;
			//  now figure out how many mites per bee in the sample
			z=y/q;
			//  lets cap this at maximum 6 mites over 5 bees, the rest are running loose
			//  and still hunting for a bee to get latched onto
			if(z > 1.2) z=1.2;
			// now we have a fraction of how many mites per bee in our sample
			//  assume a sample of 300
			z=z*300;
			//  and this cant be more than the phoretic varroa count
			if(z > y) z=y;
			//  and round to an integer
			z=parseInt(z.toFixed(0));
			WashCount.push(z);

		}
	

	}



/*
       var colorNames = Object.keys(window.chartColors);
        document.getElementById('addDataset').addEventListener('click', function() {
            var colorName = colorNames[config.data.datasets.length % colorNames.length];
            var newColor = window.chartColors[colorName];
            var newDataset = {
                label: 'Dataset ' + config.data.datasets.length,
                backgroundColor: newColor,
                borderColor: newColor,
                data: [],
                fill: false
            };

            for (var index = 0; index < config.data.labels.length; ++index) {
                newDataset.data.push(index*2);
            }

            config.data.datasets.push(newDataset);
            window.myLine.update();
        });

        document.getElementById('addData').addEventListener('click', function() {
            if (config.data.datasets.length > 0) {
                var month = MONTHS[config.data.labels.length % MONTHS.length];
                config.data.labels.push(month);

                config.data.datasets.forEach(function(dataset) {
                    dataset.data.push(randomScalingFactor());
                });

                window.myLine.update();
            }
        });

        document.getElementById('removeDataset').addEventListener('click', function() {
            config.data.datasets.splice(0, 1);
            window.myLine.update();
        });

        document.getElementById('removeData').addEventListener('click', function() {
            config.data.labels.splice(-1, 1); // remove the label first

            config.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myLine.update();
        });
	*/
