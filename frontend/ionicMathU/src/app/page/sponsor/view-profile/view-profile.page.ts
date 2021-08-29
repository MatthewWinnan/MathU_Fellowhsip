import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
import { Company } from '../../../model/company';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  ourCompany = new Company();
  userType: string = "";

  constructor(
    private router: Router,
    private menuController: MenuController,
    public storage: Storage
  ) {
      this.getUserType();
      this.getCompanyDetails();
  }

  ngOnInit() { }

  editProfile() {
    // put in code 
    this.router.navigate(['./../edit-profile']);
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
      console.log("View profile");
      console.log(this.ourCompany);
    }, (err)=>{
      console.log("company detials error " + err);
      //let dummyCompany = new Company();
      //return <Company>dummyCompany;
    })    
  }


}
