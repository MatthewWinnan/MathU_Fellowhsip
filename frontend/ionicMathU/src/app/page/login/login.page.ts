import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router:Router,
    public navCtrl: NavController
  ) { 

  }

  ngOnInit() {
  }

  logMeIn(){
    // put in code 
    //this.router.navigateByUrl('/student-home');
    this.navCtrl.navigateRoot('/student-home');

  }

}
