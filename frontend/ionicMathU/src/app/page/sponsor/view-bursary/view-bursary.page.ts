import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

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
  gmail = "";

  getValue(){
    this.storage.get('name').then( (val) => {
      this.gmail = "value is " + val;
    }, (err)=>{
      this.gmail = "empty";
    })
  }

  constructor( private platform: Platform, public storage: Storage) { 
    this.getValue();
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
        "bursary_type": "Full Bursary"
      },
      {
        "bursary_name": "why",
        "status": "Deactivated",
        "bursary_type": "Bursary"
      },
      {
        "bursary_name": "123",
        "status": "Closed",
        "bursary_type": "Work Back"
      },
      {
        "bursary_name": "ouch",
        "status": "Closed",
        "bursary_type": "Bursary"
      },
      {
        "bursary_name": "clap",
        "status": "Open",
        "bursary_type": "Partial Bursary"
      },
      {
        "bursary_name": "nop",
        "status": "Open",
        "bursary_type": "Partial Bursary"
      },
      {
        "bursary_name": "sga",
        "status": "Deactivated",
        "bursary_type": "Bursary"
      },
      {
        "bursary_name": "zyx",
        "status": "Open",
        "bursary_type": "Partial Bursary"
      },
      {
        "bursary_name": "abc",
        "status": "Deactivated",
        "bursary_type": "Partial Bursary"
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

}
