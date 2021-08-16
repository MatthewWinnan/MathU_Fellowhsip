import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users.model';
import {NavparamService} from '../../../service/navparam/navparam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './student-edit-profile.page.html',
  styleUrls: ['./student-edit-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);
  student : student_users;
  name: any = '';
  surname: any = '';
  dob = '';
  email : any;
  number : any;
  student_city : any;
  student_province : any;
  nation : any;
  disable : any;
  academic_level : any;
  student_grade : any;
  student_syllabus : any;
  student_average : any;
  study : any;
  year_study : any;
  institution : any;
  continue : any;
  description : any;

  constructor(
    private formBuilder: FormBuilder,
    private studentData:NavparamService,
    private router:Router,

    ) {
      this.student = this.studentData.getStudent();
      this.name = this.student.first_name;
      this.surname = this.student.last_name;
      this.dob = this.student.date_of_birth;
      this.email = this.student.email_address;
      this.number = this.student.contact_number;
      this.student_city = this.student.city;
      this.student_province = this.student.province;
      this.nation = this.student.nationality;
      this.disable = this.student.disability;
      this.academic_level = this.student.current_academic_level;
      this.student_grade = this.student.grade;
      this.student_syllabus = this.student.syllabus;
      this.student_average = this.student.average;
      this.study = this.student.currently_studying;
      this.year_study = this.student.year_of_study;
      this.institution = this.student.study_institution;
      this.continue = this.student.continue_studies;
      this.description = this.student.description_of_student;
     }

  addStudent_details = this.formBuilder.group({
    first_name_of_student: [''],
    last_name_of_student: [''],
    data_of_birth: [''],
    email_address: [''],
    //password: [''],  
    contact_number: [''],
    city: [''],
    province: [''],
    RSA_citizen: [false],
    disability: [false],
    current_academic_level: [''],
    grade: [0],
    syllabus: [''],
    average: [0.0],
    currently_studying: [''],
    year_of_study: [''],
    study_institution: [''],
    continue_studies: [false],
    gpa: [0.0],
    description_of_student: [''],
  });

  //Gets for all the form's parameters
  get student_name() {
    return this.addStudent_details.get('first_name_of_student');
  }
  get student_surname() {
    return this.addStudent_details.get('last_name_of_student');
  }
  get data_of_birth() {
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
  get currently_studying() {
    return this.addStudent_details.get('currently_studying');
  }
  get year_of_study() {
    return this.addStudent_details.get('year_of_study');
  }
  get study_institution() {
    return this.addStudent_details.get('study_institution');
  }
  get disability() {
    return this.addStudent_details.get('disability');
  }
  get gpa() {
    return this.addStudent_details.get('gpa');
  }

  public addStudentDetails() {
    this.student.first_name = this.addStudent_details.value.first_name_of_student;
    this.student.last_name = this.addStudent_details.value.last_name_of_student;
    this.student.date_of_birth = this.addStudent_details.value.data_of_birth;
    this.student.email_address = this.addStudent_details.value.email_address;
    //password: [''],  
    this.student.contact_number = this.addStudent_details.value.contact_number;
    this.student.disability = this.addStudent_details.value.disability;
    this.student.nationality = this.addStudent_details.value.RSA_citizen;
    this.student.province = this.addStudent_details.value.province;
    this.student.city = this.addStudent_details.value.city;
    this.student.current_academic_level = this.addStudent_details.value.current_academic_level;
    this.student.grade = this.addStudent_details.value.grade;
    this.student.syllabus = this.addStudent_details.value.syllabus;
    this.student.average = this.addStudent_details.value.average;
    this.student.currently_studying = this.addStudent_details.value.currently_studying;
    this.student.year_of_study = this.addStudent_details.value.year_of_study;
    this.student.study_institution = this.addStudent_details.value.study_institution;
    this.student.continue_studies = this.addStudent_details.value.continue_studies;
    this.student.gpa = this.addStudent_details.value.gpa;
    this.student.description_of_student = this.addStudent_details.value.description_of_student;
    console.log(this.student);
    this.studentData.setStudent(this.student);
    this.router.navigate(['./student-view-profile']);
  }

  ngOnInit() {
  }

}


