import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { student_users } from '../../../model/student_users';
import { Company } from '../../../model/company';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.page.html',
  styleUrls: ['./view-applicants.page.scss'],
})
export class ViewApplicantsPage implements OnInit {
  applicantsData:student_users[] = [];
  ourCompany = new Company();
  //status: string = '';
  constructor(
    public ModalCtrl: ModalController,
    private platform: Platform,
    private router:Router,
    private dataService: DataService,
    private alert: AlertController,
  ) { 
    this.platform.ready().then(()=>{
      //ourCompany is stored in LocalStorage (when user logs in)
      this.ourCompany.company_id = 0;
      this.ourCompany.company_name = "Google";
      this.ourCompany.company_industry = "IT & Telecommunications";
      this.ourCompany.comapny_logo = "";
      this.ourCompany.company_description = "";
      this.ourCompany.company_URL = "";
      this.initializeJSONData();
    });
  }

  ngOnInit() {
  }

  initializeJSONData() {
    // all applicants who applied for a certain bursary
    this.applicantsData = [
      {
        student_id: "U0100",
        first_name: "Newbie",
        last_name: "Newest",
        date_of_birth: "03-03-1994",
        email_address: "marcus.rashford@gmail.com",
        nationality: null,
        contact_number: "",
        city: "",
        province: "",
        disability: null,
        current_academic_level: "",
        grade: 0.0, //for high school
        syllabus: "",  //for high school
        average: 0.0, //for high school
        currently_studying: "",  //for not High Schoool
        year_of_study: "",  //for not High Schoool
        study_institution: "",  //for not High Schoool
        continue_studies: null, //for not High Schoool
        gpa: 0.0, //for not High Schoool
        description_of_student: "",
        bursarred: null,
        current_bursaries: "", //only if bursarred is true
        workback: 0,
        website: "",
        marks: []
      },
      {
        student_id: "U0001",
        first_name: "Jadon",
        last_name: "Sancho",
        date_of_birth: "03-03-2005",
        email_address: "jadon@gmail.com",
        nationality: false,
        contact_number: "+27 80 783 7823",
        city: "Centurion",
        province: "Gauteng",
        disability: false,
        current_academic_level: "High School",
        grade: 10, //for high school
        syllabus: "CAPS",  //for high school
        average: 70.0, //for high school
        currently_studying: "",  //for not High Schoool
        year_of_study: "",  //for not High Schoool
        study_institution: "",  //for not High Schoool
        continue_studies: false, //for not High Schoool
        gpa: 0.0, //for not High Schoool
        description_of_student: "I am a very hard-working learner",
        bursarred: false,
        current_bursaries: "", //only if bursarred is true
        workback: 2,
        website: "",
        marks: [
          {
            subject_name: "English",
            marks: 90.0
          },
          {
            subject_name: "Maths",
            marks: 75.0
          },
          {
            subject_name: "Afrikaans",
            marks: 85.0
          },
          {
            subject_name: "Life Orientation",
            marks: 90.0
          }
        ]
      },
      {
        student_id: "U0002",
        first_name: "Daniel",
        last_name: "James",
        date_of_birth: "03-03-1999",
        email_address: "daniel@gmail.com",
        nationality: false,
        contact_number: "+27 80 783 0000",
        city: "Johannesburg",
        province: "Free State",
        disability: false,
        current_academic_level: "Undergraduate",
        grade: 0.0, //for high school
        syllabus: "",  //for high school
        average: 0.0, //for high school
        currently_studying: "Civil Engineering",  //for not High Schoool
        year_of_study: "Year 3",  //for not High Schoool
        study_institution: "University of Pretoria",  //for not High Schoool
        continue_studies: false, //for not High Schoool
        gpa: 75.0, //for not High Schoool
        description_of_student: "I am an ambitious learner",
        bursarred: false,
        current_bursaries: "", //only if bursarred is true
        workback: 2,
        website: "www.james.co.za",
        marks: []
      },
      {
        student_id: "U0010",
        first_name: "Marcus",
        last_name: "Rashford",
        date_of_birth: "03-03-1994",
        email_address: "marcus.rashford@gmail.com",
        nationality: false,
        contact_number: "+27 80 783 8000",
        city: "Pretoria",
        province: "Gauteng",
        disability: true,
        current_academic_level: "Postgraduate",
        grade: 0.0, //for high school
        syllabus: "",  //for high school
        average: 0.0, //for high school
        currently_studying: "Civil Engineering",  //for not High Schoool
        year_of_study: "Honours",  //for not High Schoool
        study_institution: "UJ",  //for not High Schoool
        continue_studies: false, //for not High Schoool
        gpa: 70.0, //for not High Schoool
        description_of_student: "I am a inquisitive learner",
        bursarred: false,
        current_bursaries: "", //only if bursarred is true
        workback: 2,
        website: "www.marcus.co.za",
        marks: []
      },
    ]
  }

  acceptDialogue(acceptItem) {
    console.log(acceptItem);
    this.alert.create({
      header: "Confirmation!",
      subHeader: "Are you sure you would like to accept " + acceptItem.first_name + " " + 
        acceptItem.last_name + " into the shortlist for " + "Bursary xyz" + "?",
      buttons:[{
        text: "Accept",
        handler:(data) => {
          //this.status = 'Confirmed!'
          console.log(acceptItem.first_name + " " + acceptItem.last_name + " has been accepted to " 
          + "Bursary xyz");
        } 
    },
    { 
      text: "Cancel",
      handler: (data) => {
        //this.status = "Cancelled!"
      }
    }]
    }).then((confirmElement) => {
      confirmElement.present()
    })
  }

  declineDialogue(acceptItem) {
    console.log(acceptItem);
    this.alert.create({
      header: "Decline!",
      subHeader: "Are you sure you would like to decline " + acceptItem.first_name + " " + 
        acceptItem.last_name + " into the shortlist for the bursary " + "Bursary xyz" + "?",
      buttons:[{
        text: "Decline",
        handler:(data) => {
          //this.status = 'Declined!'
          console.log(acceptItem.first_name + " " + acceptItem.last_name + " has been declined to " 
          + "Bursary xyz");
        } 
    },
    { 
      text: "Cancel",
      handler: (data) => {
        //this.status = "Cancelled!"

      }
    }]
    }).then((confirmElement) => {
      confirmElement.present()
    })
  }


  openViewInfo(applicantItem){
    this.dataService.setData(1, applicantItem);
    this.router.navigateByUrl('view-more-applicants/1');
  }

}
