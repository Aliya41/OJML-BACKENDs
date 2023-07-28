var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')
var userModel = require("../model/userModel")


/* GET users listing. */

router.post('/fetch_all_onboard', function(req, res, next) {
  pool.query("select * from joinerform where employeeCode=?",[req.body.employeeCode],function(error,result){
   if(error)
   { console.log(error)
    res.status(500).json({status:false,message:'Server error....'})
   }
   else
   {
    res.status(200).json({status:true,data:result})
   }

  })
}); 




router.post('/add_new_onboard',upload.single('signature'), function(req, res, next) {
  console.log(req.body)
  console.log(req.file)
pool.query("insert into onboard (employeeCode, fullName, dob, gender, nationality, fullPermanentAddress, currentAddress, city, postcode_Pincode, emailAddress, countryCode, contactNumber, maritalStatus, positionOffered, dateOfJoining, department, salary, workLocation, employmentType, workSchedule, managerName, methodOfCommunication, willingToTravelForWork, goodFitForThisPosition, priorExperienceInThisField, greatestStrengths, greatestWeaknesses, memberOfAnyProfessionalOrganizationsOrAssociations, professionalCertificationsOrLicenses, careerGoals, pendingCriminalCharges, anyMedicalConditionsOrAllergiesWeShouldBeAwareOf, willingToWorkOvertimeIfNeeded, employeeHandbook, confidentialityAndNonDisclosureAgreement, acceptableUsePolicy, dataProtectionAndPrivacyPolicy, signature, date) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[ req.body.employeeCode, req.body.fullName, req.body.dob, req.body.gender, req.body.nationality, req.body.fullPermanentAddress, req.body.currentAddress, req.body.city, req.body.postcode_Pincode, req.body.emailAddress, req.body.countryCode, req.body.contactNumber, req.body.maritalStatus, req.body.positionOffered, req.body.dateOfJoining, req.body.department, req.body.salary, req.body.workLocation, req.body.employmentType, req.body.workSchedule, req.body.managerName, req.body.methodOfCommunication, req.body.willingToTravelForWork, req.body.goodFitForThisPosition, req.body.priorExperienceInThisField, req.body.greatestStrengths, req.body.greatestWeaknesses, req.body.memberOfAnyProfessionalOrganizationsOrAssociations, req.body.professionalCertificationsOrLicenses, req.body.careerGoals, req.body.pendingCriminalCharges, req.body.anyMedicalConditionsOrAllergiesWeShouldBeAwareOf, req.body.willingToWorkOvertimeIfNeeded, req.body.employeeHandbook, req.body.confidentialityAndNonDisclosureAgreement, req.body.acceptableUsePolicy, req.body.dataProtectionAndPrivacyPolicy, req.file.originalname, req.body.date],function(error,result){
 if(error)
 { console.log("xxxxx"+error)
  res.status(500).json({status:false,message:'Server error....'})
 }
 else
 {
  res.status(200).json({status:true,message:'Company Registerd Successfully'})
 }

})
});




router.get('/fetch_all_onboard_record', function(req, res, next) {
  pool.query("select * from onboard",function(error,result){
   if(error)
   { console.log(error)
    res.status(500).json({status:false,message:'Server error....'})
   }
   else
   {
    res.status(200).json({status:true,data:result})
   }

  })
}); 


module.exports = router;


