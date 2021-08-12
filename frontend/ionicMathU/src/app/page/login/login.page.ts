import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student_users } from '../../model/student_users.model';
// import {ViewStudentPageModule} from '../student/student-view-profile/student-view-profile.module';
// import { NavController } from '@ionic/angular';
import {NavparamService} from '../../navparam.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';
  student = new student_users();
  constructor(
    private router:Router,
    private navParamService:NavparamService,
    ) { 

  }

  ngOnInit() {

  }

  logMeIn(){
    //Here we get the user data and send the input data to the login page

    //User data
    let User = {
      user_id : "s18045",
    }

    //Logic to see type of user and route it accordingly
    if (User.user_id[0]=="s")
    {
      //We can assign the return object depending on who logged in to here
      this.student.email_address="mcwinnan@gmail.com";
      this.student.first_name_of_student="Matthew";
      this.student.last_name_of_student="Winnan";
      this.navParamService.setStudent(this.student);
      this.router.navigate(['./student-view-profile']);

    }
    else if(User.user_id[0]=="u")
      {
        this.router.navigate(['./view-profile']);
      }

    // put in code 

  }

  goBack(){
    this.router.navigate(['./landing-page']);
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }

}
