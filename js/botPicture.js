
self.botPicture = function botPicture(sched){


	// **FOR NEW BOT**
	// CHANGE LINE BELOW FOR NEW BOT
	let BOT = sched;
	
	self.sched = "<table id='bot'><tr><th></th><th></th><th>12am</th><th>1am</th><th>2am</th><th>3am</th><th>4am</th><th>5am</th><th>6am</th><th>7am</th><th>8am</th><th>9am</th><th>10am</th><th>11am</th><th>12pm</th><th>1pm</th><th>2pm</th><th>3pm</th><th>4pm</th><th>5pm</th><th>6pm</th><th>7pm</th><th>8pm</th><th>9pm</th><th>10pm</th><th>11pm</th></tr>"
	for (property in BOT){
		let splitProcesses = "";
		let doubleSplit = "";
		let spaces = "";
		if(BOT[property][0].includes("*")){
			console.log(BOT[property][0])
			splitProcesses = BOT[property][0].split(";");
			let count = 0;
			for (process in splitProcesses) {
				count++;
				doubleSplit = splitProcesses[process].split("*");
				doubleSplit[0] = doubleSplit[0].split(":").join("");
				doubleSplit.pop();
				for (time in doubleSplit) {
					if(time!="0"){
						doubleSplit[time]=Number(doubleSplit[time]);
					}
				}
				for (var i=0 ; i < count ; i++) {
					spaces += " ";
				}
				BOT[property + spaces] = doubleSplit;
			}
			delete BOT[property];
		}
	}
	for (property in BOT){
		let splitProcesses = "";
		let doubleSplit = "";
		if(BOT[property][0].includes("*")){
			console.log(BOT[property][0])
			splitProcesses = BOT[property][0].split(";");
			let count = 0;
			for (process in splitProcesses) {
				count++;
				doubleSplit = splitProcesses[process].split("*");
				doubleSplit[0] = doubleSplit[0].split(":").join("");
				doubleSplit.pop();
				for (time in doubleSplit) {
					if(time!="0"){
						doubleSplit[time]=Number(doubleSplit[time]);
					}
				}
				BOT[property + "(" + count + ")"] = doubleSplit;
			}
			delete BOT[property];
			continue;
		}
		for (time in BOT[property]){
			
			//Format Name
			new_property = property;
			new_property = new_property.split("FIRST").join("1st");
			new_property = new_property.split("SECOND").join("2nd");
			new_property = new_property.split("THIRD").join("3rd");
			new_property = new_property.split("FOURTH").join("4th");
			new_property = new_property.split("FIFTH").join("5th");
			new_property = new_property.split("Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday").join("Daily & Weekend");
			new_property = new_property.split("_and_").join("/");
			new_property = new_property.split("daily").join("Daily");
			new_property = new_property.split("EXCEPT").join(" Except ");
			new_property = new_property.split("MEday").join("Close Day ");
			new_property = new_property.split("N").join("-");
			new_property = new_property.split("_").join(" ");
			if(new_property.length <= 5){new_property = new_property.split("day").join("Day ");}
		
			//Process Name
			if(time === "0"){
				self.sched += "<tr><td>"+BOT[property][time]+"</td>";
				self.sched += "<td>"+new_property+"</td>";
			}
		}
		let counter = 0;
		for (var i=0 ; i < 24 ; i++){
			// IN SCHEDULE
			if(BOT[property][counter+1] !== undefined && BOT[property][counter+1] === i){
				// IF IS RUNNING TODAY
				if(isTimeToday(property.trim())){
					if (i===0 || i===1 || i===2 || i===23) {
						if(Number(new Date().getHours())===i){
							self.sched += "<td class='stripes'><center>*</center></td>";
						} else {
							self.sched += "<td class='color_it_now'><center>*</center></td>";
						}
					} else {
						if(Number(new Date().getHours())===i){
							self.sched += "<td class='stripes'></td>";
						} else {
							self.sched += "<td class='color_it_now'></td>";
						}
					}
				} else {
					if (i===0 || i===1 || i===2 || i===23) {
						self.sched += "<td class='color_it'><center>*</center></td>";
					} else {
						self.sched += "<td class='color_it'></td>";
					}
				}
				counter++;
			// NOT IN SCHEDULE
			} else {
				if (i===0 || i===1 || i===2 || i===23) {
					self.sched += "<td><center>*</center></td>";
				} else {
					self.sched += "<td></td>";
				}
			}
		}	
		self.sched += "</tr>"
	}
	self.sched += "</table>"
	return self.sched;

	function isTimeToday(property){
		let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		date = new Date(localStorage.getItem("date"));
		//Translate 'EXCEPT' dates 
		if(property.includes("EXCEPT")){
			return checkException(property);
		} else if(property.includes("_and_")){
            return checkAndSpan(property);
        } else if (property.includes("FIRST") || property.includes("SECOND") || property.includes("THIRD") || property.includes("FOURTH") || property.includes("FIFTH")) {
			return checkWeekNumber(property);
		} else if(property.includes("_to_")){
            return checkToSpan(property);
        } else if(property === days[date.getDay()] || (property === "daily" && days[date.getDay()] != "Saturday"  && days[date.getDay()] != "Sunday") || property === localStorage.getItem("monthEndDay") || property === localStorage.getItem("businessDay")){
			return true;
		}
		return false;
	}
	function checkException(property) {
		exceptions = property.split("_");
		let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		date = new Date(localStorage.getItem("date"));
        valid = true;
        for (exception in exceptions) {
            if(exceptions[exception] === localStorage.getItem("monthEndDay") || exceptions[exception] === localStorage.getItem("day") || exceptions[exception] === localStorage.getItem("businessDay")) {
                valid = false;
            }
        }
        if(valid){
			if(exceptions[0].split("EXCEPT")[0] === "daily" && days[date.getDay()] != "Sunday" && days[date.getDay()] != "Saturday"){
				property = true;
			} else {
				property = false;
			}
        } else {
            property = false;
        }
        return property;
	}
	function checkWeekNumber(property) {
		property = property.split("_");
		date = new Date(localStorage.getItem("date"));
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
        for (time in span){
			if(span[time]===localStorage.getItem("businessDay") || span[time]===localStorage.getItem("monthEndDay")){
				return true;
			}
		}
		return false;
    }
	function checkAndSpan(property){
		let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		date = new Date(localStorage.getItem("date"));
        span = property.split("_and_");
		for (time in span){
			if(span[time]===localStorage.getItem("businessDay") || span[time]===localStorage.getItem("monthEndDay") || span[time]=== days[date.getDay()] || checkWeekNumber(span[time])){
				return true;
			}
		}
        return false;
    }
}