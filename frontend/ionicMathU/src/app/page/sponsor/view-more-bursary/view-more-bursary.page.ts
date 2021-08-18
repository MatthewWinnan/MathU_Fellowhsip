import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-view-more-bursary',
  templateUrl: './view-more-bursary.page.html',
  styleUrls: ['./view-more-bursary.page.scss'],
})
export class ViewMoreBursaryPage implements OnInit {
  data;

  constructor(
    private route:ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(info=> {
      if(info && info.myData){
        this.data = this.route.snapshot.data['myData'];
      }
    });
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData'];
    }
  }

}
