import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-view-bursary',
  templateUrl: './view-bursary.page.html',
  styleUrls: ['./view-bursary.page.scss'],
})
export class ViewBursaryPage implements OnInit {
  //bursary = new Bursary();
  // jsonData:Bursary[] = [];
  jsonData:any = [];
  b_status : string = "Pending";

  constructor( private platform: Platform) { 
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
        "status": "Pending",
        "bursary_type": "Full Bursary"
      },
      {
        "bursary_name": "why",
        "status": "Accepted",
        "bursary_type": "Bursary"
      },
      {
        "bursary_name": "123",
        "status": "Accepted",
        "bursary_type": "Work Back"
      },
      {
        "bursary_name": "ouch",
        "status": "Decline",
        "bursary_type": "Bursary"
      },
      {
        "bursary_name": "clap",
        "status": "Pending",
        "bursary_type": "Partial Bursary"
      },
      {
        "bursary_name": "nop",
        "status": "Decline",
        "bursary_type": "Partial Bursary"
      },
      {
        "bursary_name": "sga",
        "status": "Accepted",
        "bursary_type": "Bursary"
      },
      {
        "bursary_name": "zyx",
        "status": "Decline",
        "bursary_type": "Partial Bursary"
      },
      {
        "bursary_name": "abc",
        "status": "Accepted",
        "bursary_type": "Partial Bursary"
      }
    ];
  }

  filterBursary(ev:any) {
    console.log(this.b_status);
    this.initializeJSONData();
    const val = ev.target.value;
    if (val && val.trim()!= ''){
      this.jsonData = this.jsonData.filter(
        (item)=>{
          return (item.status.toLowerCase().indexOf(val.toLowerCase()) > -1);
          //return (item.bursary_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      )
    }
  }

  selectVal(val){
    alert("you have selected " + val.bursary_name + " of status " + val.status + " with " + val.bursary_type);
  }

}
