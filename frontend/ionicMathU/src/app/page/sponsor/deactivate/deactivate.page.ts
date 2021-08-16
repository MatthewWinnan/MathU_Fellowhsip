import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.page.html',
  styleUrls: ['./deactivate.page.scss'],
})
export class DeactivatePage implements OnInit {

  constructor(public ModalCtrl : ModalController) { }

  ngOnInit() {
  }

  closeDeactivate() {this.ModalCtrl.dismiss()}

}
