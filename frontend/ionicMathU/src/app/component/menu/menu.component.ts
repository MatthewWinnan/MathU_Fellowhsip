import { Component, OnInit } from '@angular/core';
import { Storage  } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  userType: string = "";
  studentName: string = "";
  sponsorName: string = "";
  companyName: string = "";

  constructor(private storage: Storage, ) { }

  ngOnInit() {
    this.getstudentName();
    this.getsponsorName();
    this.getcompanyName();
    this.getUserType();
  }

  getstudentName(){
    this.storage.get('name').then( (val) => { 
      if (val["student"]){
        this.studentName = val["student"]["first_name_of_student"] + " " + val["student"]["last_name_of_student"];
      }
      
     }, (err)=>{
      this.studentName = "";
      //console.log(err);
    })
  }

  getcompanyName(){
    this.storage.get('name').then( (val) => { 
      if (val["sponsor_users"]){
        this.companyName = val["sponsor_users"]["company_id"];
        //val["Sponsor"]["company"]["company_name"]; //replace later
      }
      
     }, (err)=>{
      this.companyName = "";
    })
  }

  getsponsorName(){
    this.storage.get('name').then( (val) => { 
      if (val["sponsor_users"]){
        this.sponsorName = val["sponsor_users"]["first_name_of_user"] + " " + val["sponsor_users"]["last_name_of_user"];
      }
     }, (err)=>{
      this.sponsorName = "";
    })
  }  

  getUserType(){
    this.storage.get('name').then( (val) => {
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }
}
