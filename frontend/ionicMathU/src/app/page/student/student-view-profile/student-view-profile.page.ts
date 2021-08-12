import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './student-view-profile.page.html',
  styleUrls: ['./student-view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);

  constructor(private formBuilder: FormBuilder) { }

  addStudent_details = this.formBuilder.group({
    first_name_of_student: [''],
    last_name_of_student: [''],
    data_of_birth: [Date],
    email_address: [''],
    //password: [''],  
    contact_number: [''],
    city: [''],
    province: [''],
    RSA_citizen: [false],
    //study_further: [false],
    //disability: [false],
    current_academic_level: [''],
    grade: [0],
    syllabus: [''],
    average: [0.0],
    currently_studying: [''],
    year_of_study: [''],
    //study_institution: [''],
    //continue_studies: [false],
    //gpa: [0.0],
    //description_of_student: [''],
  });

  //Gets for all the form's parameters
  get student_name() {
    return this.addStudent_details.get('first_name_of_student');
  }
  get student_surname() {
    return this.addStudent_details.get('last_name_of_student');
  }
  get student_dob() {
    return this.addStudent_details.get('data_of_birth');
  }
  get contact_number() {
    return this.addStudent_details.get('contact_number');
  }
  get province() {
    return this.addStudent_details.get('province');
  }
  get RSA_citizen() {
    return this.addStudent_details.get('RSA_citizen');
  }
  get city() {
    return this.addStudent_details.get('city');
  }
  get current_academic_level() {
    return this.addStudent_details.get('current_academic_level');
  }
  get syllabus() {
    return this.addStudent_details.get('syllabus');
  }
  get grade() {
    return this.addStudent_details.get('grade');
  }
  get average() {
    return this.addStudent_details.get('average');
  }


  student = new student_users();

  public addStudentDetails() {
    console.log(this.addStudent_details.value)
  }

  ngOnInit() {
  }

}


