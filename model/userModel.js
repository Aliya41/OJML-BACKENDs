const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
employeeCode : String,
firstName : String,
lastName : String,
dob : String,
gender : String,
nationality : String,
fullPermanentAddress : String,
currentAddress : String,
city : String,
postcode_Pincode : String,
emailAddress : String,
countryCode : String,
referenceContactNumber : String,
contactNumber : String,
bankName : String,
accountNumber : String,
sortCode_IFSCCode : String,
emergencyContactFullName : String,
relationship : String,
emergencyContactsPhoneNumber : String,
companyName : String,
positionHeld : String,
employementDates : String,
reasonForLeaving : String,
secondCompanyName : String,
secondPositionHeld : String,
secondEmployementDates : String,
secondReasonForLeaving : String,
paySlip : String,
degreeDiplomaPicture : String,
nameOfDegreeDiploma : String,
photo : String,
referenceName : String,
referenceCompany : String,
referencePosition : String,
referenceEmail : String,
secondReferenceName : String,
secondReferenceCompany : String,
secondReferencePosition : String,
secondReferenceContactNumber : String,
secondReferenceEmail : String,
nationalInsuranceNumber : String,
taxCode : String,
signature : String,
date : String,
     
    });


module.exports = mongoose.model("Users" , userSchema);