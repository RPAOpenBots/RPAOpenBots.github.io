/*
*  Function()
*  Convert the day of the month to the month end day.
*/
function convertDayToMonthEndDay(date){
    dayCounter = 1; 
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var firstDay = new Date(date.getFullYear(), date.getMonth(), dayCounter);
    var monthEndDays = [];
    var totalEndDays = [];
    var monthEndBusinessDays = [];
    var totalMonthEndBusinessDays = [];
    var passedToday = false;

    while(String(firstDay) != String(lastDay)){
        firstDay = new Date(date.getFullYear(), date.getMonth(), dayCounter);
        if(!passedToday){
            monthEndDays.push(firstDay);
        }
        totalEndDays.push(firstDay);
        if(dayCounter===today){
            passedToday = true;
        }
        dayCounter++;
    }    

    for(var i=0; i<monthEndDays.length; i++){
        if(isBusinessDay(monthEndDays[i])){
            monthEndBusinessDays.push(monthEndDays[i])
        }
    }

    for(var i=0; i<totalEndDays.length; i++){
        if(isBusinessDay(totalEndDays[i])){
            totalMonthEndBusinessDays.push(totalEndDays[i])
        }
    }
    
    monthEndDay = "MEday" + (monthEndBusinessDays.length);
    if(today > TURNINGPOINT){        
        lastDay = totalEndDays[totalEndDays.length-1].getDate();
        dayCounter = 1;
        var monthEndDayCounter = 1; 
        while(lastDay > today){
            if(isBusinessDay(totalEndDays[totalEndDays.length-monthEndDayCounter])){
                dayCounter++;
            }
            monthEndDayCounter++;
            lastDay--;
        }
        monthEndDay = "MEdayN" + dayCounter;
    }
}