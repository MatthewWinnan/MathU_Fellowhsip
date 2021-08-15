import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { ToastController } from '@ionic/angular';
import { __await } from 'tslib';
import { Sponsor_users } from '../../model/sponsor_users';
import { Company } from '../../model/company';
import { student_users } from '../../model/student_users';
import { Form, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
//import { group } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  the_message : string = "";

  //Password variables
  showPassword = false;
  passwordToggleIcon = 'eye';
  c_showPassword = false;
  c_passwordToggleIcon = 'eye';

  //form input fields --> Student only
  //??

  //form input fields --> Sponsor only
  addSponsor: FormGroup;
  get company_name() {
    return this.addSponsor.get('company_name');
  }
  get company_industry() {
    return this.addSponsor.get('company_industry');
  }

  //for input fields --> common for both
  get first_name() {
    return this.addSponsor.get('first_name');
  }
  get last_name() {
    return this.addSponsor.get('last_name');
  }
  get email_address() {
    return this.addSponsor.get('email_address');
  }
  get password() {
    return this.addSponsor.get('password');
  }
  get c_password() {
    return this.addSponsor.get('c_password');
  }

  // errorMessages
  public errorMessages = {
    company_name: [
      { type: 'required', message: 'Company Name is required' },
    ],
    company_industry: [
      { type: 'required', message: 'Company Industry is required' },
    ],
    first_name: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name cannot be longer than 100 charcters'}
    ],
    last_name: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Last Name cannot be longer than 100 charcters'}
    ],
    email_address: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password has to be longer than 8 characters'}
    ],
    // c_password: [
    //   { type: 'required', message: 'Password is required' }
    // ],

  }

  



  sponsor = new Sponsor_users() ;
  //Student initialize credentials
  student : student_users;
  student_name : string="";
  student_surname : string="";
  //Sponsor initialize credentials
  //sponor : Sponsor_users;
  //company_name : string = "";
  //company_industry : string = "";
  //f_name : string = "";
  //l_name : string = "";
  //email_address : string = "";
  //password : string = "";
  //c_password : string = "";
  
  

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    public _apiService: ApiService,
    public toastController: ToastController,
    
  ) { 
    this.sponsor.company = new Company();
   }

  ngOnInit() { 
    this.addSponsor = this.formBuilder.group({
      company_name: ['', [Validators.required]],
      company_industry: ['', [Validators.required]],
      first_name: ['', [Validators.required, Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.maxLength(100)]],
      email_address: ['', 
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      c_password: [''],
    },
    {
      validator: [this.MustMatch('password', 'c_password')],
    });

  }

  get sponsorControl() {
    return this.addSponsor.controls;
  }

  //register code for the students
  registerMe_Student(){
    // put in code 
    //console.log(this.company_name, this.company_industry, this.f_name, this.l_name, this.email_address, this.password, this.c_password)
    if (this.student_name == ""){
      this.the_message = 'Please enter a name';
      this.printMessage();
    }
    else if (this.student_surname == ""){
      this.the_message = 'Please eneter your surname';
      this.printMessage();
    }
    else{
      let data = {
        //made dummy variables so project can function
        id : 0,
        student_id : "",
        first_name_of_student : "",
        last_name_of_student : "",
        email_address : "",
        password : "",
      inactive : "",
      isVerified : "",
      regisered_date : "",
      last_login : "",

        // company_name : this.company_name, 
        // company_industry : this.company_industry,
        // f_name : this.f_name,
        // l_name : this.l_name,
        // email_address : this.email_address,
        // password : this.password,
      }
      
    }
    console.log(this.student_name, this.student_surname);
    //this.router.navigate(['./login']);
    this.router.navigate(['./student-view-profile']);
  }

  public addSponsorSubmit() {
    if(this.addSponsor.invalid){
      return;
    }
    else{
      this._apiService.registerSponsor(this.sponsor).subscribe((res:Sponsor_users) => {
        console.log("REQUEST SUCCESS ===", res);
        //this.the_message = res;
        //"Successfully created an account. Check your email for the activation email.";
        this.the_message = res["message"];
        this.printMessage();
        if (this.the_message == "Success!"){
          this.router.navigate(['./login']);
        }
      }, (error:any) => {
        this.the_message = 'error';// error;
        this.printMessage();
        console.log("ERROR ===", error);
      });
    }
  }


  //Register code for the sponsors
  registerMeSponsor(){
    // put in code 
    //console.log(this.company_name, this.company_industry, this.f_name, this.l_name, this.email_address, this.password, this.c_password)
    console.log(this.sponsor);
    //this.router.navigate(['./view-profile']);
    this._apiService.registerSponsor(this.sponsor).subscribe((res:Sponsor_users) => {
      console.log("REQUEST SUCCESS ===", res);
      //this.the_message = res;
      //"Successfully created an account. Check your email for the activation email.";
      this.the_message = res["message"];
      this.printMessage();
      if (this.the_message == "Success!"){
        this.router.navigate(['./login']);
      }
    }, (error:any) => {
      this.the_message = 'error';// error;
      this.printMessage();
      console.log("ERROR ===", error);
    });
    
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

  MustMatch(controlName: string, matchingControlName: string): ValidatorFn{
    return (controls: AbstractControl) => {
      let control = controls.get(controlName);
      let matchingControl = controls.get(matchingControlName);

      if (matchingControl.errors && !matchingControl.errors.matching) {
        return null;
      }

      if (control.value !== matchingControl.value){
        controls.get(matchingControlName).setErrors({ matching: true });
        return{
          matching: true
        };
      }
      else{
        return null;
      }
      

    };
    
  }
}
