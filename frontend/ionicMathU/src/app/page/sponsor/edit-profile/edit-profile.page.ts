import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Company } from '../../../model/company';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { AllUsers } from '../../../model/all_users';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  ourCompany = new Company();
  allUsersDetials = new AllUsers();
  userType: string = "";
  the_message : string = "";

  get company_description() {
    return this.editProfile.get('company_description');
  }
  get company_URL() {
    return this.editProfile.get('company_URL');
  }
  editProfile = this.formBuilder.group({
    company_description: [''],
    company_URL: [''],
  });

  constructor(
    private router: Router,
    private menuController: MenuController,
    public storage: Storage,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public navCtrl: NavController,
    public _apiService: ApiService,
  ) { 
    this.getUserType();
    this.getCompanyDetails();
    this.getAllUsersDetails();
  }

  ngOnInit() { 
    this.editProfile = this.formBuilder.group({
      company_description: [this.ourCompany.company_description],
      company_URL: [this.ourCompany.company_URL],
    })
  }

  viewProfile() {
    this.router.navigate(['./../view-profile'])
  }

  public editProfileSubmit() {
    //console.log(this.editProfile.value);

    if ((this.editProfile.value.company_description == "" ||
    this.editProfile.value.company_description == null) &&
      (this.editProfile.value.company_URL == "" || 
      this.editProfile.value.company_URL == null)){
        this.the_message = "The details are empty";
        this.printMessage();
    }
    else{
      //add checks if data is kept same 
      // if (this.ourCompany.company_description !== this.editProfile.value.company_description){
      //   console.log("not same same");
      // }
      //this.ourCompany.company_URL !== this.editProfile.value.company_URL 
      
      this.ourCompany.company_description = this.editProfile.value.company_description;
      this.ourCompany.company_URL = this.editProfile.value.company_URL;

      this.allUsersDetials.sponsor_users.company = this.ourCompany;
      console.log(this.ourCompany);
      //send api request 
      this._apiService.editSponsor(this.ourCompany).subscribe((res) => {
        console.log("REQUEST SUCCESS ===", res);
        this.the_message = res["message"];
        this.printMessage();
        if (this.the_message.substring(0,7) == "Success"){
          //console.log("go to differnet page");
          this.setValue(this.allUsersDetials);
          this.router.navigateByUrl('edit-employee/1');
        }
      }, (error:any) => {
        this.the_message = 'error';// error;
        this.printMessage();
        console.log("ERROR ===", error);
      });
        //console.log(this.allUsersDetials);
        //this.the_message = "Success!";
        //this.printMessage();

      //this is to test if it worked 
      this.getAllUsersDetails();
      //console.log(this.allUsersDetials);
      //this.navCtrl.navigateRoot('/view-profile');
    } 
  }

  setValue(value){
    this.storage.clear();
    //this.storage.set('name', "");
    this.storage.set('name', value);
  }

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

  getCompanyDetails(){
    this.storage.get('name').then( (val) => {
      this.ourCompany = <Company>val["sponsor_users"]["company"];
    }, (err)=>{
      console.log("company detials error " + err);
    })    
  }

  getAllUsersDetails(){
    this.storage.get('name').then( (val) => {
      this.allUsersDetials = val;
    }, (err)=>{
      console.log("all detials error " + err);
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
