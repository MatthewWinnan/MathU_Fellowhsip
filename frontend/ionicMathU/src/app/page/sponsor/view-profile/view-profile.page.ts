import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  editProfile() {
    // put in code 
    this.router.navigate(['./../edit-profile']);

  }
}
