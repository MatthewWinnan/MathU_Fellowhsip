import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { LoginApiService } from '../../service/login-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  the_message : string = "";

  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    private router:Router, 
    public storage: Storage, 
    private formBuilder: FormBuilder,
    public login_api: LoginApiService,
    public toastController: ToastController
  ) { 
    //this.getValue();
  }

  get email_address() {
    return this.loginUser.get('email_address');
  }
  get password() {
    return this.loginUser.get('password');
  }

  public errorMessages = {
    email_address: [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Name is required' }
    ]
  }

  loginUser = this.formBuilder.group({
    email_address: ['', 
    [
      Validators.required, 
      Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]
    ],
    password: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  public loginSubmit() {
    let login_data = this.loginUser.value;
    console.log(login_data);

    this.login_api.login_a_user(login_data).subscribe((res) => {
      console.log("SUCCESS ===", res);
      this.the_message = "You have been successfully logged in";
      this.printMessage();
      this.setValue(res);
      this.getValue();  //remove later (to test)
      //this.router.navigate(['./view-profile']);
      //uuncomment later
    }, (error:any) => {
      this.the_message = error.statusText;
      //this.the_message = 'error';// error;
      this.printMessage();
      console.log("ERROR ===", error);
    });

    



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

  setValue(value){
    this.storage.set('name', value);
  }

  getValue(){
    this.storage.get('name').then( (val) => {
      console.log("value is " + val);
    }, (err)=>{
      console.log("empty");
    })
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
