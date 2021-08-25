import { Component, OnInit } from '@angular/core';
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
    {bursName: "CivEng", bursCompName: "Hatch", bursID: 1, bursIcon: company.comapny_logo, bursStatus: "Accepted" },
    {bursName: "ElecEng", bursCompName: "Eskom", bursID: 2, bursIcon: company.comapny_logo, bursStatus: "Declined"},
    {bursName: "ChemEng", bursCompName: "Dischem", bursID: 3, bursIcon: company.comapny_logo, bursStatus: "Pending" },
    {bursName: "AeroEng", bursCompName: "NASA", bursID: 4, bursIcon: company.comapny_logo, bursStatus: "Pending"},
    {bursName: "IndEng", bursCompName: "Bell", bursID: 5, bursIcon: company.comapny_logo, bursStatus: "Pending" },
  ]

  
  constructor() { }

  ngOnInit() {
  }

  goToBursaryView(bursID) {
    console.log("goToBursaryView() ran with the ",  bursID )
  }

  deleteApplication(bursID) {
    console.log("deleteApplication() ran with the ",  bursID )
  }

  doRefresh() {
    window.location.reload();
  }}
