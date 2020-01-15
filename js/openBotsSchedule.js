/* 
 *  LAST UPDATED: 10/17/2019 
 *
 *  Below schedule is in military time. 
 *	-----------------------------------------------------------
 *	CALENDAR CODING: 	
 *  Calendar day 1 = "day1" 
 *  Calendar day -1 = "dayN1" 
 *  Month End day 1 = "MEday1" 
 *  Month End day -1 = "MEdayN1" 
 *  Daily = "daily" (daily is week days Mon-Fri)
 *  Monday, Tuesday, etc... = "Monday", "Tuesday", etc... 
 *  Every day except = example: "dailyEXCEPT_MEday1"
 *  1st/2nd/3rd/4th/5th day = "FIRST_Monday","THIRD_THURSDAY",etc...
 *  date to date = "MEdayN3_to_MEdayN2", etc...
 *	date and date = "Monday_and_Tuesday_and_Wednesday" or "MEday1_and_MEday2", etc...
 *	-----------------------------------------------------------
 *	[0] element will always be the name of the process. 
 *	If multiple processes run the same calendar coding on the same bot; list processes with following notation:
 *		- "Process1:*time1*time2*;Process2*time3*"
 */ 


self.botSched = function botSched(){

    //CBIGDC_PBOTZ901
    self.CBIGDCxPBOTZ901 = {
        dailyEXCEPT_MEday3_MEday4_MEday5:
			["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		Saturday_and_Sunday:             						
			["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    }

    //CBIGDC_PBOTZ902
    self.CBIGDCxPBOTZ902 = {
		Tuesday:
			["Sox Term",18],
        MEdayN3_to_MEdayN2:
			["JE Posting - Non Prod",10,11,12,13,14,15,16,17],
        day1:
			["Tax Compliance",7,8,9,14,15,16,17,18,19,20,21],
        day2:
			["Tax Compliance",3,4,5,6,7,8,9,10,11],
		daily:
			["JDA In-Transit",23]
    }

    //CBIGDC_PBOTZ903
    self.CBIGDCxPBOTZ903 = {
        Monday_and_Wednesday:
			["AP Payment",6,9,10,11],
        Tuesday_and_Thursday_and_Friday:
			["AP Payment",9],
        MEday3_to_MEday5:
			["HFM",8,17],
		MEday6:
			["HFM",8],
		daily:
			["AP Morning Balances",5,6]
    }
	
	//CBIGDC_PBOTZ904
	self.CBIGDCxPBOTZ904 = {
		FIRST_Wednesday:
			["IT - AD Reconciliation",12],
        MEday1:
			["IC Non-Prod Rec",2,3,4,5,6,18,19,20,21,22],
		daily:
			["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13]
	}

	//CBIGDC_PBOTZ960
	self.CBIGDCxPBOTZ960 = {
	}

	//CBIGDCxPBOTZ961
	self.CBIGDCxPBOTZ961 = {
		daily:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		Saturday_and_Sunday:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
	//CBIGDCxPBOTZ962
	self.CBIGDCxPBOTZ962 = {
		daily:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		Saturday_and_Sunday:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
    //CBITDC_PBOTZ901
    self.CBITDCxPBOTZ901 = {
        Tuesday:
			["Data Term Rec",2,3,4,5,6,9],
        MEday1:
			["IC Product Rec:*10*11*12*13*22*23*",10,11,12,13,22,23],
		daily:              
			["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*",1,7,12,16,21]
    }

    //CBITDC_PBOTZ902
    self.CBITDCxPBOTZ902 = {
        daily:              
			["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17],
		MEdayN2_to_MEday5:  
			["FPA - Plan Forecast",6,7],
    }

    //CBITDC_PBOTZ903
    self.CBITDCxPBOTZ903 = {
        SECOND_Friday_and_FOURTH_Friday:      
			["IT-Proj Cost Calc",12,13],
		Monday: 
			["Approved Price Block",9,11,14,16,18],
		Tuesday_and_Wednesday_and_Thursday_and_Friday:
			["Approved Price Block",6,7,9,11,14,16,18],
		Saturday:           
			["Approved Price Block",6,7],
        daily:              
			["Job Cost Setup",22,23],
        
    }
	
	//CBITDC_PBOTZ904
    self.CBITDCxPBOTZ904 = {
		Tuesday:            
			["Report Assembly",13,14,15,16],
		Monday_and_Wednesday:				
			["Telecom Ariba Upload",14,15],
		daily:              
			["Daily S&D:*8*9*10*;S4 - Glass Pro Forma:*7*22*;S4 - Lot Clearing:*23*",7,8,9,10,22,23],
		Saturday_and_Sunday:              
			["S4 - Glass Pro Forma:*7*22*;S4 - Lot Clearing:*23*",7,22,23],
		MEday3:
			["S4 - VAT",14,15,16,17],
		MEday5:
			["FPA - TE Report",11,12,13,14,15,16]
	}
	
	//CBITDC_PBOTZ960
	self.CBITDCxPBOTZ960 = {
		Monday:             
			["SnM Program Balances",8,9],
		Saturday_and_Sunday:				
			["Tax - VIM Part 1:*10*11*14*15*18*19*;Tax - VIM Part 2:*12*13*16*17*20*21*",10,11,12,13,14,15,16,17,18,19,20,21],
		daily:				
			["Tax - VIM Part 1:*10*11*14*15*18*19*;Tax - VIM Part 2:*12*13*16*17*20*21*",10,11,12,13,14,15,16,17,18,19,20,21]
	}

	//CBITDCxPBOTZ961
	self.CBITDCxPBOTZ961 = {
		daily:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		Saturday_and_Sunday:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	//CBITDCxPBOTZ962
	self.CBITDCxPBOTZ962 = {
		daily:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		Saturday_and_Sunday:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}


	// LIST OF BOTS - ADD HERE TO ADD A NEW BOT
	self.BOTS = {
		INFO: [
			//GDC
			{name:"CBIGDC_PBOTZ901", sched: self.CBIGDCxPBOTZ901, color: "#E0DA83"},
			{name:"CBIGDC_PBOTZ902", sched: self.CBIGDCxPBOTZ902, color: "#fb9696"},
			{name:"CBIGDC_PBOTZ903", sched: self.CBIGDCxPBOTZ903, color: "#79b8e5"},
			{name:"CBIGDC_PBOTZ904", sched: self.CBIGDCxPBOTZ904, color: "#eda84f"},
			{name:"CBIGDC_PBOTZ960", sched: self.CBIGDCxPBOTZ960, color: "#04d491"},
			{name:"CBIGDC_PBOTZ961", sched: self.CBIGDCxPBOTZ961, color: "#f15454"},
			{name:"CBIGDC_PBOTZ962", sched: self.CBIGDCxPBOTZ962, color: "#a796b0"},
			//TDC
			{name:"CBITDC_PBOTZ901", sched: self.CBITDCxPBOTZ901, color: "#8fc568"},
			{name:"CBITDC_PBOTZ902", sched: self.CBITDCxPBOTZ902, color: "#6e7275"},
			{name:"CBITDC_PBOTZ903", sched: self.CBITDCxPBOTZ903, color: "#b8c0c5"},
			{name:"CBITDC_PBOTZ904", sched: self.CBITDCxPBOTZ904, color: "#2eaba7"},
			{name:"CBITDC_PBOTZ960", sched: self.CBITDCxPBOTZ960, color: "#af95e2"},
			{name:"CBITDC_PBOTZ961", sched: self.CBITDCxPBOTZ961, color: "#95b1f1"},
			{name:"CBITDC_PBOTZ962", sched: self.CBITDCxPBOTZ962, color: "#afbaad"}
		]
	}
}