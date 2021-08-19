import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-more-applicants',
  templateUrl: './view-more-applicants.page.html',
  styleUrls: ['./view-more-applicants.page.scss'],
})
export class ViewMoreApplicantsPage implements OnInit {
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
      console.log(this.data);
    }
  }

}
