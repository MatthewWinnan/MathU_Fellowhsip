import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './student-edit-profile.page.html',
  styleUrls: ['./student-edit-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);
  thisStudent:student_users = new student_users();

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
  ) {
      //get data from storage 
      //for now creating a dummy dataset
      this.thisStudent.student_id = "U0001";
      this.thisStudent.first_name = "Jadon";
      this.thisStudent.last_name = "Sancho";
      this.thisStudent.date_of_birth = "03-03-2005";
      this.thisStudent.email_address = "jadon@gmail.com";
      //the above fields are filled it from register 
      this.thisStudent.nationality = null;
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
      this.thisStudent.continue_studies = null;
      this.thisStudent.gpa = 0;
      this.thisStudent.description_of_student = "";
      this.thisStudent.bursarred = null;
      this.thisStudent.current_bursaries = "";
      this.thisStudent.workback = 0;
      this.thisStudent.website = "";
      this.thisStudent.Students_marks = [];

  }

  addStudent_details = this.formBuilder.group({
    contact_number: ['',[Validators.required, Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")]],
    rsa_citizen: [false],
    disability: [false],
    city: [''],
    province: [''],    
    current_academic_level: [''],
    grade: [0],
    syllabus: [''],
    average: [60.0,[Validators.min(60)]],
    currently_studying: [''],
    year_of_study: [''],
    study_institution: [''],
    continue_studies: [false],
    gpa: [60.0,[Validators.min(60)]],
    description_of_student: [''],
    website: [''],
    bursarred: [''],
    current_bursaries: [''],
    workback: [''],
    
  });

  //Gets for all the form's parameters
  get contact_number() {
    return this.addStudent_details.get('contact_number');
  }
  get rsa_citizen() {
    return this.addStudent_details.get('rsa_citizen');
  }
  get disability() {
    return this.addStudent_details.get('disability');
  }
  get city() {
    return this.addStudent_details.get('city');
  }
  get province() {
    return this.addStudent_details.get('province');
  }
  get current_academic_level() {
    return this.addStudent_details.get('current_academic_level');
  }
  get grade() {
    return this.addStudent_details.get('grade');
  }
  get syllabus() {
    return this.addStudent_details.get('syllabus');
  }
  get average() {
    return this.addStudent_details.get('average');
  }
  get currently_studying() {
    return this.addStudent_details.get('currently_studying');
  }
  get year_of_study() {
    return this.addStudent_details.get('year_of_study');
  }
  get study_institution() {
    return this.addStudent_details.get('study_institution');
  }
  get continue_studies() {
    return this.addStudent_details.get('continue_studies');
  }
  get gpa() {
    return this.addStudent_details.get('gpa');
  }
  get description_of_student() {
    return this.addStudent_details.get('description_of_student');
  }
  get website() {
    return this.addStudent_details.get('website');
  }
  get bursarred() {
    return this.addStudent_details.get('bursarred');
  }
  get current_bursaries() {
    return this.addStudent_details.get('current_bursaries');
  }
  get workback() {
    return this.addStudent_details.get('workback');
  }
  

  public errorMessages = {
    contact_number: [
      {type: 'required', message:'Contact Number is required'},
      {type: 'pattern', message:'Please enter valid Contact Number'},
    ],
    disability: [],
    average: [
      {type: 'min', message:'Average should atleast be 60'},
    ],
    gpa: [
      {type: 'min', message:'Average should atleast be 60'},
    ],
  };

  public addStudentDetails() {
    console.log(this.addStudent_details.value);
    this.thisStudent.contact_number = this.addStudent_details.value.contact_number;
    this.thisStudent.nationality = this.addStudent_details.value.rsa_citizen;
    this.thisStudent.disability = this.addStudent_details.value.disability;
    this.thisStudent.city = this.addStudent_details.value.city;
    this.thisStudent.province = this.addStudent_details.value.province;
    this.thisStudent.current_academic_level = this.addStudent_details.value.current_academic_level;
    this.thisStudent.grade = this.addStudent_details.value.grade;
    this.thisStudent.syllabus = this.addStudent_details.value.syllabus;
    this.thisStudent.average = this.addStudent_details.value.average;
    this.thisStudent.currently_studying = this.addStudent_details.value.currently_studying;
    this.thisStudent.year_of_study = this.addStudent_details.value.year_of_study;
    this.thisStudent.study_institution = this.addStudent_details.value.study_institution;
    this.thisStudent.continue_studies = this.addStudent_details.value.continue_studies;
    this.thisStudent.gpa = this.addStudent_details.value.gpa;
    this.thisStudent.description_of_student = this.addStudent_details.value.description_of_student;
    this.thisStudent.website = this.addStudent_details.value.website;
    this.thisStudent.bursarred = this.addStudent_details.value.bursarred;
    this.thisStudent.current_bursaries = this.addStudent_details.value.current_bursaries ;
    this.thisStudent.workback = this.addStudent_details.value.workback;
    // add in marks
    console.log(this.thisStudent);
    //this.router.navigate(['./student-view-profile']);
  }

  ngOnInit() {
    this.addStudent_details = this.formBuilder.group({
      contact_number: [this.thisStudent.contact_number,
        [
          Validators.required, 
          Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")
        ]
      ],
      rsa_citizen: [this.thisStudent.nationality],
      disability: [this.thisStudent.disability],
      city: [this.thisStudent.city],
      province: [this.thisStudent.province],
      current_academic_level: [this.thisStudent.current_academic_level],
      grade: [this.thisStudent.grade],
      syllabus: [this.thisStudent.syllabus],
      average: [this.thisStudent.average,[Validators.min(60)]],
      currently_studying: [this.thisStudent.currently_studying],
      year_of_study: [this.thisStudent.year_of_study],
      study_institution: [this.thisStudent.study_institution],
      continue_studies: [this.thisStudent.continue_studies],
      gpa: [this.thisStudent.gpa],
      description_of_student: [this.thisStudent.description_of_student],
      website: [this.thisStudent.website],
      bursarred: [this.thisStudent.bursarred],
      current_bursaries: [this.thisStudent.current_bursaries],
      workback: [this.thisStudent.workback],
    });
  }

}


