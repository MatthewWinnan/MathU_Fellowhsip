import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student_bursary } from 'src/app/model/student_bursary';

@Component({
  selector: 'app-view-more-applicants',
  templateUrl: './view-more-applicants.page.html',
  styleUrls: ['./view-more-applicants.page.scss'],
})
export class ViewMoreApplicantsPage implements OnInit {
  data:Student_bursary;

  dateToday = new Date().toISOString().substring(0,10);

  constructor(
    private route:ActivatedRoute
  ) { 
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData'];
      console.log(this.data);
      this.calculateAge();
    }
  }

  calculateAge(){
    let dob = new Date(this.data.student.date_of_birth);
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return age;
  }
  

}
