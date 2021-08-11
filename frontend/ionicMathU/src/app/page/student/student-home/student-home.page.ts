import { Component, OnInit } from '@angular/core';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IonItem, IonList } from '@ionic/angular';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})
export class StudentHomePage implements OnInit {

  /* Form Variables */
  companyName: string = "<company_Name>";
  companyIndustry: string = "<company_industry>"
  bursaryName: string = "<bursary_Name>";
  fieldStudyNeeded: string = "<field_study_needed>";
  offerExpirationDate: string = "<offer_expiration_date>";
  bursaryCoversFor: string = "<bursary_covers_for";
  latestAverageAbove: string = "<latest_average_above>";

  companyDescription: string = "<company_description>";
  companyURL: string = "<company_URL>";
  emailAddress: string = "<email_address>";

  bursaryType: string = "<bursary_type>";
  bursaryDuration: string = "<bursary_duration>";
  academicLevel: string = "<academic_level>";
  minYearRequired: string = "<min_year_required>";

  ageMin: string = "<age_min>";
  ageMax: string = "<age_max>";

  RSACitizenNeeded: boolean = true;
  forFinancialAssistence: boolean = true;
  disability: boolean = true;

  studyFurther: string = "<study_further>";

  documentsNeeded = [
    {docName: "CV", docCertified: "Yes"},
    {docName: "ID", docCertified: "Yes"},
    {docName: "Proof of Registration", docCertified: "Yes"},
  ];
  dateForFurtherCommunication: string = "<date_for_further_communication>"   



  /* Rest of the Logic */
  showValid: boolean = false;
  viewMoreStr: string = "View More";
  viewLessStr: string = "View Less";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  rightOption() {
    this.showValid ? this.applyBursary() : this.nextBursary()
  }

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
