var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')
var userModel = require("../model/userModel") 
const uuid = require("uuid")


//  var fakedata = { 
//   employeeCode: '12345789',
//   firstName: 'Aliya',
//   lastName: 'Afza',
//   dob: 'Tue Dec 02 2003 19:24:00 GMT+0530 (India Standard Time)',
//   gender: 'Female',
//   nationality: 'indian',
//   fullPermanentAddress: '41\\A hazrat nizamuddin colony',
//   currentAddress: 'aaaa',
//   city: 'bhopal',
//   postcode_Pincode: '462022',
//   emailAddress: 'aliya@gmail.com',
//   countryCode: '+91',
//   referenceContactNumber: '7400737838',
//   contactNumber: '7400737838',
//   bankName: 'sbi',
//   accountNumber: '12345678954',
//   sortCode_IFSCCode: 'SVI54534',
//   emergencyContactFullName: 'FDGD',
//   relationship: 'FBDFD',
//   emergencyContactsPhoneNumber: '7400737838',
//   companyName: 'fresher',
//   positionHeld: 'DFHD',
//   employementDates: 'Wed, 26 Jul 2023 13:55:25 GMT,Thu, 31 Aug 2023 13:55:25 GMT',
//   reasonForLeaving: 'DHDTHD',
//   secondCompanyName: '',
//   secondPositionHeld: '',
//   secondEmployementDates: '',
//   secondReasonForLeaving: '',
//   nameOfDegreeDiploma: 'BTECH',
//   referenceName: 'CVBDFH',
//   referenceCompany: 'FHDF',
//   referencePosition: 'DFHDG',
//   referenceEmail: 'aliya@gmail.com',
//   secondReferenceName: 'DFHDG',
//   secondReferenceCompany: 'DHSF',
//   secondReferencePosition: 'DFHD',
//   secondReferenceContactNumber: '0740073783',
//   secondReferenceEmail: 'aliya@gmail.com',
//   nationalInsuranceNumber: '1111111111',
//   taxCode: '1111111',
//   date: 'Tue Jul 18 2023 19:24:00 GMT+0530 (India Standard Time)',
//   degreeDiplomaPicture: [
//     {
//       fieldname: 'degreeDiplomaPicture',
//       originalname: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'public/images',
//       filename: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       path: 'public\\images\\WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       size: 83924
//     }
//   ],
//   photo: [
//     {
//       fieldname: 'photo',
//       originalname: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'public/images',
//       filename: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       path: 'public\\images\\WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       size: 83924
//     }
//   ],
//   signature: [
//     {
//       fieldname: 'signature',
//       originalname: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'public/images',
//       filename: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       path: 'public\\images\\WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       size: 83924
//     }
//   ],
//   paySlip: [
//     {
//       fieldname: 'paySlip',
//       originalname: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'public/images',
//       filename: 'WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       path: 'public\\images\\WhatsApp Image 2023-03-13 at 8.24.24 PM (1).jpeg',
//       size: 83924
//     }
//   ]
// }
/* GET users listing. */
const picture = upload.fields([{name:'paySlip',maxCount:1},{name:'signature',maxCount:1},{name:'photo',maxCount:1},{name:'degreeDiplomaPicture',maxCount:1}])
router.post('/add_new_joiner',picture, async function(req, res, next) {
  try {
    

  console.log(req?.body)
  console.log( (req?.files) ? req?.files : "")
  const files = req.files;
  if (!files) {
      console.log(error)
      res.status(400).json({Status:false,message:'Server error....'})
  }
  var employeeCode = "SFR" + uuid.v4()
 var data = {
   employeeCode,
   firstName: req.body.firstName,
   lastName: req?.body?.lastName,
   dob: req?.body?.dob,
   gender: req?.body?.gender,
   nationality: req?.body?.nationality,
   fullPermanentAddress: req?.body?.fullPermanentAddress,
   currentAddress: req?.body?.currentAddress,
   city: req?.body?.city,
   postcode_Pincode: req?.body?.postcode_Pincode,
   emailAddress: req?.body?.emailAddress,
   countryCode: req?.body?.countryCode,
   referenceContactNumber: req?.body?.referenceContactNumber,
   contactNumber: req?.body?.contactNumber,
   bankName: req?.body?.bankName,
   accountNumber: req?.body?.accountNumber,
   sortCode_IFSCCode: req?.body?.sortCode_IFSCCode,
   emergencyContactFullName: req?.body?.emergencyContactFullName,
   relationship: req?.body?.relationship,
   emergencyContactsPhoneNumber: req?.body?.emergencyContactsPhoneNumber,
   companyName: req?.body?.companyName,
   positionHeld: req?.body?.positionHeld,
   employementDates: req?.body?.employementDates,
   reasonForLeaving: req?.body?.reasonForLeaving,
   secondCompanyName: req?.body?.secondCompanyName,
   secondPositionHeld: req?.body?.secondPositionHeld,
   secondEmployementDates: req?.body?.secondEmployementDates,
   secondReasonForLeaving: req?.body?.secondReasonForLeaving,
   paySlip: req?.files?.paySlip[0]?.filename,
   degreeDiplomaPicture: req?.files?.degreeDiplomaPicture[0]?.filename,
   nameOfDegreeDiploma: req?.body?.nameOfDegreeDiploma,
   photo: req?.files?.photo[0]?.filename,
   referenceName: req?.body?.referenceName,
   referenceCompany: req?.body?.referenceCompany,
   referencePosition: req?.body?.referencePosition,
   referenceEmail: req?.body?.referenceEmail,
   secondReferenceName: req?.body?.secondReferenceName,
   secondReferenceCompany: req?.body?.secondReferenceCompany,
   secondReferencePosition: req?.body?.secondReferencePosition,
   secondReferenceContactNumber: req?.body?.secondReferenceContactNumber,
   secondReferenceEmail: req?.body?.secondReferenceEmail,
   nationalInsuranceNumber: req?.body?.nationalInsuranceNumber,
   taxCode: req?.body?.taxCode,
   signature: req?.files?.signature[0]?.filename,
   date: req?.body?.date,
 };
 const user = new userModel(data)
 try{
   await user?.save()
   res.status(200).json({status:true,message:"Submit", employeeCode : employeeCode})
 }catch(error){
    console.log("xxxxx"+error)
   res.status(500).json({status:false,message:'Server error....'})

 }
   } catch (error) {
      console.log("xxxxx"+error)
   res.status(500).json({status:false,message:'Server error....' ,error : error})
  }

});

router.get('/fetch_all_joiner_record', function(req, res, next) {
  pool.query("select * from joinerform",function(error,result){
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


