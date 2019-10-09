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
self.biz_day = "Yes";
/*
 * ALL THE BUSINESS DAY LOGIC IS BELOW!
 */
// check if weekend
if(dayCheck === "Saturday" || dayCheck === "Sunday"){
    self.biz_day = "No, Weekend.";
    return false;
}

// check if New Year's Day
if (monthName === "January" && todayCheck === 1) {
    self.biz_day = "No, New Year's Day.";
    return false;
}

// check if Christmas
if (monthName === "December" && todayCheck === 25) {
    self.biz_day = "No, Christmas Day.";
    return false;
}

// check if Christmas Eve
if (monthName === "December" && todayCheck === 24) {
    self.biz_day = "No, Christmas Eve.";
    return false;
}

// check if 4th of July
if (monthName === "July" && todayCheck === 4) {
    self.biz_day = "No, 4th of July.";
    return false;
}

// check Memorial Day (last Monday of May)
if (monthName === "May" && dayCheck === "Monday" && todayCheck > (31 - 7) ) {
    self.biz_day = "No, Memorial Day.";
    return false;
}

// check Labor Day (1st Monday of September)
if (monthName === "September" && todayCheck <= 7 && dayCheck === "Monday") {
    self.biz_day = "No, Labor Day.";
    return false;
}

// check Thanksgiving (Thursday of November from 22nd-28th)
if (monthName === "November"&& (todayCheck >= 22 && todayCheck <= 28) && dayCheck === "Thursday") {
    self.biz_day = "No, Thanksgiving.";
    return false;
}

// check Veterans Day (November 11)
if (monthName === "November" && todayCheck === 11) {
    self.biz_day = "No, Veterans Day.";
    return false;
}

// If nothing else, return true
    return true;
}