import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users.model';
import { Router } from '@angular/router';
import {NavparamService} from '../../../service/navparam/navparam.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './student-view-profile.page.html',
  styleUrls: ['./student-view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);
  student : student_users;
  constructor
    (
    private formBuilder: FormBuilder,
    private router:Router,
    private studentData:NavparamService
    ) 

    { 
      this.student = this.studentData.getStudent();
      console.log(this.student.last_name_of_student);
    }

  public gotoEdit() {
    this.studentData.setStudent(this.student);
    this.router.navigate(['./student-edit-profile']);
    
  }

  ngOnInit() {

  }

}


