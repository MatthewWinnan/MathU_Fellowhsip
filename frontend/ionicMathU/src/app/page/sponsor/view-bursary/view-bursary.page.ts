import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { AlertController, NavController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Company } from '../../../model/company';
import { BursaryService } from '../../../service/bursary.service';
import { Storage } from '@ionic/storage-angular';
import { AllUsers } from 'src/app/model/all_users';
import { Sponsor_users } from 'src/app/model/sponsor_users';

@Component({
  selector: 'app-view-bursary',
  templateUrl: './view-bursary.page.html',
  styleUrls: ['./view-bursary.page.scss'],
})
export class ViewBursaryPage implements OnInit {
  the_message : string = "";
  isFetching = false;
  jsonData:Bursary[] = [];
  jsonData_length = 0;
  ourCompany = new Company();
  allBursaries:Bursary[] = [];
  allUsersDetials = new AllUsers();
  userType: string = "";
  loggedSponsor = new Sponsor_users();
  //b_status : string = "Open";
  
  constructor(
    private platform: Platform,
    public navCtrl:NavController,
    private router:Router,
    private dataService: DataService,
    public _apiService: BursaryService,
    private alert: AlertController,
    public toastController: ToastController,
    public storage: Storage,
  ) { 
    this.platform.ready().then(()=>{
      this.getUserType();
      this.getLoggedSponsor();
      this.getCompanyDetails();
    });
  }

  ngOnInit() { }

  initializeJSONData() {
    // this.jsonData = [
    //   {
    //     "company_id": 0,
    //     "bursary_name": "Retirement",
    //     "bursary_type": "Work Back",
    //     "bursary_description": "This is a good bursary",
    //     "WB_duration": 4,
    //     "min_age": 13,
    //     "max_age": 26,
    //     "academic_level": "Undergraduate",
    //     "study_field": "Law",
    //     "minimum_year_required": 2,
    //     "min_average": 76,
    //     "RSA_citizen": true,
    //     "financial_need": false,
    //     "study_further": false,
    //     "disability": true,
    //     "province": "Gauteng",
    //     "bursary_covers": [
    //         "Accommodation Fees",
    //         "Meals",
    //         "Books Allowance",
    //         "Transport"
    //     ],
    //     "closing_date": "2021-11-16",
    //     "shortlist_date": "2021-11-20",
    //     "email_address": "name@gmail.com",
    //     "bursary_duration": 2,
    //     "isVisible": true
    //   },
    //   {
    //     "company_id": 0,
    //     "bursary_name": "Amazing",
    //     "bursary_type": "Bursary",
    //     "bursary_description": "This is an amazing bursary",
    //     "WB_duration": 0,
    //     "min_age": 20,
    //     "max_age": 23,
    //     "academic_level": "Undergraduate",
    //     "study_field": "Law",
    //     "minimum_year_required": 2,
    //     "min_average": 76,
    //     "RSA_citizen": true,
    //     "financial_need": true,
    //     "study_further": false,
    //     "disability": false,
    //     "province": "Gauteng",
    //     "bursary_covers": [
    //         "Accommodation Fees",
    //         "Books Allowance",
    //         "Transport"
    //     ],
    //     "closing_date": "2021-11-16",
    //     "shortlist_date": "2021-11-20",
    //     "email_address": "name@gmail.com",
    //     "bursary_duration": 2,
    //     "isVisible": true
    //   },
    //   {
    //     "company_id": 0,
    //     "bursary_name": "Help out",
    //     "bursary_type": "Full Bursary",
    //     "bursary_description": "This is a bursary",
    //     "WB_duration": 0,
    //     "min_age": 13,
    //     "max_age": 26,
    //     "academic_level": "High School",
    //     "study_field": "",
    //     "minimum_year_required": 0,
    //     "min_average": 76,
    //     "RSA_citizen": true,
    //     "financial_need": false,
    //     "study_further": true,
    //     "disability": false,
    //     "province": "Gauteng",
    //     "bursary_covers": [
    //         "Accommodation Fees",
    //         "Meals",
    //         "Books Allowance",
    //     ],
    //     "closing_date": "2021-12-16",
    //     "shortlist_date": "2021-12-20",
    //     "email_address": "name@gmail.com",
    //     "bursary_duration": 2,
    //     "isVisible": true
    //   }
    // ];
    // this.jsonData_length = this.jsonData.length;

    this.isFetching = true;
    //console.log(this.ourCompany);
    // all bursaries with company_id that are 
    this._apiService.getAllBursary(this.ourCompany).subscribe((res:Bursary[]) => {
      console.log("REQUEST SUCCESS ===", res);
      this.jsonData = res;
      this.allBursaries = this.jsonData;
      if(res!=null){
        this.jsonData_length = this.jsonData.length;
      }
      this.isFetching = false;
    }, (error:any) => {
      console.log("ERROR ===", error);
      this.jsonData = [];
    });
  }

  filterBursary(ev:any) {
    //this.initializeJSONData();
    this.jsonData = this.allBursaries;
    const val = ev.target.value;
    if (val && val.trim()!= ''){
      this.jsonData = this.jsonData.filter(
        (item)=>{
          //return (item.status.toLowerCase().indexOf(val.toLowerCase()) > -1);
          return (item.bursary_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      )
    }
  }

  openDeactivate(deactivateItem:Bursary){
    // console.log(deactivateItem);
    this.alert.create({
      header: "Deactivate: " + deactivateItem.bursary_name + "!",
      subHeader: "Warning: Once deactivated, you will not be able to re-activate the bursary!",
      buttons:[{
        text: "Deactivate",
        handler:(data) => {
          deactivateItem.isVisible = false;
          this.router.navigateByUrl('view-bursary');
          console.log(deactivateItem);
          //send api request 
          this._apiService.deactivateBursary(deactivateItem).subscribe((res:Bursary) => {
            console.log("REQUEST SUCCESS ===", res);
            this.the_message = deactivateItem.bursary_name + " has been deactivated.";
            this.printMessage();
            if (this.the_message.substring(0,7) == "Success"){
              this.router.navigateByUrl('./view-bursary');
            }
          }, (error:any) => {
            deactivateItem.isVisible = true;
            this.the_message = 'error';
            this.printMessage();
            console.log("ERROR ===", error);
          });
          //display toast
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

  openViewInfo(viewInfoItem){ 
    this.dataService.setData(1, viewInfoItem);
    this.router.navigateByUrl('view-more-bursary/1');
  }

  editBursary(editB){
    this.dataService.setData(1, editB);
    this.router.navigateByUrl('edit-bursary/1')
  }

  viewApplicants(viewAppItem){
    this.dataService.setData(1, viewAppItem);
    this.router.navigateByUrl('view-applicants/1')
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

  doRefresh(event) {
    //window.location.reload();
    this.initializeJSONData();
  }

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

  getCompanyDetails(){
    this.storage.get('name').then( (val) => {
      this.ourCompany = <Company>val["sponsor_users"]["company"];
      //console.log("in company details ");
      //console.log(this.ourCompany);
      this.initializeJSONData();
    }, (err)=>{
      console.log("company detials error " + err);
    })    
  }

  getLoggedSponsor(){
    this.storage.get('name').then( (val) => {
      this.loggedSponsor = <Sponsor_users>val["sponsor_users"];
      //console.log("in logged in sponsor details ");
      //console.log(this.loggedSponsor);
    }, (err)=>{
      console.log("logged in sponsor error " + err);
    })    
  }


}
