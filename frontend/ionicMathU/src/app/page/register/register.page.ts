import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api/api.service';
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
  sponsor = new Sponsor_users() ;
  //Student initialize credentials
  student = new student_users() ;
  //student_c_password : string = "";

  //student : student_users;
  //student_name : string="";
  //student_surname : string="";

  //Sponsor initialize credentials
  // sponor : Sponsor_users;
  // company_name : string = "";
  // company_industry : string = "";
  // f_name : string = "";
  // l_name : string = "";
  // email_address : string = "";
  // password : string = "";
  // c_password : string = "";

  //password: null; 
  public barLabel: string = "Password strength:";  
  dateToday = new Date().toISOString().substring(0,10);
  the_message : string = "";

  //Password variables
  showPassword = false;
  passwordToggleIcon = 'eye';
  c_showPassword = false;
  c_passwordToggleIcon = 'eye';

  //Student Password variables
  student_showPassword = false;
  student_passwordToggleIcon = 'eye';
  student_c_showPassword = false;
  student_c_passwordToggleIcon = 'eye';

  //form input fields --> Student only
  addStudent: FormGroup;
  get student_first_name() {
    return this.addStudent.get('student_first_name');
  }
  get student_last_name() {
    return this.addStudent.get('student_last_name');
  }
  get student_email_address() {
    return this.addStudent.get('student_email_address');
  }
  get student_password() {
    return this.addStudent.get('student_password');
  }
  get student_c_password() {
    return this.addStudent.get('student_c_password');
  }
  get student_date_of_birth(){
    return this.addStudent.get('student_date_of_birth');
  }

  //form input fields --> Sponsor only
  addSponsor: FormGroup;
  get company_name() {
    return this.addSponsor.get('company_name');
  }
  get company_industry() {
    return this.addSponsor.get('company_industry');
  }
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

    student_first_name: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name cannot be longer than 100 charcters'}
    ],
    student_last_name: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Last Name cannot be longer than 100 charcters'}
    ],
    student_email_address: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    student_password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password has to be longer than 8 characters'}
    ],
    student_date_of_birth: [
      { type: 'required', message: 'Date of Birth is required' },
    ],
    // c_password: [
    //   { type: 'required', message: 'Password is required' }
    // ],

  }

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

    this.addStudent = this.formBuilder.group({
      student_first_name: ['', [Validators.required, Validators.maxLength(100)]],
      student_last_name: ['', [Validators.required, Validators.maxLength(100)]],
      student_email_address: ['', [ Validators.required, Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$") ] ],
      student_password: ['', [Validators.required, Validators.minLength(8)]],
      student_c_password: [''],
      student_date_of_birth: ['', [Validators.required]],
    },
    {
      validator: [this.MustMatch('student_password', 'student_c_password')],
    });

      //   this.router.navigate(['./login']);
      // }, (error:any) => {
      //   this.the_message = 'error';// error;
      //   this.printMessage();
      //   console.log("ERROR ===", error);
      // });
    //}
    
  }

  get sponsorControl() {
    return this.addSponsor.controls;
  }

  get studentControl() {
    return this.addStudent.controls;
  }

  //register code for the students
  public addStudentSubmit() {
    if(this.addStudent.invalid){
      return;
    }
    else{
      this.student.first_name = this.addStudent.value.student_first_name;
      this.student.last_name = this.addStudent.value.student_last_name;
      this.student.email_address = this.addStudent.value.student_email_address;
      this.student.password = this.addStudent.value.student_password;
      this.student.date_of_birth = this.addStudent.value.student_date_of_birth.substring(0,10);
      console.log(this.student);

      this._apiService.registerStudent(this.student).subscribe((res) => {
        console.log("SUCCESS ===", res);
        this.the_message = res["message"];
        //"Successfully created an account. Check your email for the activation email.";
        this.printMessage();
        console.log(this.the_message.substring(0,7));
        if (this.the_message.substring(0,7) == "Success"){
          //this.router.navigate(['./login']);
        }
      }, (error:any) => {
        this.the_message = 'error';// error;
        this.printMessage();
        console.log("ERROR ===", error);
      });

      // this.router.navigate(['./student-view-profile']);
    }
  }

  //Register code for the sponsors
  public addSponsorSubmit() {
    if(this.addSponsor.invalid){
      return;
    }
    else{
      this.sponsor.company.company_name = this.addSponsor.value.company_name;
      this.sponsor.company.company_industry = this.addSponsor.value.company_industry;
      this.sponsor.first_name_of_user = this.addSponsor.value.first_name;
      this.sponsor.last_name_of_user = this.addSponsor.value.last_name;
      this.sponsor.email_address = this.addSponsor.value.email_address;
      this.sponsor.password = this.addSponsor.value.password;

      this._apiService.registerSponsor(this.sponsor).subscribe((res:Sponsor_users) => {
        console.log("REQUEST SUCCESS ===", res);
        //this.the_message = res;
        //"Success! Check your email for the activation email.";
        this.the_message = res["message"];
        this.printMessage();
        if (this.the_message.substring(0,7) == "Success"){
          this.router.navigate(['./login']);
        }
      }, (error:any) => {
        this.the_message = error.statusText;
        this.printMessage();
        console.log("ERROR ===", error);
      });
    }
  }

  //register code for the students
  registerMe_Student(){
    // put in code 
    this.student.date_of_birth = this.student.date_of_birth.substring(0,10);
    console.log(this.student);

    this._apiService.registerStudent(this.student).subscribe((res) => {
      console.log("SUCCESS ===", res);
      this.the_message = res["message"];
      //"Successfully created an account. Check your email for the activation email.";
      this.printMessage();
      console.log(this.the_message.substring(0,7));
      if (this.the_message.substring(0,7) == "Success"){
        this.router.navigate(['./login']);
      }
    }, (error:any) => {
      this.the_message = 'error';// error;
      this.printMessage();
      console.log("ERROR ===", error);
    });
    //console.log(this.company_name, this.company_industry, this.f_name, this.l_name, this.email_address, this.password, this.c_password)
    // if (this.student_name == ""){
    //   this.the_message = 'Please enter a name';
    //   this.printMessage();
    // }
    // else if (this.student_surname == ""){
    //   this.the_message = 'Please eneter your surname';
    //   this.printMessage();
    // }
    // else{
    //   let data = {
    //     //made dummy variables so project can function
    //     id : 0,
    //     student_id : "",
    //     first_name_of_student : "",
    //     last_name_of_student : "",
    //     email_address : "",
    //     password : "",
    //     inactive : "",
    //     isVerified : "",
    //     regisered_date : "",
    //     last_login : "",

    //   }
      
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

  student_togglePassword():void{
    this.student_showPassword = !this.student_showPassword;
    if (this.student_passwordToggleIcon == 'eye'){
      this.student_passwordToggleIcon = 'eye-off';
    }
    else{
      this.student_passwordToggleIcon = 'eye';
    }
  }

  student_c_togglePassword():void{
    this.student_c_showPassword = !this.student_c_showPassword;
    if (this.student_c_passwordToggleIcon == 'eye'){
      this.student_c_passwordToggleIcon = 'eye-off';
    }
    else{
      this.student_c_passwordToggleIcon = 'eye';
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
