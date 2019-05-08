/*
*  Function()
*  Print bots schedules to the screen
*/
function printToScreen(bot, name){
    var isTodayBusinessDay = isBusinessDay(new Date());
    convertDayToBusinessDay(today);
    if(isBusinessDay(date)){ convertDayToMonthEndDay(date); }
    else{ self.monthEndDay="" }
    var available = "Nothing Currently Scheduled";
    document.getElementById(name+"_dupe").innerHTML = " ";
    
    //remove days other than today 
    for (var property in bot) {
        if (bot.hasOwnProperty(property) && businessDay != property && property.startsWith("day") && property != "daily") {
            delete bot[property];
        }
        if(bot.hasOwnProperty(property) && businessDay != property && property != day && property != "daily" && property != monthEndDay){
            delete bot[property];
        }
    }
    
    //print remaining days
    var outputs = [];
    for (var property in bot) {
        if (bot.hasOwnProperty(property)){
            for (value in bot[property]){
                if(bot[property][value]===hour){
                    available = " ";
                }
                if(!outputs.includes(moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A'))){
                    outputs.push(moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A'));
                } else {
                    document.getElementById(name+"_dupe").innerHTML = 
                    document.getElementById(name+"_dupe").innerHTML +
                    "Schedule Overlap at: " + moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A') + "</br>";
                }
                bot[property][value] = moment(bot[property][value] + ":00:00", 'HH:mm').format('h:mm A');
            }
        }
    }

    //sort times earliest -> latest
    outputs.sort(function (a, b) {
        return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
    });

    //set elements for schedules 
    document.getElementById(name+"_title").innerHTML = "<center><strong>"+name+":</strong></center> <br>"
    for (var i=0; i<outputs.length; i++) {
        var color = "0 0 0px black, 0 0 0px black";
        if(outputs[i] === moment(hour + ":00:00", 'HH:mm').format('h:mm A') && !hideAvailable){
            color = "0 0 2px red, 0 0 1px black";
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