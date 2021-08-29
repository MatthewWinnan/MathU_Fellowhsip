import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users';
import { Router } from '@angular/router';
import { Students_marks } from 'src/app/model/subjects_marks';
@Component({
  selector: 'app-view-profile',
  templateUrl: './student-view-profile.page.html',
  styleUrls: ['./student-view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);
  thisStudent: student_users = new student_users();

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
  ) { 
    //get data from storage 
    //for now creating a dummy dataset
    this.thisStudent.id = 35;
    this.thisStudent.student_id = "U035";
    this.thisStudent.first_name = "Mary";
    this.thisStudent.last_name = "Lamb";
    this.thisStudent.date_of_birth = "2005-08-28";
    this.thisStudent.email_address = "mary@gmail.com";
    //the above fields are filled it from register 
    this.thisStudent.nationality = true;
    this.thisStudent.contact_number = "";
    this.thisStudent.city = "";
    this.thisStudent.province = "";
    this.thisStudent.disability = null;
    this.thisStudent.current_academic_level = "";
    this.thisStudent.grade = 0;
    this.thisStudent.syllabus = "";
    this.thisStudent.average = 0;
    this.thisStudent.currently_studying = "";
    this.thisStudent.year_of_study = "";
    this.thisStudent.study_institution = "";
    this.thisStudent.continue_studies = false;
    this.thisStudent.gpa = 0;
    this.thisStudent.description_of_student = "";
    this.thisStudent.bursarred = false;
    this.thisStudent.current_bursaries = "";
    this.thisStudent.workback = 0;
    this.thisStudent.website = "www.jadon.com";
    this.thisStudent.Students_marks = [
      {
        "subject_name": "English",
        "marks": 90.0
      },
      {
        "subject_name": "Afrikaans",
        "marks": 80.0
      }
    ];

      //this.student = this.studentData.getStudent();
      //console.log(this.student.last_name);
  }

  public gotoEdit() {
    //this.studentData.setStudent(this.student);
    this.router.navigate(['./student-edit-profile']);
    
  }

  ngOnInit() {

  }

  calculateAge(){
    let dob = new Date(this.thisStudent.date_of_birth);
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return age;
  }

}


