import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.page.html',
  styleUrls: ['./shortlist.page.scss'],
})
export class ShortlistPage implements OnInit {

  bursaryShortlist = [
    {bursName: "MechEng", bursCompName: "Sasol"},
    {bursName: "CivEng", bursCompName: "Hatch"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
