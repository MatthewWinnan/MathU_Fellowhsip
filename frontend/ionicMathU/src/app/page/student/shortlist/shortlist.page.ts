import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';

let company = new Company

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.page.html',
  styleUrls: ['./shortlist.page.scss'],
})

export class ShortlistPage implements OnInit {
  bursaryShortlist:any;
  
  constructor() { }

  ngOnInit() {
    this.initialiseShortlist();
  }

  initialiseShortlist(){
    this.bursaryShortlist = [
      {
        bursName: "MechEng", 
        bursCompName: "Sasol", 
        bursID: 0, 
        bursIcon: company.company_logo, 
        bursStatus: "Pending"
      },
      {
        bursName: "CivEng", 
        bursCompName: "Hatch", 
        bursID: 1, 
        bursIcon: company.company_logo, 
        bursStatus: "Accepted" 
      },
      {
        bursName: "ElecEng", 
        bursCompName: "Eskom", 
        bursID: 2, 
        bursIcon: company.company_logo, 
        bursStatus: "Declined"
      },
      {
        bursName: "ChemEng", 
        bursCompName: "Dischem", 
        bursID: 3, 
        bursIcon: company.company_logo, 
        bursStatus: "Pending" 
      },
      {
        bursName: "AeroEng", 
        bursCompName: "NASA", 
        bursID: 4, 
        bursIcon: company.company_logo, 
        bursStatus: "Pending"
      },
      {
        bursName: "IndEng", 
        bursCompName: "Bell", 
        bursID: 5, 
        bursIcon: company.company_logo, 
        bursStatus: "Pending" 
      },
    ]
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
