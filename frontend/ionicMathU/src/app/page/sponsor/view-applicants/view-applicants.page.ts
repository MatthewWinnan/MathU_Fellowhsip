import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { AlertController } from '@ionic/angular';
import { Student_bursary } from '../../../model/student_bursary';
import { BursaryService } from '../../../service/bursary.service';
import { Bursary } from '../../../model/bursaries';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.page.html',
  styleUrls: ['./view-applicants.page.scss'],
})
export class ViewApplicantsPage implements OnInit {
  isFetching = false;
  applicantsData_length = 0;
  the_message : string = "";
  data:Bursary;
  applicantsData:Student_bursary[] = [];
  allApplicants:Student_bursary[] = [];
  //status: string = '';
  constructor(
    public ModalCtrl: ModalController,
    private platform: Platform,
    private router:Router,
    private dataService: DataService,
    private alert: AlertController,
    private route:ActivatedRoute,
    public _apiService: BursaryService,
    public toastController: ToastController,
  ) { 
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData'];
      this.initializeJSONData();
    }
  }

  initializeJSONData() {
    // all applicants who applied for a certain bursary
    //send api request 
    this.isFetching = true;
    //console.log(this.data);
    this._apiService.getBursaryApplications(this.data).subscribe((res:Student_bursary[]) => {
      console.log("APPLICATION REQUEST SUCCESS ===", res);
      this.applicantsData = res;
      this.allApplicants = this.applicantsData;
      if(res!=null){
        this.applicantsData_length = this.applicantsData.length;
      }
      this.isFetching = false;
    }, (error:any) => {
      console.log("ERROR ===", error);
      this.applicantsData = [];
    });

    // this.applicantsData = [
    //   {
    //     Bursary_ID: this.data.bursary_id,
    //     Student_ID: 0,
    //     Application_Date: "02-01-2021",
    //     Status: "Pending",
    //     student: {
    //       student_id: "U0100",
    //       first_name: "Newbie",
    //       last_name: "Newest",
    //       date_of_birth: "03-03-1994",
    //       email_address: "marcus.rashford@gmail.com",
    //       nationality: false,
    //       contact_number: "084 992 3456",
    //       city: "Cape Town",
    //       province: "Western Cape",
    //       disability: null,
    //       current_academic_level: "High School",
    //       grade: 12.0, //for high school
    //       syllabus: "",  //for high school
    //       average: 75.0, //for high school
    //       currently_studying: "",  //for not High Schoool
    //       year_of_study: "",  //for not High Schoool
    //       study_institution: "",  //for not High Schoool
    //       continue_studies: null, //for not High Schoool
    //       gpa: 0.0, //for not High Schoool
    //       description_of_student: "very ambitious",
    //       bursarred: null,
    //       current_bursaries: "", //only if bursarred is true
    //       workback: 0,
    //       website: "",
    //       marks: []
    //     }
    //   },
    //   {
    //     Bursary_ID: this.data.bursary_id,
    //     Student_ID: 0,
    //     Application_Date: "02-10-2021",
    //     Status: "Accepted",
    //     student: {
    //       student_id: "U0001",
    //       first_name: "Jadon",
    //       last_name: "Sancho",
    //       date_of_birth: "03-03-2005",
    //       email_address: "jadon@gmail.com",
    //       nationality: true,
    //       contact_number: "+27 80 783 7823",
    //       city: "Centurion",
    //       province: "Gauteng",
    //       disability: false,
    //       current_academic_level: "High School",
    //       grade: 10, //for high school
    //       syllabus: "CAPS",  //for high school
    //       average: 70.0, //for high school
    //       currently_studying: "",  //for not High Schoool
    //       year_of_study: "",  //for not High Schoool
    //       study_institution: "",  //for not High Schoool
    //       continue_studies: false, //for not High Schoool
    //       gpa: 0.0, //for not High Schoool
    //       description_of_student: "I am a very hard-working learner",
    //       bursarred: false,
    //       current_bursaries: "", //only if bursarred is true
    //       workback: 2,
    //       website: "",
    //       marks: [
    //         {
    //           subject_name: "English",
    //           marks: 90.0
    //         },
    //         {
    //           subject_name: "Maths",
    //           marks: 75.0
    //         },
    //         {
    //           subject_name: "Afrikaans",
    //           marks: 85.0
    //         },
    //         {
    //           subject_name: "Life Orientation",
    //           marks: 90.0
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     Bursary_ID: this.data.bursary_id,
    //     Student_ID: 0,
    //     Application_Date: "02-03-2021",
    //     Status: "Declined",
    //     student: {
    //       student_id: "U0002",
    //       first_name: "Daniel",
    //       last_name: "James",
    //       date_of_birth: "03-03-1999",
    //       email_address: "daniel@gmail.com",
    //       nationality: true,
    //       contact_number: "+27 80 783 0000",
    //       city: "Johannesburg",
    //       province: "Free State",
    //       disability: false,
    //       current_academic_level: "Undergraduate",
    //       grade: 0.0, //for high school
    //       syllabus: "",  //for high school
    //       average: 0.0, //for high school
    //       currently_studying: "Civil Engineering",  //for not High Schoool
    //       year_of_study: "Year 3",  //for not High Schoool
    //       study_institution: "University of Pretoria",  //for not High Schoool
    //       continue_studies: false, //for not High Schoool
    //       gpa: 75.0, //for not High Schoool
    //       description_of_student: "I am an ambitious learner",
    //       bursarred: false,
    //       current_bursaries: "", //only if bursarred is true
    //       workback: 2,
    //       website: "www.james.co.za",
    //       marks: []
    //     }
    //   },
    //   {
    //     Bursary_ID: this.data.bursary_id,
    //     Student_ID: 0,
    //     Application_Date: "02-03-2021",
    //     Status: "Accepted",
    //     student: {
    //       student_id: "U0010",
    //       first_name: "Marcus",
    //       last_name: "Rashford",
    //       date_of_birth: "03-03-1994",
    //       email_address: "marcus.rashford@gmail.com",
    //       nationality: false,
    //       contact_number: "+27 80 783 8000",
    //       city: "Pretoria",
    //       province: "Gauteng",
    //       disability: true,
    //       current_academic_level: "Postgraduate",
    //       grade: 0.0, //for high school
    //       syllabus: "",  //for high school
    //       average: 0.0, //for high school
    //       currently_studying: "Civil Engineering",  //for not High Schoool
    //       year_of_study: "Honours",  //for not High Schoool
    //       study_institution: "UJ",  //for not High Schoool
    //       continue_studies: false, //for not High Schoool
    //       gpa: 70.0, //for not High Schoool
    //       description_of_student: "I am a inquisitive learner",
    //       bursarred: false,
    //       current_bursaries: "", //only if bursarred is true
    //       workback: 2,
    //       website: "www.marcus.co.za",
    //       marks: []
    //     }
    //   },
    // ]
  }

  acceptDialogue(acceptItem) {
    let before = acceptItem.Status;
    this.alert.create({
      header: "Confirmation",
      subHeader: "Are you sure you would like to accept " + acceptItem.first_name + " " + 
        acceptItem.last_name + " into the shortlist for " + "Bursary xyz" + "?",
      buttons:[{
        text: "Accept",
        handler:(data) => {
          //send request to backend
          acceptItem.Status = "Accepted";
          console.log(acceptItem);
          this._apiService.acceptApplicant(acceptItem).subscribe((res) => {
            console.log("REQUEST SUCCESS ===", res);
            this.the_message = res["message"];
            this.printMessage();
            console.log(acceptItem.first_name + " " + acceptItem.last_name + " has been accepted to " 
          + "Bursary xyz");
          }, (error:any) => {
            //acceptItem.Status = before;
            this.the_message = 'error';// error;
            this.printMessage();
            console.log("ERROR ===", error);
          });
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
    let before = acceptItem.Status;
    this.alert.create({
      header: "Decline",
      subHeader: "Are you sure you would like to decline " + acceptItem.first_name + " " + 
        acceptItem.last_name + " into the shortlist for the bursary " + "Bursary xyz" + "?",
      buttons:[{
        text: "Decline",
        handler:(data) => {
          //this.status = 'Declined!'
          //send request to backend
          acceptItem.Status = "Declined";
          console.log(acceptItem);
          this._apiService.declineApplicant(acceptItem).subscribe((res) => {
            console.log("REQUEST SUCCESS ===", res);
            this.the_message = res["message"];
            this.printMessage();
            console.log(acceptItem.first_name + " " + acceptItem.last_name + " has been declined to " + "Bursary xyz");
          }, (error:any) => {
            this.the_message = 'error';// error;
            this.printMessage();
            //acceptItem.Status = before;
            console.log("ERROR ===", error);
          });
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

  filterStudent(ev:any) {
    //this.initializeJSONData();
    this.applicantsData = this.allApplicants;
    const val = ev.target.value;
    if (val && val.trim()!= ''){
      this.applicantsData = this.applicantsData.filter(
        (item)=>{
          this.applicantsData_length = this.applicantsData.length;
          return (item.Status.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      )
    }
  }

  async printMessage() {
    const toast = this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: this.the_message
    });

    (await toast).present();
    this.the_message = "";
  }

}
