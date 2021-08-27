import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student_users } from '../../model/student_users';
// import {ViewStudentPageModule} from '../student/student-view-profile/student-view-profile.module';
// import { NavController } from '@ionic/angular';
import {NavparamService} from '../../service/navparam/navparam.service';
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
    this.router.navigate(['./student-view-profile']);

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
