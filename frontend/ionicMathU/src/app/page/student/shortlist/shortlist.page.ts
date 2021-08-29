import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student_bursary } from 'src/app/model/student_bursary';
import { student_users } from 'src/app/model/student_users';
import { BursaryService } from 'src/app/service/bursary.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.page.html',
  styleUrls: ['./shortlist.page.scss'],
})


export class ShortlistPage implements OnInit {
  bursaryShortlist:Student_bursary[] = [];
  thisStudent: student_users = new student_users();
  userType: string = "";

  // Variables for messages for shortlist page
  bursariesInShortlist: boolean;
  noBursariesMessage4 = "No Bursaries in Shortlist."
  noBursariesMessage5 = "Let's change that."

  // Spinner Loading
  isChecking: boolean = true;
  
  constructor(
    private router: Router,
    public _apiService: BursaryService,
    public loadingController: LoadingController,
    public storage: Storage,
  ) { 
    //get data from storage 
    this.getUserType();
    this.getStudent();
  }

  ngOnInit() {
    /* this.presentLoading() */
    
    //stored in Storage (when login)
    //this.initialiseStudentData();
    //get data from storage 
    this.getUserType();
    this.getStudent();


    


  }

  /* async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'lines-small',
      message: 'Fetching Shortlist...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  } */

  isBursariesInShortlist() {
    let lenShortlist = this.bursaryShortlist.length
    this.bursariesInShortlist = false
    this.isChecking = false
    if (lenShortlist !== 0) {
      this.bursariesInShortlist = true
    }
  }

  initialiseShortlist(){
    console.log(this.thisStudent);
    //get all bursaries student applied for 
    this._apiService.getStudentBursaries(this.thisStudent).subscribe((res:Student_bursary[]) => {
      console.log("SHORTLIST REQUEST SUCCESS ===", res);
      this.bursaryShortlist = res;
      this.isBursariesInShortlist();
      //if(res!=null){
        //cater for no bursaries found!
      //}
    }, (error:any) => {
      console.log("ERROR ===", error);
      this.bursaryShortlist = [];
    });


    /*this.bursaryShortlist = [
      {
        Bursary_ID: 1,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-01-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
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
        }
      },
      {
        Bursary_ID: 5,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Accepted",
        Student: this.thisStudent,
        bursary: {
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
        }
      },
      {
        Bursary_ID: 6,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Declined",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 6,
          company_id: 2,
          bursary_name: "ElecEng",
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
            company_id: 2,
            company_name: "Eskom",
            company_industry: "Electricity",
            company_logo: "", //not implemented for now
            company_description: "This is a electricity company",
            company_URL: "www.eskom.com",
            number_of_reports: 0,
          }
        }
      },
      {
        Bursary_ID: 8,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
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
            company_description: "This is a medicine company",
            company_URL: "www.dischem.com",
            number_of_reports: 0,
          }
        }
      },
      {
        Bursary_ID: 10,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 10,
          company_id: 8,
          bursary_name: "AeroEng",
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
            company_id: 8,
            company_name: "NASA",
            company_industry: "Space",
            company_logo: "", //not implemented for now
            company_description: "This is a rocket company",
            company_URL: "www.nasa.com",
            number_of_reports: 0,
          }
        }
      },

      {
        Bursary_ID: 15,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 15,
          company_id: 10,
          bursary_name: "AeroEng",
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
            company_id: 10,
            company_name: "Bell",
            company_industry: "IT and Telecommunications",
            company_logo: "", //not implemented for now
            company_description: "This is a phone company",
            company_URL: "www.bell.com",
            number_of_reports: 0,
          }
        }
      },
    ];*/

    
  }

  /* Go to specific bursary on the Student Main Page*/
  goToBursaryView(bursID, k) {
    console.log("goToBursaryView() ran with the ",  bursID );
    k = bursID
    this.router.navigate(["/student-home", k])    
  }

  deleteApplication(bursID) {
    console.log("deleteApplication() ran with the ",  bursID )
  }

  doRefresh() {
    window.location.reload();
  }

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

  getStudent(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.thisStudent = val["student"];
      //console.log("called getStudentType");
      //console.log(this.thisStudent);  
      //api call to backend --> all bursaries with this student 
      this.initialiseShortlist();

      // See if there are items in teh shortlist
      this.isBursariesInShortlist();
    }, (err)=>{
      this.thisStudent;
    })
  }
}
