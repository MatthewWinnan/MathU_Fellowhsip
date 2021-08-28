import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bursary } from 'src/app/model/bursaries';
import { Company } from 'src/app/model/company';
import { student_users } from 'src/app/model/student_users'
import { AlertController, IonApp } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { BursaryService } from 'src/app/service/bursary.service';
import { Student_bursary } from 'src/app/model/student_bursary';
import { LoadingController } from '@ionic/angular';


let student = new student_users


@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})

export class StudentHomePage implements OnInit {
  thisStudent:student_users = new student_users();
  bursariesList:Bursary[] = [];
  student_bur = new Student_bursary();
  i: number = 0;


  /* Form Variables */
  companyLogo: any;
  companyName: any;
  companyIndustry: any;
  bursaryName: any;
  fieldStudyNeeded: any;
  offerExpirationDate: any;
  bursaryCoversFor: any;
  latestAverageAbove: any;

  companyDescription: any;
  companyURL: any;
  emailAddress: any;

  bursaryType: any;
  bursaryDuration: any;
  academicLevel: any;
  minYearRequired: any;

  ageMin: any;
  ageMax: any;

  RSACitizenNeeded: any;
  forFinancialAssistence: any;
  disability: any;

  studyFurther: any;

  documentsNeeded: any;

  dateForFurtherCommunication: any;
  currentDate = new Date();
  bursValid: Boolean = false

  // Variables for messages for main page
  noBursariesMessage1 = "There are currently no bursaries in the DB."
  noBursariesMessage2 = "Sorry about that."
  noBursariesMessage3 = "But it is about to change, so don't worry."
  

  /* Student Account Verified */
  studentIsVerified = student.validated;

    /* Rest of the Logic */
  showValid: boolean = false;
  viewMoreStr: string = "View More";
  viewLessStr: string = "View Less";
  moreBursaries: any = '';
  valueLeft: boolean;
  valueRight: boolean;
  listBurs = [];

  sub: any;

  /* Testing spinner function */
  isChecking: boolean = true;

  // are there bursaries?
  bursariesAvailable: boolean;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
    public _apiService: BursaryService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    
    //this.loading()
    //this.presentLoading
    
    let k: number;
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      k = parseInt(params.id)
    });    

    // stored in Storage (when login)
    this.initialiseStudentData();

    // get all bursaries
    this.initialiseBursaries();

    /* See if there are bursaries */
    this.checkHowManyBursariesInList()

    if (this.bursariesAvailable) {

      // See if a certain bursary can shown (Eq if wanted to view a bursary seen in the shortlist page)
      this.checkID(k)

            // Gets bursary with certain id and populates screen.
      this.getBuraries(this.i)

      /* Upon initiation Values for left and right cycle button is set */
      /* Right */
      if (this.i >= this.bursariesList.length) {
        this.valueRight = false
      }
      if (this.i < this.bursariesList.length) {
        this.valueRight = true
      }
      if (this.i > 0) {
        this.valueLeft = true
      }
    }

  }

  /* ionViewWillEnter() {
    this.presentLoadingBursaries()
  }

  async presentLoadingBursaries() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'lines-small',
      message: 'Fetching Bursaries...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  } */

  checkID(k: number) {
    for (let m = 0; m < this.bursariesList.length; m++) {
      console.log(k, this.bursariesList[m].bursary_id)
      if (k == this.bursariesList[m].bursary_id) {
        this.i = m
        break
      }
      else {
        console.log("Can't find Bursary")
        this.i = 0
      }
      
    }

  }

  /* the option on the right hand side to see if the nextBursary() must be used or applyBursary() */
  rightOption(thatBursary) {
    this.showValid ? this.applyBursary(thatBursary) : this.nextBursary()
  }

  /* the option on the left hand side to see if the prevBursary() must be used or dismissBursary() */
  leftOption() {
    this.showValid ? this.dismissBursary() : this.prevBursary()
  }

  nextBursary() {
    // there needs to be a list option to make sure that button will be disabled if end of list is reached.
    // list represents the list of bursaries that meet the filter criteria
    if (this.i < this.bursariesList.length-1) {
      this.i++
      this.valueLeft = true
      if (this.i >= this.bursariesList.length-1) {
        this.valueRight = false
      } 
    }
    this.getBuraries(this.i)
  }

  prevBursary() {
    if (this.i > 0) {
      this.i--
      this.valueLeft = true
      this.valueRight = true
      if (this.i <= 0) {
        this.valueLeft = false
      } 
    }
    this.getBuraries(this.i)
  }
  
  applyBursary(bursary_data: Bursary) {
    console.log('Proceed to apply for the Bursary');
    console.log(bursary_data);
    // this.student_bur.Student_ID = this.thisStudent.id;
    // this.student_bur.Bursary_ID = bursary_data.bursary_id;
    // //date set by backend 
    // this.student_bur.Status = "Pending";
    // this.student_bur.Student = this.thisStudent;
    // this.student_bur.bursary = bursary_data;
    // //send api call
    // this._apiService.studentApplyBursary(this.student_bur).subscribe((res) => {
    //   console.log("REQUEST SUCCESS ===", res);
    //   console.log(res["message"]);
    //   //display message 
    // }, (error:any) => {
    //   console.log("ERROR ===", error);
    //   console.log('error');
    // });
  }
  

  /* See if bursary is Expired */
  isBursaryExpired(d: number) {
    let bursDate = new Date(this.bursariesList[d].closing_date)
    this.bursValid = false

    if (this.currentDate <= bursDate) {
      this.bursValid = true
    }
}

  dismissBursary() {
    /* this.studentIsVerified ? console.log('You are Verified. Proceed to decline Bursary') : this.presentAlert('dismiss') */
  }

  viewMore() {
    console.log("viewMore()");
    this.showValid = !this.showValid;
  }

  filter() {
    this.presentAlertV2()
  }
  /* Alert Option */
  /* async presentAlert(str:string) {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Account Verification',
      subHeader: 'To ' +str+ ' the bursary, account must be verified.',
      message: 'Please go to profile page to make sure that the criteria fields are valid and submit to verify account. Then try again.',
      buttons: ['OK, got it']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  } */
  async presentAlertV2() {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Not here yet',
      subHeader: '',
      message: 'Coming in v1.2',
      buttons: ["OK, can't wait"]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  /* Get Bursary That meet the filter Criteria */
  getBuraries(i: number) {
    this.checkHowManyBursariesInList()

    // Check to see if the bursary is past expiration date and therefore disables apply button
    this.isBursaryExpired(i)

    this.companyName = this.bursariesList[i].company.company_name;
    this.companyIndustry = this.bursariesList[i].company.company_industry;
    this.bursaryName = this.bursariesList[i].bursary_name;
    this.fieldStudyNeeded = this.bursariesList[i].study_field;
    this.offerExpirationDate = this.bursariesList[i].closing_date;
    this.bursaryCoversFor = this.bursariesList[i].bursary_covers;
    this.latestAverageAbove = this.bursariesList[i].min_average

    this.companyDescription = this.bursariesList[i].company.company_description;
    this.companyURL = this.bursariesList[i].company.company_URL;
    this.emailAddress = this.bursariesList[i].email_address;

    this.bursaryType = this.bursariesList[i].bursary_type;
    this.bursaryDuration = this.bursariesList[i].bursary_duration;
    this.academicLevel = this.bursariesList[i].academic_level;
    this.minYearRequired = this.bursariesList[i].minimum_year_required;

    this.ageMin = this.bursariesList[i].min_age;
    this.ageMax = this.bursariesList[i].max_age;

    this.RSACitizenNeeded = this.bursariesList[i].RSA_citizen;
    this.forFinancialAssistence = this.bursariesList[i].financial_need;
    this.disability = this.bursariesList[i].disability;

    this.studyFurther = this.bursariesList[i].study_further;

    /* this.documentsNeeded =  */
    this.dateForFurtherCommunication = this.bursariesList[i].shortlist_date; 
       
  }

  /* Check to see if there are bursaries in the database */
  checkHowManyBursariesInList() {
    console.log("Checking how many bursaries are in the DB")
    let numBursaries = this.bursariesList.length
    console.log("There are ", numBursaries, " bursary/bursaries")

    if (numBursaries == 0) {
      this.bursariesAvailable = false
      this.isChecking = false
    }
    else {
      this.bursariesAvailable = true
      this.isChecking = false
    }
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
    //console.log(this.ourCompany);
    // get all bursaries that are not deactivated
    // this._apiService.getBursaries(null).subscribe((res:Bursary[]) => {
    //   console.log("REQUEST SUCCESS ===", res);
    //   this.bursariesList = res;
    //   if(res!=null){
    //     //cater for no bursaries found!
    //   }
    // }, (error:any) => {
    //   console.log("ERROR ===", error);
    //   this.bursariesList = [];
    // });

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
        closing_date: "2021-06-16",
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
      },
      {
        bursary_id: 80,
        company_id: 50,
        bursary_name: "Internship Bursary",
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
          company_id: 50,
          company_name: "Ships and Boats",
          company_industry: "Water",
          company_logo: "", //not implemented for now
          company_description: "This is a water company",
          company_URL: "www.water.com",
          number_of_reports: 0,
        }
      },

    ];

  }
}
