import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.page.html',
  styleUrls: ['./view-applicants.page.scss'],
})
export class ViewApplicantsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Applicants=[{
    applicant_name: 'Jadon',
    applicant_lastName: 'Sancho',
    applicant_average: '65%'
  },
  {
    applicant_name: 'Daniel',
    applicant_lastName: 'James',
    applicant_average: '75%'
  },
  {
    applicant_name: 'Marcus',
    applicant_lastName: 'Rashford',
    applicant_average: '80%'
  },
]
}
