import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Company } from 'src/app/model/company';

let company = new Company

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.page.html',
  styleUrls: ['./shortlist.page.scss'],
})

export class ShortlistPage implements OnInit {

  bursaryShortlist = [
    {bursName: "MechEng", bursCompName: "Sasol", bursID: 0, bursIcon: company.comapny_logo, bursStatus: "Pending"},
    {bursName: "CivEng", bursCompName: "Hatch", bursID: 1, bursIcon: company.comapny_logo, bursStatus: "Accepted" }
  ]

  constructor() { }

  ngOnInit() {
  }

  goToBursaryView(bursID) {
    console.log("goToBursaryView() ran with the ",  bursID )

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }}
