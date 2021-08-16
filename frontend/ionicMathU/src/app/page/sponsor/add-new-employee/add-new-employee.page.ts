import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.page.html',
  styleUrls: ['./add-new-employee.page.scss'],
})
export class AddNewEmployeePage implements OnInit {

  constructor(private router: Router, public ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  viewEmployees() {
    this.router.navigate(['./../view-employee'])
  }

  addmember() {
    this.router.navigate(['./../view-employee'])
  }

  closeAdd() {this.ModalCtrl.dismiss()}

}
