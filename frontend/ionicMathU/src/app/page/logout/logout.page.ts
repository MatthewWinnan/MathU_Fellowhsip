import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router:Router, public storage: Storage) { 
    this.storage.clear();
    this.router.navigate(['login']);
   }

  ngOnInit() {
    this.router.navigate(['login']);
  }

}
