import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private storage: Storage,
    private router:Router
  ) {
    //this.storage.create();
    //this.isStudent();
  }

  async ngOnInit(){  
    this.storage.create();
    //this.isStudent();
  }

  getstudentName(){
    this.storage.get('name').then( (val) => { 
      return val["Student"]["first_name"] + " " + val["Student"]["first_name"];
     }, (err)=>{
      return "";
      //console.log(err);
    })
  }

  getcompanyName(){
    this.storage.get('name').then( (val) => { 
      return val["Sponsor"]["company_id"];
      //return val["Sponsor"]["company"]["company_name"]; //replace later
     }, (err)=>{
      return "";
      //console.log(err);
    })
  }

  getsponsorName(){
    this.storage.get('name').then( (val) => { 
      return val["Sponsor"]["first_name_of_user"] + " " + val["Sponsor"]["last_name_of_user"];
     }, (err)=>{
      return "";
      //console.log(err);
    })
  }  
}
