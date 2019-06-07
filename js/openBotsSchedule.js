/* 
 *  LAST UPDATED: 06/07/2019 
 *
 *  Below schedule is in military time. 
 *	-----------------------------------------------------------
 *	CALENDAR CODING: 	
 *  Calendar day 1 = "day1" 
 *  Calendar day -1 = "dayN1" 
 *  Month End day 1 = "MEday1" 
 *  Month End day -1 = "MEdayN1" 
 *  Daily = "daily"
 *  Monday, Tuesday, etc... = "Monday", "Tuesday", etc... 
 *	-----------------------------------------------------------
 *	[0] element will always be the name of the process. 
 *	If multiple processes run the same calendar coding on the same bot; list processes with following notation:
 *		- "Process1:*time1*time2*;Process2*time3*"
 */ 


self.botSched = function botSched(){

    //CBIGDC_PBOTZ901
    self.CBIGDCxPBOTZ901 = {
        MEday6:	  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEday7:	  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday8:	  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday9:	  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday10:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],  
		MEday11:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday12:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEday13:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEday14:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday15:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEday16:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday17:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEdayN17: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN16: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN15: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN14: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEdayN13: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEdayN12: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN11: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN10: ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN9:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN8:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		MEdayN7:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN6:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN5:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN4:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN3:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN2:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEdayN1:  ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		MEday1:   ["Manual JE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        MEday2:   ["Manual JE",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    }

    //CBIGDC_PBOTZ902
    self.CBIGDCxPBOTZ902 = {
        MEdayN3:   ["JE Posting - Non Prod",10,11,12,13,14,15,16,17],
        MEdayN2:   ["JE Posting - Non Prod",10,11,12,13,14,15,16,17],
        day1:      ["Tax Compliance",7,8,9,14,15,16,17,18,19,20,21],
        day2:      ["Tax Compliance",3,4,5,6,7,8,9,10,11],
		Monday:    ["JDA In-Transit",23],
		Tuesday:   ["Sox Term:*18*;JDA In-Transit:*23*",18,23],
		Wednesday: ["JDA In-Transit",23],
		Thursday:  ["JDA In-Transit",23],
		Friday:    ["JDA In-Transit",23]
    }

    //CBIGDC_PBOTZ903
    self.CBIGDCxPBOTZ903 = {
        Monday:    ["AP Payment:*6*9*10*11*;AP Morning Balances:*5*6*",5,6,6,9,10,11],
        Tuesday:   ["AP Payment:*9*;AP Morning Balances:*5*6*",5,6,9],
        Wednesday: ["AP Payment:*6*9*10*11*;AP Morning Balances:*5*6*",5,6,6,9,10,11],
        Thursday:  ["AP Payment:*9*;AP Morning Balances:*5*6*",5,6,9],
        Friday:    ["AP Payment:*9*;AP Morning Balances:*5*6*",5,6,9],
        MEday3:    ["HFM",8,17],
        MEday4:    ["HFM",8,17],
        MEday5:    ["HFM",8,17],
        MEday6:    ["HFM",8]
    }
	
	//CBIGDC_PBOTZ904
	self.CBIGDCxPBOTZ904 = {
        Monday:    ["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13],
		Tuesday:   ["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13],
		Wednesday: ["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13],
		Thursday:  ["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13],
		Friday:    ["OMR:*7*13*;Weather Forcast:*9*;Telecom Invoices:*10*11*",7,9,10,11,13],
        MEday1:    ["IC Non-Prod Rec",2,3,4,5,6,18,19,20,21,22],
		MEday2:    ["VAT Setup",23],
		MEday3:    ["VAT Main Job:*14*15*16*17*18*19*20*;IC Ops:*1*2*",1,2,14,15,16,17,18,19,20]
	}

	//CBIGDC_PBOTZ960
	self.CBIGDCxPBOTZ960 = {
	}

    //CBITDC_PBOTZ901
    self.CBITDCxPBOTZ901 = {
		Monday:    ["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*",1,7,12,16,21],
        Tuesday:   ["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*;Data Term Rec:*2*3*4*5*6*9*",1,2,3,4,5,6,7,9,12,16,21],
		Wednesday: ["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*",1,7,12,16,21],
		Thursday:  ["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*",1,7,12,16,21],
		Friday:    ["Credential Checker:*1*;Order Entry - Samples:*7*12*16*21*",1,7,12,16,21],
        MEday1:    ["IC Product Rec:*10*11*12*13*22*23*;Cash Account Rec:*14*",10,11,12,13,14,22,23],
        MEday2:    ["Cash Account Rec",14],
        MEday4:    ["Cash Account Rec - Blackline",8]
    }

    //CBITDC_PBOTZ902
    self.CBITDCxPBOTZ902 = {
        Monday:    ["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17],
		Tuesday:   ["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17],
		Wednesday: ["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17],
		Thursday:  ["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17],
		Friday:    ["Ariba Contact Updates:*15*16*17*;Employee Master Updates:*11*12*13*;New Hire Notification:*14*;Weekly/Monthly S&D:*8*9*;Ops Fin Dep Exp:*5*",5,8,9,11,12,13,14,15,16,17]
    }

    //CBITDC_PBOTZ903
    self.CBITDCxPBOTZ903 = {
        Saturday:  ["Approved Price Block",6,9,11,14,16,18],
		Monday:    ["Approved Price Block:*6*9*11*14*16*18*;Job Cost Setup:*22*23*",6,9,11,14,16,18,22,23],
		Tuesday:   ["Approved Price Block:*6*9*11*14*16*18*;Job Cost Setup:*22*23*",6,9,11,14,16,18,22,23],
		Wednesday: ["Approved Price Block:*6*9*11*14*16*18*;Job Cost Setup:*22*23*",6,9,11,14,16,18,22,23],
		Thursday:  ["Approved Price Block:*6*9*11*14*16*18*;Job Cost Setup:*22*23*",6,9,11,14,16,18,22,23],
		Friday:    ["Approved Price Block:*6*9*11*14*16*18*;IT-Proj Cost Calc:*12*;Job Cost Setup:*22*23*",6,9,11,12,14,16,18,22,23],
		MEdayN5:   ["Capitilization of Projects",2,3,4,5],
        MEdayN4:   ["Capitilization of Projects",2,3,4,5],
        MEdayN3:   ["Capitilization of Projects",2,3,4,5],
        MEdayN2:   ["Capitilization of Projects",2,3,4,5],
        MEdayN1:   ["Capitilization of Projects",2,3,4,5]
    }
	
	//CBITDC_PBOTZ904
    self.CBITDCxPBOTZ904 = {
		Monday:    ["Balance Sheet Hedging:*5*6*;Daily S&D:*8*9*;SnM Program Balances:*3*4*",3,4,5,6,8,9],
		Tuesday:   ["Balance Sheet Hedging:*5*6*;Daily S&D:*8*9*;SnM Program Balances:*3*4*;Report Assembly:*13*14*15*16*",3,4,5,6,8,9,13,14,15,16],
		Wednesday: ["Balance Sheet Hedging:*5*6*;Daily S&D:*8*9*;SnM Program Balances:*3*4*",3,4,5,6,8,9],
		Thursday:  ["Balance Sheet Hedging:*5*6*;Daily S&D:*8*9*;SnM Program Balances:*3*4*",3,4,5,6,8,9],
		Friday:    ["Balance Sheet Hedging:*5*6*;Daily S&D:*8*9*;SnM Program Balances:*3*4*",3,4,5,6,8,9]
	}
	
	//CBITDC_PBOTZ960
	self.CBITDCxPBOTZ960 = {
	}

}