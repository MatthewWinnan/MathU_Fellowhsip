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
  thisStudent:student_users = new student_users();
  bursariesList:Bursary[] = [];


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
    //stored in Storage (when login)
    this.initialiseStudentData();

    //get all bursaries
    this.initialiseBursaries();


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

  initialiseStudentData(){
    //someone who just logged in 
    this.thisStudent.id = 100;
    this.thisStudent.student_id = "U0100";
    this.thisStudent.first_name = "Newbie";
    this.thisStudent.last_name = "Newest";
    this.thisStudent.date_of_birth = "03-03-1994";
    this.thisStudent.email_address = "marcus.rashford@gmail.com";
    this.thisStudent.nationality = false;
    this.thisStudent.contact_number = "";
    this.thisStudent.city = "";
    this.thisStudent.province = "";
    this.thisStudent.disability = null;
    this.thisStudent.current_academic_level = "";
    this.thisStudent.grade = 0.0;
    this.thisStudent.syllabus = "";
    this.thisStudent.average = 0.0;
    this.thisStudent.currently_studying = "";
    this.thisStudent.year_of_study = "";
    this.thisStudent.study_institution = "";
    this.thisStudent.continue_studies = null;
    this.thisStudent.gpa = 0.0;
    this.thisStudent.description_of_student = "";
    this.thisStudent.bursarred = null;
    this.thisStudent.current_bursaries = "";
    this.thisStudent.workback = 0;
    this.thisStudent.website = "";
    this.thisStudent.Students_marks = [];

    //High school student 
    // this.thisStudent.id = 1;
    // this.thisStudent.student_id = "U0001";
    // this.thisStudent.first_name = "Jadon";
    // this.thisStudent.last_name = "Sancho";
    // this.thisStudent.date_of_birth = "03-03-2005";
    // this.thisStudent.email_address ="jadon@gmail.com";
    // this.thisStudent.nationality = true;
    // this.thisStudent.contact_number = "+27 80 783 7823";
    // this.thisStudent.city = "Centurion";
    // this.thisStudent.province = "Gauteng";
    // this.thisStudent.disability = false;
    // this.thisStudent.current_academic_level = "High School";
    // this.thisStudent.grade = 10;
    // this.thisStudent.syllabus ="CAPS";
    // this.thisStudent.average = 70.0;
    // this.thisStudent.currently_studying = "";
    // this.thisStudent.year_of_study = "";
    // this.thisStudent.study_institution = "";
    // this.thisStudent.continue_studies = false;
    // this.thisStudent.gpa = 0.0;
    // this.thisStudent.description_of_student = "I am a very hard-working learner";
    // this.thisStudent.bursarred = false;
    // this.thisStudent.current_bursaries ="";
    // this.thisStudent.workback = 2;
    // this.thisStudent.website ="";
    // this.thisStudent.Students_marks = [
    //   {
    //     subject_name: "English",
    //     marks: 90.0
    //   },
    //   {
    //     subject_name: "Maths",
    //     marks: 75.0
    //   },
    //   {
    //     subject_name: "Afrikaans",
    //     marks: 85.0
    //   },
    //   {
    //     subject_name: "Life Orientation",
    //     marks: 90.0
    //   }
    // ];

    //Undergrad student
    // this.thisStudent.id = 2;
    // this.thisStudent.student_id = "U0002";
    // this.thisStudent.first_name = "Daniel";
    // this.thisStudent.last_name = "James";
    // this.thisStudent.date_of_birth = "03-03-1999";
    // this.thisStudent.email_address = "daniel@gmail.com";
    // this.thisStudent.nationality = true;
    // this.thisStudent.contact_number = "+27 80 783 0000";
    // this.thisStudent.city = "Johannesburg";
    // this.thisStudent.province = "Free State";
    // this.thisStudent.disability = false;
    // this.thisStudent.current_academic_level = "Undergraduate";
    // this.thisStudent.grade = 0.0;
    // this.thisStudent.syllabus = "";
    // this.thisStudent.average = 0.0;
    // this.thisStudent.currently_studying = "Civil Engineering";
    // this.thisStudent.year_of_study = "Year 3";
    // this.thisStudent.study_institution = "University of Pretoria";
    // this.thisStudent.continue_studies = false;
    // this.thisStudent.gpa = 75.0;
    // this.thisStudent.description_of_student = "I am an ambitious learner";
    // this.thisStudent.bursarred = false;
    // this.thisStudent.current_bursaries = "";
    // this.thisStudent.workback = 2;
    // this.thisStudent.website = "www.james.co.za";
    // this.thisStudent.Students_marks = [];
  }

  initialiseBursaries(){
    this.bursariesList = [
      {
        bursary_id: 1,
        company_id: 0,
        bursary_name: "MechEng",
        bursary_type: "Work Back",
        bursary_description: "This is a good bursary",
        WB_duration: 4,
        min_age: 13,
        max_age: 26,
        academic_level: "Undergraduate",
        study_field: "Law",
        minimum_year_required: 2,
        min_average: 76,
        RSA_citizen: true,
        financial_need: false,
        study_further: false,
        disability: true,
        province: "Gauteng",
        bursary_covers: [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
            "Transport"
        ],
        closing_date: "2021-11-16",
        shortlist_date: "2021-11-20",
        email_address: "name@gmail.com",
        bursary_duration: 2,
        isVisible: true,
        company: {
          company_id: 0,
          company_name: "Sasol",
          company_industry: "Mining",
          company_logo: "", //not implemented for now
          company_description: "This is a good company",
          company_URL: "www.sasol.com",
          number_of_reports: 0,
        }
      },
      {
        bursary_id: 5,
        company_id: 1,
        bursary_name: "HatchEng",
        bursary_type: "Bursary",
        bursary_description: "This is a hatch bursary",
        WB_duration: 0,
        min_age: 10,
        max_age: 26,
        academic_level: "Undergraduate",
        study_field: "Law",
        minimum_year_required: 2,
        min_average: 76,
        RSA_citizen: true,
        financial_need: false,
        study_further: false,
        disability: true,
        province: "Gauteng",
        bursary_covers: [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
            "Transport"
        ],
        closing_date: "2021-11-16",
        shortlist_date: "2021-11-20",
        email_address: "name@gmail.com",
        bursary_duration: 2,
        isVisible: true,
        company: {
          company_id: 1,
          company_name: "Hatch",
          company_industry: "Law",
          company_logo: "", //not implemented for now
          company_description: "This is a amazing company",
          company_URL: "www.hatch.com",
          number_of_reports: 0,
        }
      },
      {
        bursary_id: 8,
        company_id: 3,
        bursary_name: "ChemEng",
        bursary_type: "Work Back",
        bursary_description: "This is a good bursary",
        WB_duration: 4,
        min_age: 13,
        max_age: 26,
        academic_level: "Undergraduate",
        study_field: "Law",
        minimum_year_required: 2,
        min_average: 76,
        RSA_citizen: true,
        financial_need: false,
        study_further: false,
        disability: true,
        province: "Gauteng",
        bursary_covers: [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
            "Transport"
        ],
        closing_date: "2021-11-16",
        shortlist_date: "2021-11-20",
        email_address: "name@gmail.com",
        bursary_duration: 2,
        isVisible: true,
        company: {
          company_id: 3,
          company_name: "Dischem",
          company_industry: "Pharmacy",
          company_logo: "", //not implemented for now
          company_description: "This is a pharmacy company",
          company_URL: "www.dischem.com",
          number_of_reports: 0,
        }
      }

    ];
  }
}
