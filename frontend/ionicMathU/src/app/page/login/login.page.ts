import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }

  logMeIn(){
    // put in code 
    this.router.navigate(['./view-profile']);
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
