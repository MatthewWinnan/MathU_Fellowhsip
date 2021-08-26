import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bursary } from 'src/app/model/bursaries';
import { Company } from 'src/app/model/company';
import { student_users } from 'src/app/model/student_users'
import { AlertController } from '@ionic/angular';


let bursary = new Bursary;
let company = new Company;
let student = new student_users
let someArray = ["company_id", "bursary_id"];
let i = 0;

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})

export class StudentHomePage implements OnInit {

  /* Form Variables */
  companyLogo = company.company_logo;
  companyName = company.company_name;
  companyIndustry = company.company_industry;
  bursaryName = bursary.bursary_name;
  fieldStudyNeeded = bursary.study_field;
  offerExpirationDate = bursary.closing_date;
  bursaryCoversFor = bursary.bursary_covers;
  latestAverageAbove = bursary.min_average;

  companyDescription = company.company_description;
  companyURL = company.company_URL;
  emailAddress = bursary.email_address;

  bursaryType: string = bursary.bursary_type;
  bursaryDuration = bursary.bursary_duration;
  academicLevel = bursary.academic_level;
  minYearRequired = bursary.minimum_year_required;

  ageMin = bursary.min_age;
  ageMax = bursary.max_age;

  RSACitizenNeeded: boolean = true;
  forFinancialAssistence: boolean = true;
  disability: boolean = true;

  studyFurther = bursary.study_further;

  documentsNeeded = [
    {docName: "CV", docCertified: "Yes"},
    {docName: "ID", docCertified: "Yes"},
    {docName: "Proof of Registration", docCertified: "Yes"},
  ];
  dateForFurtherCommunication: string = bursary.shortlist_date;   

  /* Student Account Verified */
  studentIsVerified = student.validated;

  /* Bursary Id */
  bursID = bursary.bursary_id

  /* Rest of the Logic */
  showValid: boolean = false;
  viewMoreStr: string = "View More";
  viewLessStr: string = "View Less";
  i = 0;
  moreBursaries: any = '';
  valueLeft: boolean;
  valueRight: boolean;
  listBurs = [
    "burs1", "burs2", "burs3"
  ];



  constructor(
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    /* Upon initiation Values for left and right cycle button is set */
    /* Right */
    if (i >= this.listBurs.length) {
      this.valueRight = false
    }
    if (i < this.listBurs.length) {
      this.valueRight = true
    }
    if (i > 0) {
      this.valueLeft = true
    }

    this.getBuraries()




  }

  /* the option on the right hand side to see if the nextBursary() must be used or applyBursary() */
  rightOption() {
    this.showValid ? this.applyBursary() : this.nextBursary()
  }

  /* the option on the left hand side to see if the prevBursary() must be used or dismissBursary() */
  leftOption() {
    this.showValid ? this.dismissBursary() : this.prevBursary()
  }

  nextBursary() {
    // there needs to be a list option to make sure that button will be disabled if end of list is reached.
    // list represents the list of bursaries that meet the filter criteria
    if (i < this.listBurs.length) {
      i++
      console.log("Next Bursary Brought In. Viewing Bursary: ", i);
      this.valueLeft = true
      if (i >= this.listBurs.length) {
        this.valueRight = false
      } 
    }
  }

  prevBursary() {
    if (i > 0) {
      i--
      console.log("Previous Bursary Is Back. Viewing Bursary: ", i, "List length is: ", this.listBurs.length);
      this.valueLeft = true
      this.valueRight = true
      if (i <= 0) {
        this.valueLeft = false
      } 
    }
  }
  
  applyBursary() {
    this.studentIsVerified ? console.log('You are Verified. Proceed to apply for the Bursary') : this.presentAlert('apply for')
    }

  dismissBursary() {
    this.studentIsVerified ? console.log('You are Verified. Proceed to decline Bursary') : this.presentAlert('dismiss')
  }

  viewMore() {
    console.log("viewMore()");
    this.showValid = !this.showValid;
    console.log(i);
  }

  filter() {
    console.log("Filter()");
  }
  /* Alert Option */
  async presentAlert(str:string) {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Account Verification',
      subHeader: 'To ' +str+ ' the bursary, account must be verified.',
      message: 'Please go to profile page to make sure that the criteria fields are valid and submit to verify account. Then try again.',
      buttons: ['OK, got it']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  /* Get Bursary That meet the filter Criteria */
  getBuraries() {
    console.log("Get all Buraries that meet the criteria")
    /* present the first bursary in the list */
    this.getSpecificBursary(0)
  }


  /* Get burary with certain ID */
  getSpecificBursary(bursID) {
    console.log("Get a bursary with certain id", bursID)
  }
}
