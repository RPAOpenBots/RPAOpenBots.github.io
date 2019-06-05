/*
*  Function()
*  Print bots schedules to the screen
*/
function printToScreen(bot, name){
    self.botSched();
    var isTodayBusinessDay = isBusinessDay(new Date());
    convertDayToBusinessDay(today);
    if(isBusinessDay(date)){ convertDayToMonthEndDay(date); }
    else{ self.monthEndDay="" }
    
    var available = "Nothing Currently Scheduled";
    document.getElementById(name+"_dupe").innerHTML = " ";
    self.allTimes = [];
    self.reservations = [];

    //remove days other than today 
    for (var property in bot) {
        for (i=1;i<bot[property].length;i++){
            if(!self.allTimes.includes(bot[property][i])){
                self.allTimes.push(bot[property][i]);
            }
        }
        if (bot.hasOwnProperty(property) && businessDay != property && property.startsWith("day") && property != "daily") {
            delete bot[property];
        }
        if(bot.hasOwnProperty(property) && businessDay != property && property != day && property != "daily" && property != monthEndDay){
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
                        "Schedule Overlap at: " + moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A') + "</br>";
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
                                currentProcess = "<span style='color:red'>Running: " + currentProcess[0] + "</span>";
                            }
                        }
                    } else {
                        currentProcess = "<span style='color:red'>Running: " + bot[property][value]+"</span>";
                    }
                }
            }
        }
    }

    // which processes are running today - show in modal
    if(Object.keys(bot).length === 0){
        bot.fakeprop = [[]];
    }
    for (var property in bot) {
        if(bot[property][0].includes(";")){
            bot[property][0] = "";
            for(var process in splitProcesses){
                if(bot[property][0]===""){bot[property][0] = splitProcesses[process].split(":")[0];}
                else {bot[property][0] = bot[property][0] + "<li>" + splitProcesses[process].split(":")[0]}
            }

        }
        //gdc
        if(name==="CBIGDC_PBOTZ901"){
            if(self.gdc01_runningToday===undefined){self.gdc01_runningToday="";}
            if(!self.gdc01_runningToday.includes(bot[property][0])){self.gdc01_runningToday = self.gdc01_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization01 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours01 = nonScheduledHours;
            self.reservations01 = self.reservations;
        }
        else if(name==="CBIGDC_PBOTZ902"){
            if(self.gdc02_runningToday===undefined){self.gdc02_runningToday="";}
            if(!self.gdc02_runningToday.includes(bot[property][0])){self.gdc02_runningToday = self.gdc02_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization02 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours02 = nonScheduledHours;
            self.reservations02 = self.reservations;
        }
        else if(name==="CBIGDC_PBOTZ903"){
            if(self.gdc03_runningToday===undefined){self.gdc03_runningToday="";}
            if(!self.gdc03_runningToday.includes(bot[property][0])){self.gdc03_runningToday = self.gdc03_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization03 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours03 = nonScheduledHours;
            self.reservations03 = self.reservations;
        }
        else if(name==="CBIGDC_PBOTZ904"){
            if(self.gdc04_runningToday===undefined){self.gdc04_runningToday="";}
            if(!self.gdc04_runningToday.includes(bot[property][0])){self.gdc04_runningToday = self.gdc04_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization04 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours04 = nonScheduledHours;
            self.reservations04 = self.reservations;
        }
        else if(name==="CBIGDC_PBOTZ960"){
            if(self.gdc05_runningToday===undefined){self.gdc05_runningToday="";}
            if(!self.gdc05_runningToday.includes(bot[property][0])){self.gdc05_runningToday = self.gdc05_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization05 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours05 = nonScheduledHours;
            self.reservations05 = self.reservations;
        }
        //tdc
        else if(name==="CBITDC_PBOTZ901"){
            if(self.tdc01_runningToday===undefined){self.tdc01_runningToday="";}
            if(!self.tdc01_runningToday.includes(bot[property][0])){self.tdc01_runningToday = self.tdc01_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization06 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours06 = nonScheduledHours;
            self.reservations06 = self.reservations;
        }
        else if(name==="CBITDC_PBOTZ902"){
            if(self.tdc02_runningToday===undefined){self.tdc02_runningToday="";}
            if(!self.tdc02_runningToday.includes(bot[property][0])){self.tdc02_runningToday = self.tdc02_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization07 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours07 = nonScheduledHours;
            self.reservations07 = self.reservations;
        }
        else if(name==="CBITDC_PBOTZ903"){
            if(self.tdc03_runningToday===undefined){self.tdc03_runningToday="";}
            if(!self.tdc03_runningToday.includes(bot[property][0])){self.tdc03_runningToday = self.tdc03_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization08 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours08 = nonScheduledHours;
            self.reservations08 = self.reservations;
        }
        else if(name==="CBITDC_PBOTZ904"){
            if(self.tdc04_runningToday===undefined){self.tdc04_runningToday="";}
            if(!self.tdc04_runningToday.includes(bot[property][0])){self.tdc04_runningToday = self.tdc04_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization09 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours09 = nonScheduledHours;
            self.reservations09 = self.reservations;
        }
        else if(name==="CBITDC_PBOTZ960"){
            if(self.tdc05_runningToday===undefined){self.tdc05_runningToday="";}
            if(!self.tdc05_runningToday.includes(bot[property][0])){self.tdc05_runningToday = self.tdc05_runningToday + "<li>" + bot[property][0];}
            self.bot_utilization010 = Math.round((self.allTimes.length / 24) * 100) + "%";
            self.non_sched_hours010 = nonScheduledHours;
            self.reservations010 = self.reservations;
        }
    }
    if(bot[property]===undefined){
        if(name==="CBIGDC_PBOTZ901"){self.gdc01_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBIGDC_PBOTZ902"){self.gdc02_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBIGDC_PBOTZ903"){self.gdc03_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBIGDC_PBOTZ904"){self.gdc04_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBIGDC_PBOTZ960"){self.gdc05_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBITDC_PBOTZ901"){self.tdc01_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBITDC_PBOTZ902"){self.tdc02_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBITDC_PBOTZ903"){self.tdc03_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBITDC_PBOTZ904"){self.tdc04_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
        if(name==="CBITDC_PBOTZ960"){self.tdc05_runningToday="<li>nothin runnin...  ¯\\_(ツ)_/¯"}
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
        document.getElementById(name+"_body").innerHTML = "<center style='text-shadow:" +color+"'>" + document.getElementById(name+"_body").innerHTML + outputs[i] + "</center><br>";
    }
    if(outputs.length === 0){
        document.getElementById(name+"_body").innerHTML = "<center>" + document.getElementById(name+"_body").innerHTML + "None" + "</center><br>";
    }
    
    document.getElementById(name+"_available").innerHTML = available;
    if(self.hideAvailable){
        document.getElementById(name+"_available").innerHTML = " ";
        document.getElementById(name+"_resourceUnit").innerHTML = "<div class='bot_dupe' style='color:darkgrey'>Searching For: " + (self.date.getMonth()+1) + "-" + self.date.getDate() + "-" + self.date.getFullYear() + "</div>";
    }
    
}