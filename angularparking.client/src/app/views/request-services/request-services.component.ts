import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BookingService } from '../../core/services/booking.service';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { SendimgService } from '../../core/services/sendimg.service';

@Component({
selector: 'app-request-services',
standalone: true,
imports: [CalendarModule,ReactiveFormsModule,CurrencyPipe,NgIf,NgFor,ButtonModule, StepperModule,CommonModule],
templateUrl: './request-services.component.html',
styleUrl: './request-services.component.css'
})
export class RequestServicesComponent implements OnInit {
    imgstatus=false
    ApplicationDate:any
    ArticleOfIncorporationFormFile!: File;
    CompanyOwnersDriverLicenseFormFile!: File;
    CertificateOfInsuranceFormFile!: File;
    CertifiedPaymentFormFile!: File;
    PostdatedChecksFormFile!: File;
    ArticleOfIncorporationUrl:string='';
    CompanyOwnersDriverLicenseUrl:string='';
    CertificateOfInsuranceUrl:string='';
    CertifiedPaymentUrl:string='';
    PostdatedChecksUrl:string='';
    TruckOrTrailers:any=1
    References:any[]=[]
PreviousLandlords:any[]=[]
constructor (private BookingService:BookingService,private _SendimgService:SendimgService){}
ngOnInit(): void {}


BookingForm: FormGroup = new FormGroup({
// PersonalInfo  Information

'PersonalInfo_FirstName': new FormControl(null, [ Validators.required]),
'PersonalInfo_LastName': new FormControl(null, [ Validators.required]),
'PersonalInfo_MiddleName': new FormControl(null, [ Validators.required]),
'PersonalInfo_PhoneNumber': new FormControl(null, [ Validators.required]),
'PersonalInfo_Email': new FormControl(null, [ Validators.required,Validators.email]),
'PersonalInfo_StreetAddress': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PersonalInfo_AptUnitNumber': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PersonalInfo_City': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PersonalInfo_State': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PersonalInfo_PostalZipCode': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PersonalInfo_ApplicantDate': new FormControl(null, [ Validators.required]),
// MoveInInfo  Information

'MoveInInfo_MoveInDate': new FormControl(null, [Validators.required]),
'MoveInInfo_TruckOrTrailers': new FormControl(null, [ Validators.required]),
'MoveInInfo_RateApprovedPerSpot': new FormControl(null, [ Validators.required]),
'MoveInInfo_LocationAppliedFor': new FormControl('Location Applied for:', [ Validators.required]),
'MoveInInfo_IsCarrierBasedInOntario': new FormControl("Are you a carrier based in Ontario", [ Validators.required]),
'MoveInInfo_StateOrProvince': new FormControl('If not what state or province are you from?', [ Validators.required]),
// FleetInfo  Information


'FleetInfo_LastBouncedCheckOrMissedPayment': new FormControl('Have you ever bounced a chq or missed a payment?', [ Validators.required]),
'FleetInfo_HasBouncedCheckOrMissedPayment': new FormControl('Have you ever bounced a chq or missed a payment?', [ Validators.required]),
'FleetInfo_BouncedCheckExplanation': new FormControl(null, [ Validators.required]),
'FleetInfo_HasInternalFleetRepairShop': new FormControl('Does your company have internal Fleet repair shop?', [ Validators.required]),
'FleetInfo_WillPerformMaintenanceOnProperties': new FormControl('Will you be performing any maintenance on our properties for your fleet?', [ Validators.required]),


// Trailer  Information


'Trailer_DryVans': new FormControl(0, [ Validators.required]),
'Trailer_Reefer': new FormControl(0, [ Validators.required]),
'Trailer_Flatbed': new FormControl(0, [ Validators.required]),
'Trailer_OtherTrailers': new FormControl(0, [ Validators.required]),

// Truck  Information

'Truck_HighwayTrucks': new FormControl(0, [ Validators.required]),
'Truck_DayCab': new FormControl(0, [ Validators.required]),
'Truck_BoxTrucks': new FormControl(0, [ Validators.required]),
'Truck_DumpTrucks': new FormControl(0, [ Validators.required]),

// References Information


'References_NameOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_RelationshipOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_CompanyOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_PhoneOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_AddressOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_EmailOne': new FormControl(null, [Validators.email, Validators.required]),

'References_NameTwo': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_RelationshipTwo': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_CompanyTwo': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_PhoneTwo': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_AddressTwo': new FormControl(null, [Validators.minLength(3), Validators.required]),
'References_EmailTwo': new FormControl(null, [Validators.email, Validators.required]),


// PreviousLandlord  Information


'PreviousLandlord_CompanyOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PreviousLandlord_PhoneOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PreviousLandlord_AddressOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PreviousLandlord_LandLordNameOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PreviousLandlord_SpaceRentsOne': new FormControl(null, [Validators.minLength(3), Validators.required]),
'PreviousLandlord_FromDateOne': new FormControl(null, [ Validators.required]),
'PreviousLandlord_ToDateOne': new FormControl(null, [ Validators.required]),
'PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceOne': new FormControl(true, [Validators.minLength(3), Validators.required]),

'PreviousLandlord_CompanyTwo': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_PhoneTwo': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_AddressTwo': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_LandLordNameTwo': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_SpaceRentsTwo': new FormControl(null, [Validators.minLength(3) , Validators.required]),
'PreviousLandlord_FromDateTwo': new FormControl(null, [ Validators.required ]),
'PreviousLandlord_ToDateTwo': new FormControl(null, [  Validators.required]),
'PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceTwo': new FormControl(true, [Validators.minLength(3), Validators.required ]),

'PreviousLandlord_CompanyThree': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_PhoneThree': new FormControl(null, [Validators.minLength(3) , Validators.required]),
'PreviousLandlord_AddressThree': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_LandLordNameThree': new FormControl(null, [Validators.minLength(3), Validators.required ]),
'PreviousLandlord_SpaceRentsThree': new FormControl(null, [Validators.minLength(3) , Validators.required]),
'PreviousLandlord_FromDateThree': new FormControl(null, [  Validators.required]),
'PreviousLandlord_ToDateThree': new FormControl(null, [  Validators.required]),
'PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceThree': new FormControl(true, [Validators.minLength(3), Validators.required ]),


// BankingInfo  Information


'BankingInfo_Bank': new FormControl(null, [Validators.minLength(3)]),
'BankingInfo_Contact': new FormControl(null, [Validators.minLength(3)]),
'BankingInfo_Phone': new FormControl(null, [Validators.minLength(3)]),
'BankingInfo_Address': new FormControl(null, [Validators.minLength(3)]),




})
submitForm(form:any){

  
this.References=[
{

'name':form.References_NameOne ,
'relationship':form.References_RelationshipOne,
'company':form.References_CompanyOne ,
'phone':form.References_PhoneOne,
'address':form.References_AddressOne,
'email':form.References_EmailOne ,


},
{

'name':form.References_NameTwo ,
'relationship':form.References_RelationshipTwo,
'company':form.References_CompanyTwo ,
'phone':form.References_PhoneTwo,
'address':form.References_AddressTwo,
'email':form.References_EmailTwo ,


}
]
this.PreviousLandlords=[
{
'company': form.PreviousLandlord_CompanyOne,
'phone':form.PreviousLandlord_PhoneOne ,
'address':form.PreviousLandlord_AddressOne,
'landlordName':form.PreviousLandlord_LandLordNameOne,
'spaceRented':form.PreviousLandlord_SpaceRentsOne ,
'rentalStartDate':form.PreviousLandlord_FromDateOne,
'rentalEndDate':form.PreviousLandlord_ToDateOne,
'canContactForReference':form.PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceOne ,
},
{
'company':form.PreviousLandlord_CompanyTwo,
'phone':form.PreviousLandlord_PhoneTwo,
'address':form.PreviousLandlord_AddressTwo,
'landlordName':form.PreviousLandlord_LandLordNameTwo,
'spaceRented':form.PreviousLandlord_SpaceRentsTwo,
'rentalStartDate':form.PreviousLandlord_FromDateTwo,
'rentalEndDate':form.PreviousLandlord_ToDateTwo,
'canContactForReference':form.PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceTwo,
},
{
'company':form.PreviousLandlord_CompanyThree ,
'phone':form.PreviousLandlord_PhoneThree ,
'address':form.PreviousLandlord_AddressThree ,
'landlordName':form.PreviousLandlord_LandLordNameThree ,
'spaceRented':form.PreviousLandlord_SpaceRentsThree ,
'rentalStartDate':form.PreviousLandlord_FromDateThree,
'rentalEndDate':form.PreviousLandlord_ToDateThree ,
'canContactForReference':form.PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceThree ,
}

]
if(form.MoveInInfo_TruckOrTrailers=="Truck"){
  this.TruckOrTrailers=0
}
else{
  this.TruckOrTrailers=1
}
let personalInfo={


  
// MoveInInfo  Information
"firstName": form.PersonalInfo_FirstName,
"middleName": form.PersonalInfo_MiddleName,
"lastName": form.PersonalInfo_LastName,
"phoneNumber": form.PersonalInfo_PhoneNumber,
"email": form.PersonalInfo_Email,
"streetAddress": form.PersonalInfo_StreetAddress,
"aptUnitNumber": form.PersonalInfo_AptUnitNumber,
"city": form.PersonalInfo_City,
"state": form.PersonalInfo_State,
"postalZipCode": form.PersonalInfo_PostalZipCode,
"applicantDate": form.PersonalInfo_ApplicantDate,
"articleOfIncorporationPath": this.ArticleOfIncorporationUrl,
"companyOwnersDriverLicensePath": this.CompanyOwnersDriverLicenseUrl,
"certificateOfInsurancePath": this.CertificateOfInsuranceUrl,
"certifiedPaymentPath": this.CertifiedPaymentUrl,
"postdatedChecksPath": this.PostdatedChecksUrl
}
let truck={
highwayTrucks: form.Truck_HighwayTrucks,
dayCab: form.Truck_DayCab,
boxTrucks: form.Truck_BoxTrucks,
dumpTrucks: form.Truck_DumpTrucks,
dryVans: form.Trailer_DryVans,
reefer: form.Trailer_Reefer,
flatbed: form.Trailer_Flatbed,
otherTrailers: form.Trailer_OtherTrailers
}
let isCarrierBasedInOntario = <string>form.MoveInInfo_IsCarrierBasedInOntario;  // boolValue will be true
// let stateOrProvince = <string> form.MoveInInfo_StateOrProvince;  // boolValue will be true
let willPerformMaintenanceOnProperties = <string> form.FleetInfo_WillPerformMaintenanceOnProperties;  // boolValue will be true
let lastBouncedCheckOrMissedPayment =  <string>form.FleetInfo_LastBouncedCheckOrMissedPayment;  // boolValue will be true
let hasInternalFleetRepairShop = <string>form.FleetInfo_HasInternalFleetRepairShop;  // boolValue will be true


function checkIfTrue(value: string) {
  if (value === "true") {
     
  return  true ;
  } else {
    return  false;
  }
}
let moveInInfo={
moveInDate:form.MoveInInfo_MoveInDate,
truckOrTrailers: this.TruckOrTrailers,
rateApprovedPerSpot: form.MoveInInfo_RateApprovedPerSpot,
locationAppliedFor: form.MoveInInfo_LocationAppliedFor,
isCarrierBasedInOntario: checkIfTrue(isCarrierBasedInOntario),
stateOrProvince: form.MoveInInfo_StateOrProvince
}
let fleetInfo= {

lastBouncedCheckOrMissedPayment:form.FleetInfo_LastBouncedCheckOrMissedPayment,
hasBouncedCheckOrMissedPayment:checkIfTrue(lastBouncedCheckOrMissedPayment),
bouncedCheckExplanation: form.FleetInfo_BouncedCheckExplanation,
hasInternalFleetRepairShop:checkIfTrue(hasInternalFleetRepairShop),
willPerformMaintenanceOnProperties:checkIfTrue(willPerformMaintenanceOnProperties)
}
let  bankingInfo= {
  bank: form.BankingInfo_Bank,
  contact: form.BankingInfo_Contact,
  phone: form.BankingInfo_Phone,
  address: form.BankingInfo_Address
} 
let references=[
  {
  
  'name':form.References_NameOne ,
  'relationship':form.References_RelationshipOne,
  'company':form.References_CompanyOne ,
  'phone':form.References_PhoneOne,
  'address':form.References_AddressOne,
  'email':form.References_EmailOne ,
  
  
  },
  {
  
  'name':form.References_NameTwo ,
  'relationship':form.References_RelationshipTwo,
  'company':form.References_CompanyTwo ,
  'phone':form.References_PhoneTwo,
  'address':form.References_AddressTwo,
  'email':form.References_EmailTwo ,
  
  
  }
]
let canContactForReferenceOne = JSON.parse(form.PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceOne);  // boolValue will be true
let canContactForReferenceTwo = JSON.parse(form.PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceTwo);  // boolValue will be true
let canContactForReferenceThree = JSON.parse(form.PreviousLandlord_MaywecontactyourpreviouslandlordforreferenceThree);  // boolValue will be true


let previousLandlords=[
  {
  'company': form.PreviousLandlord_CompanyOne,
  'phone':form.PreviousLandlord_PhoneOne ,
  'address':form.PreviousLandlord_AddressOne,
  'landlordName':form.PreviousLandlord_LandLordNameOne,
  'spaceRented':form.PreviousLandlord_SpaceRentsOne ,
  'rentalStartDate':form.PreviousLandlord_FromDateOne,
  'rentalEndDate':form.PreviousLandlord_ToDateOne,
  'canContactForReference':canContactForReferenceOne ,
  },
  {
  'company':form.PreviousLandlord_CompanyTwo,
  'phone':form.PreviousLandlord_PhoneTwo,
  'address':form.PreviousLandlord_AddressTwo,
  'landlordName':form.PreviousLandlord_LandLordNameTwo,
  'spaceRented':form.PreviousLandlord_SpaceRentsTwo,
  'rentalStartDate':form.PreviousLandlord_FromDateTwo,
  'rentalEndDate':form.PreviousLandlord_ToDateTwo,
  'canContactForReference':canContactForReferenceTwo,
  },
  {
  'company':form.PreviousLandlord_CompanyThree ,
  'phone':form.PreviousLandlord_PhoneThree ,
  'address':form.PreviousLandlord_AddressThree ,
  'landlordName':form.PreviousLandlord_LandLordNameThree ,
  'spaceRented':form.PreviousLandlord_SpaceRentsThree ,
  'rentalStartDate':form.PreviousLandlord_FromDateThree,
  'rentalEndDate':form.PreviousLandlord_ToDateThree ,
  'canContactForReference':canContactForReferenceThree ,
  }
  
]
let obj={
  'personalInfo':personalInfo ,
  'truck':truck,
  'moveInInfo':moveInInfo,
  'fleetInfo':fleetInfo,
  'bankingInfo':bankingInfo,
  'references':references,
  'previousLandlords':previousLandlords

}

this.BookingService.bookspot(obj).subscribe((res)=>{

  if(res.message=="Done"){
    this.BookingForm.reset()
    
  }
})
}



onArticleOfIncorporationFormFileSelected(e:any ) {

    this.ArticleOfIncorporationFormFile = e.target.files[0];
    if(e.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(Event:any)=>{
      }

}

var formData = new FormData();
formData.append("Image", this.ArticleOfIncorporationFormFile);
this._SendimgService.SendArticleOfIncorporation(formData).subscribe((res)=>{
  this.ArticleOfIncorporationUrl=res.response
  
})

}
onCompanyOwnersDriverLicenseFormFileSelected(e:any ) {

    this.CompanyOwnersDriverLicenseFormFile = e.target.files[0];
    if(e.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(Event:any)=>{
      }
}
var formData = new FormData();
formData.append("Image", this.CompanyOwnersDriverLicenseFormFile);
this._SendimgService.sendCompanyOwnersDriverLicense(formData).subscribe((res)=>{
  this.CompanyOwnersDriverLicenseUrl=res.response
  
})
}
onCertificateOfInsuranceFormFileSelected(e:any ) {

    this.CertificateOfInsuranceFormFile = e.target.files[0];
    if(e.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(Event:any)=>{
      }
}
var formData = new FormData();
formData.append("Image", this.CertificateOfInsuranceFormFile);
this._SendimgService.sendCertificateOfInsurance(formData).subscribe((res)=>{
  this.CertificateOfInsuranceUrl=res.response
  
})
}
onCertifiedPaymentFormFileSelected(e:any ) {

    this.CertifiedPaymentFormFile = e.target.files[0];
    if(e.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(Event:any)=>{
      }
}
var formData = new FormData();
formData.append("Image", this.CertifiedPaymentFormFile);
this._SendimgService.sendCertifiedPayment(formData).subscribe((res)=>{
  this.CertifiedPaymentUrl=res.response
  
})
}
onPostdatedChecksFormFileSelected(e:any ) {

    this.PostdatedChecksFormFile = e.target.files[0];
    if(e.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(Event:any)=>{
      }
}
var formData = new FormData();
formData.append("Image", this.PostdatedChecksFormFile);
this._SendimgService.sendPostdatedChecks(formData).subscribe((res)=>{
  this.PostdatedChecksUrl=res.response
  
},(er)=>{
  
}
)
}

}
