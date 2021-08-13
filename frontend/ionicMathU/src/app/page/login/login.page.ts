import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';

  email_address: string = "";
  password: string = "";

  constructor(
    private router:Router,
    private storageService: StorageService
  ) { 

  }

  ngOnInit() {
  }

  logMeIn(){
    // put in code 
    //console.log(this.email_address + " " + this.password);
    
    this.storageService.store('user', this.email_address);


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
