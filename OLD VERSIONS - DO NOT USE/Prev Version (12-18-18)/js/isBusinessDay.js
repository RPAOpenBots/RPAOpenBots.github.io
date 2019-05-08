/*
*  Function()
*  Check if passed in day is weekend or holiday 
*/
function isBusinessDay(dayToCheck){
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = dayToCheck;
var todayCheck = dayToCheck.getDate();
var dayCheck = self.weekday[dayToCheck.getDay()];
var monthName = monthNames[d.getMonth()];

/*
 * ALL THE BUSINESS DAY LOGIC IS BELOW!
 */
// check if weekend
if(dayCheck === "Saturday" || dayCheck === "Sunday"){
    return false;
}

// check if New Year's Day
if (monthName === "January" && todayCheck === 1) {
    return false;
}

// check if Christmas
if (monthName === "December" && todayCheck === 25) {
    return false;
}

// check if 4th of July
if (monthName === "July" && todayCheck === 4) {
    return false;
}

// check Memorial Day (last Monday of May)
if (monthName === "May" && dayCheck === "Monday" && todayCheck > (31 - 7) ) {
    return false;
}

// check Labor Day (1st Monday of September)
if (monthName === "September" && todayCheck <= 7 && dayCheck === "Monday") {
    return false;
}

    // check Thanksgiving (Thursday of November from 22nd-28th)
    if (monthName === "November"&& (todayCheck >= 22 && todayCheck <= 28) && dayCheck === "Thursday") {
    return false;
}

// check Veterans Day (November 11)
if (monthName === "November" && todayCheck === 11) {
    return false;
}

// If nothing else, return true
return true;
}