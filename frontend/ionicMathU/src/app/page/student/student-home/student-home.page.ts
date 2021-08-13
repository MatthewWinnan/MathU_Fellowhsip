import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bursary } from 'src/app/model/bursary';

let bursary = new Bursary;
let someArray = ["company_id", "bursary_id"];
let i = 0;

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})

export class StudentHomePage implements OnInit {

  /* Form Variables */
  companyName = "<company_name>";
  companyIndustry = "<company_industry>"
  bursaryName = bursary.bursary_name;
  fieldStudyNeeded = bursary.study_field;
  offerExpirationDate = bursary.closing_date;
  bursaryCoversFor = bursary.bursary_covers;
  latestAverageAbove = bursary.min_average;

  companyDescription: string = "<company_description>";
  companyURL: string = "<company_URL>";
  emailAddress = bursary.email_address;

  bursaryType: string = bursary.bursary_type;
  bursaryDuration = bursary.bursary_duration;
  academicLevel = bursary.academic_level;
  minYearRequired = bursary.minimum_year_required;

  ageMin = bursary.min_age;
  ageMax = bursary.max_age;

  RSACitizenNeeded: boolean = true;
  forFinancialAssistence: boolean = true;
  disability: boolean = true;

  studyFurther = bursary.study_further;

  documentsNeeded = [
    {docName: "CV", docCertified: "Yes"},
    {docName: "ID", docCertified: "Yes"},
    {docName: "Proof of Registration", docCertified: "Yes"},
  ];
  dateForFurtherCommunication: string = bursary.shortlist_date;   



  /* Rest of the Logic */
  showValid: boolean = false;
  viewMoreStr: string = "View More";
  viewLessStr: string = "View Less";


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /* the option on the right hand side to see if the nextBursary() must be used or applyBursary() */
  rightOption() {
    this.showValid ? this.applyBursary() : this.nextBursary()
  }

  /* the option on the left hand side to see if the prevBursary() must be used or dismissBursary() */
  leftOption() {
    this.showValid ? this.dismissBursary() : this.prevBursary()
  }

  nextBursary() {
    console.log("nextBursary()")
  }

  prevBursary() {
    console.log("prevBursary()")
  }
  
  applyBursary() {
    console.log("applyBursary()")
  }

  dismissBursary() {
    console.log("dismissBursary()")
  }

  viewMore() {
    console.log("viewMore()")
    this.showValid = !this.showValid
  }

  filter() {
    console.log("Filter()")
  }




}
