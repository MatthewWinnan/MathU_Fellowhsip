import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  gmail: string = "";

  constructor(public storage: Storage) { 
    this.getValue();
  }

  ngOnInit() {
  }

  getValue(){
    this.storage.get('name').then( (val) => {
      this.gmail = "value is " + val;
    }, (err)=>{
      this.gmail = "empty";
    })
  }


}
