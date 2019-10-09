/*
*  Function()
*  Print bots schedules to the screen
*/
function printToScreen(bot, name, bot_reference){
    //self.botSched();
    var isTodayBusinessDay = isBusinessDay(new Date());
    convertDayToBusinessDay(today);
    if(isBusinessDay(date)){ convertDayToMonthEndDay(date); }
    else{ self.monthEndDay="" }
    
    var available = "Nothing Currently Scheduled";
    document.getElementById(name+"_dupe").innerHTML = " ";
    self.allTimes = [];
    self.reservations = [];

    //Expand 'to' date spans (i.e. MEdayN5_to_N1)
    for (var property in bot) {
        if(property.includes("_to_")){
            result = checkToSpan(property);
            
            for (time in result){
                let nameFormat = result[time];
				let holdName = bot[property];
				if(bot[nameFormat] != undefined){
					bot[property][0] = bot[property][0] + ":";
					bot[nameFormat][0] = bot[nameFormat][0] + ";" + bot[property].join("*") + "*";
					bot[property].shift();
					bot[nameFormat] = bot[nameFormat].concat(bot[property]);
					bot[property].unshift(holdName);
				} else {
					bot[nameFormat] = bot[property];
				}
                
            }
            delete bot[property];
        }
    }
	
	//Expand 'and' date spans (i.e. Monday_and_Tuesday)
    for (var property in bot) {
        if(property.includes("_and_")){
            result = checkAndSpan(property);
            
            for (time in result){
                let nameFormat = result[time];
				let holdName = bot[property][0];
				if(bot[nameFormat] != undefined){
					bot[property][0] = bot[property][0] + ":";
					bot[nameFormat][0] = bot[nameFormat][0] + ";" + bot[property].join("*") + "*";
					bot[property].shift();
					bot[nameFormat] = bot[nameFormat].concat(bot[property]);
					bot[property].unshift(holdName);
				} else {
					bot[nameFormat] = bot[property];
				}
                
            }
            delete bot[property];
        }
    }

    //remove days other than today 
    for (var property in bot) {
        for (i=1;i<bot[property].length;i++){
            if(!self.allTimes.includes(bot[property][i])){
                self.allTimes.push(bot[property][i]);
            }
        }
        //Translate 'EXCEPT' dates 
        if(property.includes("EXCEPT")){
            result = checkException(property);
            bot[result] = bot[property];
            delete bot[property];
            property = result;
        }
        //Translate 'FIRST','SECOND','THIRD','FOURTH','FIFTH'
        if(property.includes("FIRST") || property.includes("SECOND") || property.includes("THIRD") || property.includes("FOURTH") || property.includes("FIFTH")){
            result = checkWeekNumber(property);
            if(!result){ 
                delete bot[property];
            }
            continue;
        }
    
        if (bot.hasOwnProperty(property) && businessDay != property && property.startsWith("day") && (property != "daily" || day === "Saturday" || day == "Sunday")) {
            delete bot[property];
        }
        if(bot.hasOwnProperty(property) && businessDay != property && property != day && (property != "daily" || day === "Saturday" || day == "Sunday") && property != monthEndDay){
            delete bot[property];
        }
    }


    //add reserved times 
    for (var property in self.RESERVE_DATA) {
        if(self.RESERVE_DATA[property].hasOwnProperty(name)){
            if(bot.reserved === undefined){
                bot.reserved = ["reserved"];
            }
            self.reservations.push(self.RESERVE_DATA[property].name + " - " + self.RESERVE_DATA[property].process + " - " + moment(self.RESERVE_DATA[property][name][0] + ":00:00", 'HH:mm').format('h:mm A') + " (" + self.RESERVE_DATA[property]._id + ")")
            bot.reserved.push(self.RESERVE_DATA[property][name][0]);
        }
    }

    //print remaining days
    var outputs = [];
    var currentProcess = " ";
    var multiProcesses = false;
    var splitProcesses = [];
    var nonScheduledHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    for (var property in bot) {
        
        nonScheduledHours = nonScheduledHours.filter( function( el ) {
            return !bot[property].includes( el );
        } );

        if (bot.hasOwnProperty(property)){
            for (value in bot[property]){
                if(value!=0){ // first value is the process name
                    if(bot[property][value]===hour){
                        available = currentProcess;
                    }
                    if(!outputs.includes(moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A'))){
                        outputs.push(moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A'));
                    } else {
                        document.getElementById(name+"_dupe").innerHTML = 
                        document.getElementById(name+"_dupe").innerHTML +
                        "Possible Schedule Overlap at: " + moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A') + "</br>";
                    }
                    bot[property][value] = moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A');
                } else {
                    // are there multiple processes running the same day? 
                    // if so then split them by ";" then find which one is running this hour then split by ":" to get process name
                    multiProcesses = bot[property][value].includes(";");
                    if (multiProcesses){
                        splitProcesses = splitProcesses.concat(bot[property][value].split(";"));
                        for(value in splitProcesses){
                            if(splitProcesses[value].includes("*"+hour+"*") && !hideAvailable){
                                currentProcess = splitProcesses[value].split(":");
                                currentProcess = "<span style='color:red'>Scheduled: " + currentProcess[0] + "</span>";
                            }
                        }
                    } else {
                        currentProcess = "<span style='color:red'>Scheduled: " + bot[property][value]+"</span>";
                    }
                }
            }
        }
    }

    // which processes are running today - show in modal
    if(Object.keys(bot).length === 0){
        bot.fakeprop = [[]];
    }
    //don't count 12am, 1am, 2am, 11pm in bot utilization
    self.timeLength = self.allTimes.length;
    if(!self.allTimes.includes(0)) {timeLength = timeLength+1;}
    if(!self.allTimes.includes(1)) {timeLength = timeLength+1;}
    if(!self.allTimes.includes(2)) {timeLength = timeLength+1;}
    if(!self.allTimes.includes(23)) {timeLength = timeLength+1;}

    for (var property in bot) {
        if(bot[property][0].includes(";")){
            bot[property][0] = "";
            for(var process in splitProcesses){
                if(bot[property][0]===""){bot[property][0] = splitProcesses[process].split(":")[0];}
                else {bot[property][0] = bot[property][0] + "<li>" + splitProcesses[process].split(":")[0]}
            }

        }

        if(bot_reference.runningToday===undefined){bot_reference.runningToday="";}
        if(!bot_reference.runningToday.includes(bot[property][0])){bot_reference.runningToday = bot_reference.runningToday + "<li>" + bot[property][0];}
        bot_reference.bot_utilization = Math.round((self.timeLength / 24) * 100) + "%";
        bot_reference.non_sched_hours = nonScheduledHours;
        bot_reference.reservations = self.reservations;
    }
    if(bot[property][0].length === 0){
        bot_reference.runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯";
    }

    for (var element in BOTS.INFO) {
        if(BOTS.INFO[element].name === bot_reference.name){
            self.BOTS.INFO[element] = bot_reference;
        }
    }

    //sort times earliest -> latest
    outputs.sort(function (a, b) {
        return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
    });

    //set elements for schedules 
    document.getElementById(name+"_title").innerHTML = "<center><strong>"+name+":</strong></center> <br>"
    for (var i=0; i<outputs.length; i++) {
        var color = "0px 0px 0px black; font-family: Times New Roman";
        if(outputs[i] === moment(hour + ":00:00", 'HH:mm').format('h:mm A') && !hideAvailable){
            color = "0px 2px 5px red; font-family:monospace";
        }
        if(bot.reserved !== undefined){
            if(bot.reserved.includes(outputs[i])){
                color = "0px 2px 5px goldenrod; font-family:monospace";
            }
        }
        if(i<9){
            document.getElementById(name+"_body").innerHTML = "<center style='text-shadow:" +color+"'>" + document.getElementById(name+"_body").innerHTML + outputs[i] + "</center><br>";
        } else {
            document.getElementById(name+"_body").innerHTML = "<center style='text-shadow:" +color+"'>" + document.getElementById(name+"_body").innerHTML + "<span class='hide_time_"+name+"'>" + outputs[i] + "</span>" + "</center><br class='hide_time_"+name+"'>";
        }
    }
    let className = document.getElementsByClassName("hide_time_"+name+"");
    for (var i = 0; i < className.length; i++) {
        className[i].style.display = "none";
        document.getElementById(name+"_btnExtend").style.display = "block";
    }
    
    if(outputs.length === 0){
        document.getElementById(name+"_body").innerHTML = "<center>" + document.getElementById(name+"_body").innerHTML + "None" + "</center><br>";
    }
    
    document.getElementById(name+"_available").innerHTML = available;
    if(self.hideAvailable){
        document.getElementById(name+"_available").innerHTML = " ";
        document.getElementById(name+"_resourceUnit").innerHTML = "<div class='bot_available' style='color:darkgrey'>Searching For: " + (self.date.getMonth()+1) + "-" + self.date.getDate() + "-" + self.date.getFullYear() + "</div>";
    }

    function checkException(property) {
        exceptions = property.split("_");
        valid = true;
        for (exception in exceptions) {
            if(exceptions[exception] === monthEndDay || exceptions[exception] === day || exceptions[exception] === businessDay) {
                valid = false;
            }
        }
        if(valid){
            property = exceptions[0].split("EXCEPT")[0];
        } else {
            property = "Not Valid";
        }
        return property;
    }

    function checkWeekNumber(property) {
        property = property.split("_");
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayCounter = 0;
        let result = false;
        while(firstDay.getDate() <= date.getDate()){
            if(days[firstDay.getDay()] === property[1]){
                dayCounter=dayCounter+1;
            }
            firstDay.setDate(firstDay.getDate()+1);
        }
        if(dayCounter === 1 && property[0] === "FIRST" && property[1] === days[date.getDay()]){
            result = true;
        }
        else if(dayCounter === 2 && property[0] === "SECOND" && property[1] === days[date.getDay()]){
            result = true;
        }
        else if(dayCounter === 3 && property[0] === "THIRD" && property[1] === days[date.getDay()]){
            result = true;
        }
        else if(dayCounter === 4 && property[0] === "FOURTH" && property[1] === days[date.getDay()]){
            result = true;
        }
        else if(dayCounter === 5 && property[0] === "FIFTH" && property[1] === days[date.getDay()]){
            result = true;
        }
        return result;
    }

    function checkToSpan(property){
        span = property.split("_");
        span[1] = span[2];
        span.pop();
        let count = 0;
        let firstElement = span[0];
        let lastElement = span[1];
        let dayFormat = firstElement.substring(0, firstElement.indexOf("day")) + "day";
        firstElement = Number(firstElement.split("day").pop().replace("N","-"));
        lastElement = Number(lastElement.split("day").pop().replace("N","-"));
        while(firstElement <= lastElement) {
            span[count] = dayFormat + String(firstElement).replace("-","N");
            count++;
            firstElement++;
        }
        return span;
    }
	
	function checkAndSpan(property){
        span = property.split("_and_");
        return span;
    }
}