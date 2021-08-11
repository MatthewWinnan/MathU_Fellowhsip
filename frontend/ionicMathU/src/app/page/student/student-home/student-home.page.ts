import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})
export class StudentHomePage implements OnInit {

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
