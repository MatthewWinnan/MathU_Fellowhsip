import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-decline-stu',
  templateUrl: './decline-stu.page.html',
  styleUrls: ['./decline-stu.page.scss'],
})
export class DeclineStuPage implements OnInit {

  constructor(public ModalCtrl : ModalController) { }

  ngOnInit() {
  }

  closeDecline() {this.ModalCtrl.dismiss()}

}
