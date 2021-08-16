import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddNewEmployeePage } from '../add-new-employee/add-new-employee.page';
import { DeactivatePage } from '../deactivate/deactivate.page';
import { ModifyEmployeeRolePage } from '../modify-employee-role/modify-employee-role.page';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {

  FirstName: string = 'First Name';

  SuperAdminDetails = [{
    firstName : 'Dan',
    lastName : 'James',
    adress : 'Danjames@gmail.com',
  }]

  EmployeeDetails = [{
    FirstName : 'Joshua',
    LastName : 'Akinsola',
    Adress: 'jakinsola@gmail.com',
    Rights: 'Manage Bursary/Manage Applications',
  },
  {
    FirstName : 'Matt',
    LastName : 'Johnson',
    Adress: 'Matt@gmail.com',
    Rights: 'Manage Bursary/Manage Applications',
  },
  {
    FirstName : 'Josh',
    LastName : 'Luus',
    Adress: 'JoshLu@gmail.com',
    Rights: 'Manage Bursary/Manage Applications',
  },
  {
    FirstName : 'Raaga',
    LastName : 'N',
    Adress: 'Raaga@gmail.com',
    Rights: 'Manage Bursary/Manage Applications',
  },
]

today: number = Date.now()

  constructor(private router: Router, public ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  editEmployee() {
    // put in code 
    this.router.navigate(['./../edit-employee']);

  }

  async addEmployee() {
    const modal = await this.ModalCtrl.create({
      component : AddNewEmployeePage 
    })

    return await modal.present()
  }
 
  async modifyEmployee() {
    const modal = await this.ModalCtrl.create({
      component : ModifyEmployeeRolePage 
    })

    return await modal.present()
  }

  async deactivate() {
    const modal = await this.ModalCtrl.create({
      component : DeactivatePage 
    })

    return await modal.present()
  }

}
