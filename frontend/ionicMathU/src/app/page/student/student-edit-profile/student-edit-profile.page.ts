import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users';
import { AllUsers } from '../../../model/all_users';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './student-edit-profile.page.html',
  styleUrls: ['./student-edit-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);
  thisStudent: student_users = new student_users();
  allUsersDetials = new AllUsers();
  userType: string = "";
  the_message : string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    public _apiService: ApiService,
    public toastController: ToastController,
    public storage: Storage,
  ) {
    //get data from storage 
    this.getUserType();
    this.getStudentType();
    this.getAllUsersDetails();
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
    average: [60.0],
    currently_studying: [''],
    year_of_study: [''],
    study_institution: [''],
    continue_studies: [false],
    gpa: [60.0],
    description_of_student: [''],
    website: [''],
    bursarred: [''],
    current_bursaries: [''],
    workback: [0],
    
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
  };

  public addStudentDetails() {
    //console.log(this.addStudent_details.value);
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
    console.log(this.thisStudent);
    this._apiService.editStudentProfile(this.thisStudent).subscribe((res) => {
      this.allUsersDetials.student = this.thisStudent;
      console.log("EDIT API SUCCESS ===", res);
      this.the_message = res["message"];
      this.printMessage();
      console.log(this.the_message.substring(0,7));
      if (this.the_message.substring(0,7) == "Success"){
        //overwrite values in storage
        this.setValue(this.allUsersDetials);
        //console.log("move to different page");
        this.router.navigateByUrl('./student-view-profile/2');
      }
    }, (error:any) => {
      this.the_message = 'error';// error;
      this.printMessage();
      console.log("ERROR ===", error);
    });
  }

  ngOnInit() {
    this.getStudentType();
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
      average: [this.thisStudent.average],
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

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

  getStudentType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.thisStudent = val["student"];
    }, (err)=>{
      this.thisStudent;
    })
  }

  getAllUsersDetails(){
    this.storage.get('name').then( (val) => {
      this.allUsersDetials = val;
    }, (err)=>{
      console.log("all detials error " + err);
    })    
  }

  setValue(value){
    this.storage.clear();
    //this.storage.set('name', "");
    this.storage.set('name', value);
  }

  async printMessage() {
    const toast = this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: this.the_message
    });

    (await toast).present();
    this.the_message = "";
  }

}


