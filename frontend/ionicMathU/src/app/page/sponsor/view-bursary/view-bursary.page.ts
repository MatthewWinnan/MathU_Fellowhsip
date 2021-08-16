import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { NavController, Platform } from '@ionic/angular';
import { ViewMoreBursaryPage } from '../view-more-bursary/view-more-bursary.page';
import { ViewMoreBursaryPageModule } from '../view-more-bursary/view-more-bursary.module';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-view-bursary',
  templateUrl: './view-bursary.page.html',
  styleUrls: ['./view-bursary.page.scss'],
})
export class ViewBursaryPage implements OnInit {
  //bursary = new Bursary();
  // jsonData:Bursary[] = [];
  jsonData:any = [];
  b_status : string = "Open";

  constructor(
    private platform: Platform,
    public navCtrl:NavController,
    private router:Router,
    private dataService: DataService
  ) { 
    this.platform.ready().then(()=>{
      this.initializeJSONData();
    });
    //this.initializeJSONData();
  }

  ngOnInit() {
  }

  initializeJSONData() {
    // all bursaries with company_id that are 
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
    


      // {
      //   "bursary_id": 1,
      //   "bursary_name": "Bursary1",
      //   "status": "Closed",
      //   "bursary_type": "Full Bursary",
      //   "bursary_description" : "looking for student with 65% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 2,
      //   "bursary_name": "why",
      //   "status": "Deactivated",
      //   "bursary_type": "Bursary",
      //   "bursary_description" : "looking for student with 90% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 3,
      //   "bursary_name": "123",
      //   "status": "Closed",
      //   "bursary_type": "Work Back",
      //   "bursary_description" : "looking for student with 60% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 4,
      //   "bursary_name": "ouch",
      //   "status": "Closed",
      //   "bursary_type": "Bursary",
      //   "bursary_description" : "looking for student with 70% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 5,
      //   "bursary_name": "clap",
      //   "status": "Open",
      //   "bursary_type": "Partial Bursary",
      //   "bursary_description" : "looking for student with 67% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 6,
      //   "bursary_name": "nop",
      //   "status": "Open",
      //   "bursary_type": "Partial Bursary",
      //   "bursary_description" : "looking for student with 76% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 7,
      //   "bursary_name": "sga",
      //   "status": "Deactivated",
      //   "bursary_type": "Bursary",
      //   "bursary_description" : "looking for student with 90% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 8,
      //   "bursary_name": "zyx",
      //   "status": "Open",
      //   "bursary_type": "Partial Bursary",
      //   "bursary_description" : "looking for student with 100% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // },
      // {
      //   "bursary_id": 9,
      //   "bursary_name": "abc",
      //   "status": "Deactivated",
      //   "bursary_type": "Partial Bursary",
      //   "bursary_description" : "looking for student with 75% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      // }
    ];
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

  openDeactivate(){
    alert("Are you sure?");
  }

  openViewInfo(viewInfoItem){ //passData
    //console.log("clicked");
    //this.navCtrl.navigateForward('./view-more-bursary/view-more-bursary.page');
    
    //console.log(viewInfoItem);
    this.dataService.setData(1, viewInfoItem);
    this.router.navigateByUrl('view-more-bursary/1');
  }

}
