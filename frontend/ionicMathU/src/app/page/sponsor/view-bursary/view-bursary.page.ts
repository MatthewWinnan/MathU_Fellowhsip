import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Company } from '../../../model/company';
import { BursaryService } from '../../../service/bursary.service';

@Component({
  selector: 'app-view-bursary',
  templateUrl: './view-bursary.page.html',
  styleUrls: ['./view-bursary.page.scss'],
})
export class ViewBursaryPage implements OnInit {
  isFetching = false;
  jsonData:Bursary[] = [];
  jsonData_length = 0;
  ourCompany = new Company();
  
  constructor(
    private platform: Platform,
    public navCtrl:NavController,
    private router:Router,
    private dataService: DataService,
    public _apiService: BursaryService,
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
    this.jsonData = [
      {
        "company_id": 0,
        "bursary_name": "Retirement",
        "bursary_type": "Work Back",
        "bursary_description": "This is a good bursary",
        "WB_duration": 4,
        "min_age": 13,
        "max_age": 26,
        "academic_level": "Undergraduate",
        "study_field": "Law",
        "minimum_year_required": 2,
        "min_average": 76,
        "RSA_citizen": true,
        "financial_need": false,
        "study_further": false,
        "disability": true,
        "province": "Gauteng",
        "bursary_covers": [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
            "Transport"
        ],
        "closing_date": "2021-11-16",
        "shortlist_date": "2021-11-20",
        "email_address": "name@gmail.com",
        "bursary_duration": 2,
        "isVisible": true
      },
      {
        "company_id": 0,
        "bursary_name": "Amazing",
        "bursary_type": "Bursary",
        "bursary_description": "This is an amazing bursary",
        "WB_duration": 0,
        "min_age": 20,
        "max_age": 23,
        "academic_level": "Undergraduate",
        "study_field": "Law",
        "minimum_year_required": 2,
        "min_average": 76,
        "RSA_citizen": true,
        "financial_need": true,
        "study_further": false,
        "disability": false,
        "province": "Gauteng",
        "bursary_covers": [
            "Accommodation Fees",
            "Books Allowance",
            "Transport"
        ],
        "closing_date": "2021-11-16",
        "shortlist_date": "2021-11-20",
        "email_address": "name@gmail.com",
        "bursary_duration": 2,
        "isVisible": true
      },
      {
        "company_id": 0,
        "bursary_name": "Help out",
        "bursary_type": "Full Bursary",
        "bursary_description": "This is a bursary",
        "WB_duration": 0,
        "min_age": 13,
        "max_age": 26,
        "academic_level": "High School",
        "study_field": "",
        "minimum_year_required": 0,
        "min_average": 76,
        "RSA_citizen": true,
        "financial_need": false,
        "study_further": true,
        "disability": false,
        "province": "Gauteng",
        "bursary_covers": [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
        ],
        "closing_date": "2021-12-16",
        "shortlist_date": "2021-12-20",
        "email_address": "name@gmail.com",
        "bursary_duration": 2,
        "isVisible": true
      }
    ];
    this.jsonData_length = this.jsonData.length;
    // this.isFetching = true;
    // // all bursaries with company_id that are 
    // this._apiService.getAllBursary(this.ourCompany).subscribe((res:Bursary[]) => {
    //   console.log("REQUEST SUCCESS ===", res);
    //   this.jsonData = res;
    //   if(res!=null){
    //     this.jsonData_length = this.jsonData.length;
    //   }
    //   this.isFetching = false;
    // }, (error:any) => {
    //   console.log("ERROR ===", error);
    //   this.jsonData = [];
    // });
  }

  filterBursary(ev:any) {
    this.initializeJSONData();
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
      header: "Deactivate " + deactivateItem.bursary_name + "!",
      subHeader: "Warning: Once deactivated, you will not be able to re-activate the bursary!",
      buttons:[{
        text: "Deactivate",
        handler:(data) => {
          deactivateItem.isVisible = false;
          console.log(deactivateItem.bursary_name + " has been deactivated.");
          this.router.navigateByUrl('view-bursary');
          //send request to backend 
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

}
