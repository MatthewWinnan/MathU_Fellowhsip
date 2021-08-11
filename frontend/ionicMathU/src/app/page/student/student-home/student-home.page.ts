import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})
export class StudentHomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  nextBursary() {
    console.log("NextBursary()")
  }

  prevBursary() {
    console.log("PrevBursary()")
  }

  viewMore() {
    console.log("ViewMore()")
    /* this.router.navigate(['/bursary-more-info']) */
  }

  filter() {
    console.log("Filter()")
  }

}
