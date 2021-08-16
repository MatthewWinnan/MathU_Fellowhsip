import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-modify-employee-role',
  templateUrl: './modify-employee-role.page.html',
  styleUrls: ['./modify-employee-role.page.scss'],
})
export class ModifyEmployeeRolePage implements OnInit {

  constructor(private router: Router, public ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModify() {this.ModalCtrl.dismiss()}

}
