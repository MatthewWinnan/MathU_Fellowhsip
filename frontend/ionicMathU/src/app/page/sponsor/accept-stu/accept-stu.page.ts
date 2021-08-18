import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accept-stu',
  templateUrl: './accept-stu.page.html',
  styleUrls: ['./accept-stu.page.scss'],
})
export class AcceptStuPage implements OnInit {

  constructor(public ModalCtrl : ModalController) { }

  ngOnInit() {
  }

  closeAccept() {this.ModalCtrl.dismiss()}
}
