import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  gmail: string = "";
  userType: string = "";

  constructor(
    private router: Router,
    private menuController: MenuController,
    public storage: Storage) {
      //this.getValue();
      this.getUserType();
     }

  ngOnInit() { }

  editProfile() {
    // put in code 
    this.router.navigate(['./../edit-profile']);

  }
  ionViewWillEnter() {
    this.menuController.enable(true, 'spo');
  }

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

  getValue(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      //if (val != null){
        //if (val["Sponsor"] != null){
          this.gmail = "Company ID is " + val["Sponsor"]["company_id"]; 
          //console.log(val["Sponsor"]["company_id"]);
        //}
        //else if (val["Student"] != null){
          //console.log(val["Student"]["first_name"]);
        //}
      //}
      //else{
        //console.log("val is nothing")
      //}
    }, (err)=>{
      this.gmail = "";
      //console.log(err);
    })
  }


}
