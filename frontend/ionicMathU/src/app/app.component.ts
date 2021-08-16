import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AllUsers } from './model/all_users';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user = new AllUsers();

  constructor(
    private storage: Storage,
    private router:Router
  ) {
    //this.storage.create();
    //this.isStudent();
  }

  async ngOnInit(){  
    this.storage.create();
    this.setValue(this.user);
    //this.getValue();
    //this.isStudent();
  }

  setValue(value){
    this.storage.set('name', value);
  }

  getValue(){
    this.storage.get('name').then( (val) => {
      if (val != null){
        console.log(val);
        // if (val["Sponsor"] != null){
        //   console.log(val["Sponsor"]["company_id"]);
        // }
        // else if (val["Student"] != null){
        //   console.log(val["Student"]["first_name"]);
        // }
      }
      else{
        console.log("val is nothing")
      }
    }, (err)=>{
      console.log(err);
    })
  }

}
