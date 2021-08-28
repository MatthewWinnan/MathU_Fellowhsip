import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { LoginApiService } from '../../service/login-api.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AllUsers } from '../../model/all_users';
import { Sponsor_users } from '../../model/sponsor_users';
import { Company } from '../../model/company';
import { student_users } from '../../model/student_users';
import { Students_marks } from 'src/app/model/subjects_marks';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isChecking = false;
  user = new AllUsers();

  the_message : string = "";

  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    private router:Router, 
    public storage: Storage, 
    private formBuilder: FormBuilder,
    public login_api: LoginApiService,
    public toastController: ToastController,
    public navCtrl: NavController
  ) { 
    //this.storage.clear();
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
      { type: 'required', message: 'Email Address is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' }
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
    this.isChecking = true;
    let login_data = this.loginUser.value;
    //console.log(login_data);

    this.login_api.login_a_user(login_data).subscribe((res) => {
      console.log("API SUCCESS ===", res);
      //console.log(res["message"]);
      //console.log(Object.keys(res).length);
      if (res["message"]!= null){  //if length is 0, then incorrect details
      //if (res.message){
        this.the_message = res["message"];
        this.printMessage();
        this.isChecking = false;
      }
      else{
        this.storage.clear();
        this.the_message = "You have been successfully logged in";
        this.printMessage();
        this.isChecking = false;
        //console.log(res);


        if (res["Sponsor"] != null){
          this.user.sponsor_users = new Sponsor_users();
          //this.user.sponsor_users.company_id = res["Sponsor"]["company_id"];
          this.user.sponsor_users.sponsor_id = res["Sponsor"]["sponsor_id"];
          this.user.sponsor_users.first_name_of_user = res["Sponsor"]["first_name_of_user"];
          this.user.sponsor_users.last_name_of_user = res["Sponsor"]["last_name_of_user"];
          this.user.sponsor_users.email_address = res["Sponsor"]["email_address"];
          this.user.sponsor_users.company_id = res["Sponsor"]["company_id"];
          this.user.sponsor_users.isSuperAdmin = res["Sponsor"]["isSuperAmin"]; //fix spelling error
          this.user.sponsor_users.manageBursaries	= res["Sponsor"]["manageBursaries"];
          this.user.sponsor_users.manageApplications = res["Sponsor"]["manageApplications"];
          this.user.sponsor_users.inactive = res["Sponsor"]["inactive"];
          this.user.sponsor_users.isVerified = res["Sponsor"]["isVerified"];
          this.user.sponsor_users.company = new Company();
          //this.user.sponsor_users.company.company_id = res["Sponsor"]["company_id"];
          this.user.sponsor_users.company.company_id = res["Company"]["company_id"];
          this.user.sponsor_users.company.company_name = res["Company"]["company_name"];
          this.user.sponsor_users.company.company_industry = res["Company"]["company_industry"];
          this.user.sponsor_users.company.company_logo = res["Company"]["company_logo"];
          this.user.sponsor_users.company.company_description = res["Company"]["company_description"];
          this.user.sponsor_users.company.company_URL = res["Company"]["company_URL"];
          this.user.sponsor_users.company.number_of_reports = res["Company"]["number_of_reports"];

          if (res["Sponsor"]["isSuperAdmin"]){ 
            this.user.role = 'SuperAdmin';
          }
          else{
            if(res["Sponsor"]["manageBursaries"] && res["Sponsor"]["manageApplications"]){
              this.user.role = 'Employee';
            }
            else if(res["Sponsor"]["manageBursaries"]){
              this.user.role = 'ManageBursary';
            }
            else{
              this.user.role = 'ManageApplications';
            }
          }
          console.log(this.user);
          this.setValue(this.user);
          //console.log("Sponsor logged in");
          //console.log(res["Sponsor"]["company_id"]);
          //this.getValue();  //remove later (to test)
          //this.router.navigate(['./view-profile']); //sponsor

          this.navCtrl.navigateRoot('/edit-profile');
        }
        if (res["Student"]){
          this.user.student = new student_users();
          this.user.student.id = res["Student"]["id"];
          this.user.student.first_name = res["Student"]["first_name"];
          this.user.student.last_name = res["Student"]["last_name"];
          this.user.student.email_address = res["Student"]["email"];
          this.user.student.date_of_birth = res["Student"]["date_of_birth"];
          this.user.student.nationality = res["Student"]["nationality"];
          this.user.student.contact_number = res["Student"]["contact_number"];
          this.user.student.city = res["Student"]["city"];
          this.user.student.province = res["Student"]["province"];
          this.user.student.disability = res["Student"]["disability"];
          this.user.student.current_academic_level = res["Student"]["current_academic_level"];
          this.user.student.grade = res["Student"]["grade"];
          this.user.student.syllabus = res["Student"]["syllabus"];
          this.user.student.average = res["Student"]["average"];
          this.user.student.currently_studying = res["Student"]["currently_studying"];
          this.user.student.year_of_study = res["Student"]["year_of_study"];
          this.user.student.study_institution = res["Student"]["study_institution"];
          this.user.student.continue_studies = res["Student"]["continue_studies"];
          this.user.student.gpa = res["Student"]["gpa"];
          this.user.student.description_of_student = res["Student"]["description_of_student"];
          this.user.student.bursarred = res["Student"]["bursarred"];
          this.user.student.current_bursaries = res["Student"]["current_bursaries"];
          this.user.student.workback = res["Student"]["workback"];
          this.user.student.website = res["Student"]["website"];
          //this.user.student.Students_marks = new Students_marks()[];
          //this.user.student.Students_marks = res["Student"]["date_of_birth"]; 
          //get student marks
          
          this.user.role = "Student";

          console.log(this.user);
          this.setValue(this.user);          
          this.navCtrl.navigateRoot('/student-view-profile'); //comment later
          //this.navCtrl.navigateRoot('/student-home/0'); //correct one
        }
      }
    }, (error:any) => {
      this.the_message = error.statusText;
      //this.the_message = 'error';// error;
      this.printMessage();
      this.isChecking = false;
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
