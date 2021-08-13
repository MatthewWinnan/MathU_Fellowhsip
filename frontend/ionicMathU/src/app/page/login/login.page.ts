import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';
  email_address : string="";
  password : string="";

  constructor(private router:Router, public storage: Storage) { 
    this.getValue();
  }

  ngOnInit() {
  }

  logMeIn(){
    // put in code 
    this.setValue();
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

  setValue(){
    this.storage.set('name', this.email_address);
  }

  getValue(){
    this.storage.get('name').then( (val) => {
      console.log("value is " + val);
    }, (err)=>{
      console.log("empty");
    })
  }

}
