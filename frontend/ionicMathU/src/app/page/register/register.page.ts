import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { ToastController } from '@ionic/angular';
import { __await } from 'tslib';
import { Sponsor_users } from '../../model/sponsor_users';
import { Company } from '../../model/company';
import { stringify } from '@angular/compiler/src/util';
import { student_users } from '../../model/student_users';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sponsor = new Sponsor_users() ;
  //Student initialize credentials
  student : student_users;
  student_name : string="";
  student_surname : string="";
  //Sponsor initialize credentials
  sponor : Sponsor_users;
  company_name : string = "";
  company_industry : string = "";
  f_name : string = "";
  l_name : string = "";
  email_address : string = "";
  password : string = "";
  c_password : string = "";
  the_message : string = "";
  //Password variables
  showPassword = false;
  passwordToggleIcon = 'eye';
  c_showPassword = false;
  c_passwordToggleIcon = 'eye';

  constructor(
    private router:Router,
    public _apiService: ApiService,
    public toastController: ToastController
  ) { 
    this.sponsor.company = new Company();
   }

  ngOnInit() {
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


  //Register code for the sponsors
  registerMeSponsor(){
    // put in code 
    //console.log(this.company_name, this.company_industry, this.f_name, this.l_name, this.email_address, this.password, this.c_password)
    console.log(this.sponsor);
    this.router.navigate(['./view-profile']);
    // if (this.sponsor.company.company_name == ""){
    //   this.the_message = 'Company name needed';
    //   this.printMessage();
    // }
    // else if (this.sponsor.company.company_industry == ""){
    //   this.the_message = 'Company industry needed';
    //   this.printMessage();
    // }
    // else if (this.sponsor.first_name_of_user == ""){
    //   this.the_message = 'First name needed';
    //   this.printMessage();
    // }
    // else if (this.sponsor.last_name_of_user == ""){
    //   this.the_message = 'Last name needed';
    //   this.printMessage();
    // }
    // else if (this.sponsor.email_address == ""){
    //   this.the_message = 'Email address needed.';
    //   this.printMessage();
    // }
    // else if (this.checkEmailAddress(this.sponsor.email_address) == false){
    //   this.the_message = 'Enter a valid email address.';
    //   this.printMessage();
    // }
    // else if (this.sponsor.password == ""){
    //   this.the_message = 'Password needed';
    //   this.printMessage();
    // }
    // else if (this.sponsor.password.length < 8){
    //   this.the_message = 'Password must be greater than 8 charcters.';
    //   this.printMessage();
    // }
    // else if (this.checkUpperCase(this.sponsor.password) === false){
    //   this.the_message = 'Password needs to contain an uppercase letter.';
    //   this.printMessage();
    // }
    // else if (this.checkLowerCase(this.sponsor.password) === false){
    //   this.the_message = 'Password needs to contain an lowercase letter.';
    //   this.printMessage();
    // }
    // else if (this.checkDigit(this.sponsor.password) === false){
    //   this.the_message = 'Password needs to contain a digit.';
    //   this.printMessage();
    // }
    // else if (this.checkSpecialCharacter(this.sponsor.password) === false){
    //   this.the_message = 'Password needs to contain a special character.';
    //   this.printMessage();
    // }
    // else if (this.c_password == ""){
    //   this.the_message = 'Confirm your password';
    //   this.printMessage();
    // }
    // else if (this.sponsor.password != this.c_password){
    //   this.the_message = 'Passwords dont match';
    //   this.printMessage();
    // }
    // else{
    //   // this._apiService.registerSponsor(this.sponsor).subscribe((res:sponsor_users) => {
    //   //   console.log("SUCCESS ===", res);
    //   //   //this.the_message = res;
    //   //   //"Successfully created an account. Check your email for the activation email.";
    //   //   this.printMessage();
    //   //   this.router.navigate(['./login']);
    //   // }, (error:any) => {
    //   //   this.the_message = 'error';// error;
    //   //   this.printMessage();
    //   //   console.log("ERROR ===", error);
    //   // });

    // }
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
      this.the_message = 'Email address needed.';
      this.printMessage();
    }
    else if (this.checkEmailAddress(this.email_address) == false){
      this.the_message = 'Enter a valid email address.';
      this.printMessage();
    }
    else if (this.password == ""){
      this.the_message = 'Password needed';
      this.printMessage();
    }
    else if (this.password.length < 8){
      this.the_message = 'Password must be greater than 8 charcters.';
      this.printMessage();
    }
    else if (this.checkUpperCase(this.password) === false){
      this.the_message = 'Password needs to contain an uppercase letter.';
      this.printMessage();
    }
    else if (this.checkLowerCase(this.password) === false){
      this.the_message = 'Password needs to contain an lowercase letter.';
      this.printMessage();
    }
    else if (this.checkDigit(this.password) === false){
      this.the_message = 'Password needs to contain a digit.';
      this.printMessage();
    }
    else if (this.checkSpecialCharacter(this.password) === false){
      this.the_message = 'Password needs to contain a special character.';
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
      this.router.navigate(['./login']);
      // let data = {
      //   //made dummy variables so project can function
      //   //@Raaga please fix??
      //   id : 20,
      //   sponsor_id : "",
      //   first_name_of_user : "",
      //   last_name_of_user : "",
      //   email_address : this.email_address,
      //   password : this.password,
      //   company_id : 0,
      //   isSuperAdmin : "",
      //   manageBursaries	: "",
      //   manageApplications : "",
      //   inactive : "",
      //   isVerified : "",
      //   regisered_date : "",
      //   last_login : "",

      //   // company_name : this.company_name, 
      //   // company_industry : this.company_industry,
      //   // f_name : this.f_name,
      //   // l_name : this.l_name,
      //   // email_address : this.email_address,
      //   // password : this.password,
      // }

      // this._apiService.registerSponsor(data).subscribe((res:sponsor_users) => {
      //   console.log("SUCCESS ===", res);
      //   //this.the_message = res;
      //   //"Successfully created an account. Check your email for the activation email.";
      //   this.printMessage();
      //   //Receive or send?
      //   this.company_name = "";
      //   this.company_industry = "";
      //   this.f_name = "";
      //   this.l_name = "";
      //   this.email_address = "";
      //   this.password = "";
      //   this.c_password = "";
      //   this.the_message = "";

      //   this.router.navigate(['./login']);
      // }, (error:any) => {
      //   this.the_message = 'error';// error;
      //   this.printMessage();
      //   console.log("ERROR ===", error);
      // });
    }
    
  }

  checkUpperCase(pass: string):boolean{
    for (var i=0 ; i<pass.length ; i++){
      if (pass[i] === pass[i].toUpperCase()){
        return true;
      }
    }
    return false;
  }

  checkLowerCase(pass: string):boolean{
    for (var i=0 ; i<pass.length ; i++){
      if (pass[i] === pass[i].toLowerCase()){
        return true;
      }
    }
    return false;
  }

  checkDigit(pass: string):boolean{
    for (var i=0 ; i<pass.length ; i++){ 
      const d = pass.charCodeAt(i);
      //console.log(pass[i] + ": " + d.toString());
      if (d <48 || d >57){
        //console.log("it is false");
      }
      else{
        return true;
      }
    }
    return false;
  }

  checkSpecialCharacter(pass: string):boolean{
    var format = /[!@#$%^&*()_+\-=\[\]{};'`~:"\\|,.<>\/?]+/;
    if (format.test(pass)){
      return true;
    }
    else{
      return false;
    }
  }

  checkEmailAddress(email_add: string):boolean{
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_add.match(regexEmail)) {
      return true; 
    } else {
      return false; 
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
