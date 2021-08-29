import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { student_users } from '../../../model/student_users';
import { Router } from '@angular/router';
import { Students_marks } from 'src/app/model/subjects_marks';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './student-view-profile.page.html',
  styleUrls: ['./student-view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  dateToday = new Date().toISOString().substring(0,10);
  thisStudent: student_users = new student_users();
  userType: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private menuController: MenuController,
    public storage: Storage,
  ) { 
    //get data from storage 
    this.getUserType();
    this.getStudent();
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

  ionViewWillEnter() {
    this.menuController.enable(true, 'stu');
  }

  doRefresh(event) {
    //window.location.reload();
    this.getStudent;
  }

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

  getStudent(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.thisStudent = val["student"];
      console.log("called getStudentType");
      console.log(this.thisStudent);  
    }, (err)=>{
      this.thisStudent;
    })
  }


}


