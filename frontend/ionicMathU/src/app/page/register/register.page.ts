import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ToastController } from '@ionic/angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  company_name : string = "";
  company_industry : string = "";
  f_name : string = "";
  l_name : string = "";
  email_address : string = "";
  password : string = "";
  c_password : string = "";
  the_message : string = "";

  showPassword = false;
  passwordToggleIcon = 'eye';
  c_showPassword = false;
  c_passwordToggleIcon = 'eye';

  constructor(
    private router:Router,
    public _apiService: ApiService,
    public toastController: ToastController
  ) {  }

  ngOnInit() {
  }

  registerMe(){
    // put in code 
    //console.log(this.company_name, this.company_industry, this.f_name, this.l_name, this.email_address, this.password, this.c_password)
    if (this.company_name == ""){
      this.the_message = 'Company name needed';
      this.printMessage();
    }
    else if (this.company_industry == ""){
      this.the_message = 'Company industry needed';
      this.printMessage();
    }
    else if (this.f_name == ""){
      this.the_message = 'First name needed';
      this.printMessage();
    }
    else if (this.l_name == ""){
      this.the_message = 'Last name needed';
      this.printMessage();
    }
    else if (this.email_address == ""){
      this.the_message = 'Email address needed';
      this.printMessage();
    }
    else if (this.password == ""){
      this.the_message = 'Password needed';
      this.printMessage();
    }
    else if (this.c_password == ""){
      this.the_message = 'Confirm your password';
      this.printMessage();
    }
    else if (this.password != this.c_password){
      this.the_message = 'Passwords dont match';
      this.printMessage();
    }
    else{
      let data = {
        company_name : this.company_name, 
        company_industry : this.company_industry,
        f_name : this.f_name,
        l_name : this.l_name,
        email_address : this.email_address,
        password : this.password,
      }

      this._apiService.registerSponsor(data).subscribe((res:any) => {
        //console.log("SUCCESS ===", res);
        this.the_message = res;
        //"Successfully created an account. Check your email fo the activation email.";
        this.printMessage();
        //Receive or send?
        this.company_name = "";
        this.company_industry = "";
        this.f_name = "";
        this.l_name = "";
        this.email_address = "";
        this.password = "";
        this.c_password = "";
        this.the_message = "";

        this.router.navigate(['./login']);
      }, (error:any) => {
        this.the_message = 'error';// error;
        this.printMessage();
        console.log("ERROR ===", error);
      });
    }
    
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

  c_togglePassword():void{
    this.c_showPassword = !this.c_showPassword;
    if (this.c_passwordToggleIcon == 'eye'){
      this.c_passwordToggleIcon = 'eye-off';
    }
    else{
      this.c_passwordToggleIcon = 'eye';
    }
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
