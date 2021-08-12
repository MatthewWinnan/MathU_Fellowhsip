import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editEmployee() {
    // put in code 
    this.router.navigate(['./../edit-employee']);

  }

}
