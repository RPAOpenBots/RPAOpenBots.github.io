/* 
 *  LAST UPDATED: 08/01/2019 
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
 *	-----------------------------------------------------------
 *	[0] element will always be the name of the process. 
 *	If multiple processes run the same calendar coding on the same bot; list processes with following notation:
 *		- "Process1:*time1*time2*;Process2*time3*"
 */ 


self.botSched = function botSched(){

    //CBIGDC_PBOTZ901
    self.CBIGDCxPBOTZ901 = {
		dailyEXCEPT_MEday2_MEday3_MEday4_MEday5: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		Sunday:             ["Manual JE",14,15,16,17,18,19,20,21,22,23],
        MEday2:             ["Manual JE",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    }

    //CBIGDC_PBOTZ902
    self.CBIGDCxPBOTZ902 = {
		Tuesday:            ["Sox Term",18],
        MEdayN3_to_MEdayN2: ["JE Posting - Non Prod",10,11,12,13,14,15,16,17],
        day1:               ["Tax Compliance",7,8,9,14,15,16,17,18,19,20,21],
        day2:               ["Tax Compliance",3,4,5,6,7,8,9,10,11],
		daily:              ["JDA In-Transit",23]
    }

    //CBIGDC_PBOTZ903
    self.CBIGDCxPBOTZ903 = {
        Monday:             ["AP Payment",6,9,10,11],
        Tuesday:            ["AP Payment",9],
        Wednesday:          ["AP Payment",6,9,10,11],
        Thursday:           ["AP Payment",9],
		Friday:             ["AP Payment",9],
        MEday3_to_MEday5:   ["HFM",8,17],
		MEday6:             ["HFM",8],
		daily:	            ["AP Morning Balances",5,6]
    }
	
	//CBIGDC_PBOTZ904
	self.CBIGDCxPBOTZ904 = {
		Wednesday:          ["IT - AD Reconciliation",12],
        MEday1:             ["IC Non-Prod Rec",2,3,4,5,6,18,19,20,21,22],
		MEday2:             ["VAT Setup",23],
		MEday3:             ["VAT Main Job:*14*15*16*17*18*19*20*;IC Ops:*1*2*",1,2,14,15,16,17,18,19,20],
		daily:              ["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13]
	}

	//CBIGDC_PBOTZ960
	self.CBIGDCxPBOTZ960 = {
	}

    //CBITDC_PBOTZ901
    self.CBITDCxPBOTZ901 = {
        Tuesday:            ["Data Term Rec",2,3,4,5,6,9],
        MEday1:             ["IC Product Rec",10,11,12,13,22,23],
        MEday1_to_MEday2:   ["Cash Account Rec",14],
		MEday4:             ["Cash Account Rec - Blackline",8],
		daily:              ["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*",1,7,12,16,21]
    }

    //CBITDC_PBOTZ902
    self.CBITDCxPBOTZ902 = {
        daily:              ["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17],
		MEdayN2_to_MEday5:  ["FPA - Plan Forecast",6,7],
    }

    //CBITDC_PBOTZ903
    self.CBITDCxPBOTZ903 = {
        Friday:             ["IT-Proj Cost Calc",12],
        Saturday:           ["Approved Price Block",6,9,11,14,16,18],
        daily:              ["Approved Price Block:*6*9*11*14*16*18*;Job Cost Setup:*22*23*",6,9,11,14,16,18,22,23],
        MEdayN5_to_MEdayN1: ["Capitilization of Projects",2,3,4,5],
    }
	
	//CBITDC_PBOTZ904
    self.CBITDCxPBOTZ904 = {
		Monday:             ["SnM Program Balances",3,4],
		Tuesday:            ["Report Assembly",13,14,15,16],
		daily:              ["Balance Sheet Hedging:*5*6*;Daily S&D:*8*9*10*",5,6,8,9,10]
	}
	
	//CBITDC_PBOTZ960
	self.CBITDCxPBOTZ960 = {
	}

}