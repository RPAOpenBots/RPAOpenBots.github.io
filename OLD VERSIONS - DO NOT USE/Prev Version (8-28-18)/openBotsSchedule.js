/*  LAST UPDATED: 8/14/2018 
 *
 *  Schedule is in military time. 
 *  Calendar day 1 = "day1" 
 *  Calendar day -1 = "dayN1" 
 *  Month End day 1 = "MEday1" 
 *  Month End day -1 = "MEdayN1" 
 *  Daily = "daily"
 *  Monday, Tuesday, etc... = "Monday", "Tuesday", etc... 
 */ 


self.botSched = function botSched(){

    //CBIGDC_PBOTZ901
    self.CBIGDCxPBOTZ901 = {
        day5:    [24,10,11,16,17,23], 
        day4:    [24,10,11,16,17,23], 
        day3:    [24,10,11,16,17,23], 
        day2:    [24,10,11,16,17,23], 
        day1:    [24,10,11,16,17,23],
        dayN1:   [24,10,11,16,17,23], 
        dayN2:   [24,10,11,16,17,23], 
        dayN3:   [24,10,11,16,17,23], 
        dayN4:   [24,10,11,16,17,23], 
        dayN5:   [24,10,11,16,17,23], 
        dayN6:   [24,10,11,16,17,23], 
        dayN7:   [24,10,11,16,17,23],
        MEdayN6: [24,5,6,10,11,14,15,16,17,23],
        MEdayN5: [24,5,6,10,11,14,15,16,17,23],
        MEdayN4: [24,5,6,10,11,14,15,16,17,23],
        MEdayN3: [24,5,6,10,11,14,15,16,17,23],
        MEdayN2: [24,5,6,10,11,14,15,16,17,23],
        MEdayN1: [24,5,6,10,11,14,15,16,17,23],
        MEday1:  [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        MEday2:  [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    }

    //CBIGDC_PBOTZ902
    self.CBIGDCxPBOTZ902 = {
        MEdayN3: [10,11,16,17],
        MEdayN2: [10,11,16,17],
        day1:    [7,8,9,14,15,16],
        day2:    [3,4,5,6,7,8,9,10,11],
        daily:   [9]
    }

    //CBIGDC_PBOTZ903
    self.CBIGDCxPBOTZ903 = {
        Monday:    [3,9,10],
        Tuesday:   [9],
        Wednesday: [3,4,5,9,10,11],
        Thursday:  [9],
        Friday:    [3,4,5,9,10,11],
        MEday3:    [8,17],
        MEday4:    [8,17],
        MEday5:    [8,17],
        MEday6:    [8]
    }
	
	//CBIGDC_PBOTZ904
	self.CBIGDCxPBOTZ904 = {
        daily:  [7,13],
        MEday1: [2,3,4,5,6,18,19,20,21,22]
	}

    //CBITDC_PBOTZ901
    self.CBITDCxPBOTZ901 = {
        MEday1:  [10,11,14,22],
        MEday2:  [14],
        MEday4:  [8],
        daily:   [1,7,12,16,21],
        Tuesday: [2,3,4,5,6,9]
    }

    //CBITDC_PBOTZ902
    self.CBITDCxPBOTZ902 = {
        daily: [8,14,15,16,17],
        dayN5: [3],
        dayN4: [3],
        dayN3: [3],
        dayN2: [3],
        dayN1: [3]
    }

    //CBITDC_PBOTZ903
    self.CBITDCxPBOTZ903 = {
        daily: [6,9,11,14,16,18,22,23]
    }
	
	//CBITDC_PBOTZ904
    self.CBITDCxPBOTZ904 = {
    }

}