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
    }

    //CBIGDC_PBOTZ902
    self.CBIGDCxPBOTZ902 = {
		Tuesday:
			["Sox Term",18],
		MEday3_to_MEday5:
			["HFM",8,17],
		MEday6:
			["HFM",8],
    }

    //CBIGDC_PBOTZ903
    self.CBIGDCxPBOTZ903 = {
		Monday_and_Friday:
			["IT - OIM",8]
    }
	
	//CBIGDC_PBOTZ904
	self.CBIGDCxPBOTZ904 = {
		FIRST_Wednesday:
			["IT - AD Reconciliation",12],
		MEday3:
			["S4 - VAT",14,15,16,17],
		daily:
			["Weather Forcast:*9*;Telecom Invoices:*10*11*;Penny PO:*8*14*15*16*",8,9,10,11,14,15,16]
	}

	//CBIGDC_PBOTZ960
	self.CBIGDCxPBOTZ960 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["Patrol Bot",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}

	//CBIGDCxPBOTZ961
	self.CBIGDCxPBOTZ961 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
	//CBIGDCxPBOTZ962
	self.CBIGDCxPBOTZ962 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["TMS - Beer Loads",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
	//CBIGDCxPBOTZ963
	self.CBIGDCxPBOTZ963 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["Patrol Bot - Listener",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
	//CBIGDCxPBOTZ964
	self.CBIGDCxPBOTZ964 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["Patrol Bot - Listener",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
    //CBITDC_PBOTZ901
    self.CBITDCxPBOTZ901 = {
        Tuesday:
			["Data Term Rec",9],
		MEday3:
			["Supplier Scorecard",14,15],
		daily:              
			["Credential Checker:*1*;Legal Files Query:*8*",1,8]
    }

    //CBITDC_PBOTZ902
    self.CBITDCxPBOTZ902 = {
        daily:              
			["New Hire Notification",14],
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["Legal FET",0,1,22,23],
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday:
			["S4 - Delivery Priority Mass Update",8,9]
    }

    //CBITDC_PBOTZ903
    self.CBITDCxPBOTZ903 = {
        daily:              
			["FC- WorkFlowGen",12,13],
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday:
			["S4 - Order Manage: Dupe Check",8,9]
    }
	
	//CBITDC_PBOTZ904
    self.CBITDCxPBOTZ904 = {
		Tuesday:            
			["Report Assembly",13,14,15,16],
		Monday_and_Wednesday:				
			["Telecom Ariba Upload",14,15],
		daily:              
			["Daily S&D:*8*9*10*;BSH:*5*6*",5,6,8,9,10],
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:              
			["S4 - Glass Pro Forma:*7*22*;S4 - Lot Clearing:*23*",7,22,23],
	}
	
	//CBITDC_PBOTZ960
	self.CBITDCxPBOTZ960 = {
		Tuesday:
			["Data Term Rec",1,2,3,4,5,6,7,8],
		Wednesday:
			["HR - PTO Delegations",14],
		MEdayN1:
			["IT - Cell Data",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
		day1_and_day3_and_day5_and_day7_and_day9_and_day11_and_day13:
			["Tax - Foreign Trade",7]
	}

	//CBITDCxPBOTZ961
	self.CBITDCxPBOTZ961 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["QA - WSP PIX",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	}
	
	//CBITDCxPBOTZ962
	self.CBITDCxPBOTZ962 = {
		Monday_and_Tuesday_and_Wednesday_and_Thursday_and_Friday_and_Saturday_and_Sunday:
			["Legal - Sweeps:*9*10*;Warehouse Rec:*0*1*23*",9,10,0,1,23],
		Monday:
			["Payroll - NHA",11],
		Tuesday:
			["Shift Loading",8]
			
	}

	//CBITDCxPBOTZ963
	self.CBITDCxPBOTZ963 = {
	}
	
	//CBITDCxPBOTZ964
	self.CBITDCxPBOTZ964 = {
		daily:
			["D&A - Dist Portal",9,10,11],
	}

	// LIST OF BOTS - ADD HERE TO ADD A NEW BOT
	self.BOTS = {
		INFO: [
			//GDC
			{name:"CBIGDC_PBOTZ901", sched: self.CBIGDCxPBOTZ901, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ902", sched: self.CBIGDCxPBOTZ902, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ903", sched: self.CBIGDCxPBOTZ903, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ904", sched: self.CBIGDCxPBOTZ904, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ960", sched: self.CBIGDCxPBOTZ960, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ961", sched: self.CBIGDCxPBOTZ961, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ962", sched: self.CBIGDCxPBOTZ962, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ963", sched: self.CBIGDCxPBOTZ963, color: "#5bbce3"},
			{name:"CBIGDC_PBOTZ964", sched: self.CBIGDCxPBOTZ964, color: "#5bbce3"},
			//TDC
			{name:"CBITDC_PBOTZ901", sched: self.CBITDCxPBOTZ901, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ902", sched: self.CBITDCxPBOTZ902, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ903", sched: self.CBITDCxPBOTZ903, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ904", sched: self.CBITDCxPBOTZ904, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ960", sched: self.CBITDCxPBOTZ960, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ961", sched: self.CBITDCxPBOTZ961, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ962", sched: self.CBITDCxPBOTZ962, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ963", sched: self.CBITDCxPBOTZ963, color: "#5bbce3"},
			{name:"CBITDC_PBOTZ964", sched: self.CBITDCxPBOTZ964, color: "#5bbce3"}
		]
	}
}