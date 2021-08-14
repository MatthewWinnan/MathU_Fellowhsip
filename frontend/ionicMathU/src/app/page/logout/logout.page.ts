import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
//import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router:Router, 
    public storage: Storage,
    public navCtrl: NavController
  ) { 
    this.storage.set('name', "");
    this.storage.clear();
    this.navCtrl.navigateRoot('login');
    //this.router.navigate(['login']);

   }

  ngOnInit() {
    //this.router.navigate(['login']);
  }

}
