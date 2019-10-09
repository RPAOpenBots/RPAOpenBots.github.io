/*
*  Function()
*  Convert the day of the month to the calendar day. 
*/
function convertDayToBusinessDay(today){
    if(today>=1 && today<=TURNINGPOINT){
        businessDay = "day" + today;
    } else {
        businessDay = "dayN" + (lastDayOfMonth - today  + 1);
    }
}