import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { NavController, Platform } from '@ionic/angular';
import { ViewMoreBursaryPage } from '../view-more-bursary/view-more-bursary.page';
import { ViewMoreBursaryPageModule } from '../view-more-bursary/view-more-bursary.module';

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
    public navCtrl:NavController
  ) { 
    this.platform.ready().then(()=>{
      this.initializeJSONData();
    });
    //this.initializeJSONData();
  }

  ngOnInit() {
  }

  initializeJSONData() {
    this.jsonData = [
      {
        "bursary_name": "Bursary1",
        "status": "Closed",
        "bursary_type": "Full Bursary",
        "bursary_description" : "looking for student with 65% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "why",
        "status": "Deactivated",
        "bursary_type": "Bursary",
        "bursary_description" : "looking for student with 90% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "123",
        "status": "Closed",
        "bursary_type": "Work Back",
        "bursary_description" : "looking for student with 60% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "ouch",
        "status": "Closed",
        "bursary_type": "Bursary",
        "bursary_description" : "looking for student with 70% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "clap",
        "status": "Open",
        "bursary_type": "Partial Bursary",
        "bursary_description" : "looking for student with 67% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "nop",
        "status": "Open",
        "bursary_type": "Partial Bursary",
        "bursary_description" : "looking for student with 76% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "sga",
        "status": "Deactivated",
        "bursary_type": "Bursary",
        "bursary_description" : "looking for student with 90% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "zyx",
        "status": "Open",
        "bursary_type": "Partial Bursary",
        "bursary_description" : "looking for student with 100% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      },
      {
        "bursary_name": "abc",
        "status": "Deactivated",
        "bursary_type": "Partial Bursary",
        "bursary_description" : "looking for student with 75% Lorem ipsum dolor sit amet. Sit corporis architecto et placeat cupiditate aut sapiente dolores. Ea dolor doloribus in inventore iusto ut aperiam quia qui facilis Quis! Aut officiis tempora et sequi fuga et consequatur labore et corporis cupiditate. Qui galisum itaque et sapiente perferendis cum adipisci rerum qui quia tempore in obcaecati dolores ut cumque perspiciatis."
      }
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

  openViewInfo(){
    //console.log("clicked");
    //this.navCtrl.navigateForward('./view-more-bursary/view-more-bursary.page');
  }

}
