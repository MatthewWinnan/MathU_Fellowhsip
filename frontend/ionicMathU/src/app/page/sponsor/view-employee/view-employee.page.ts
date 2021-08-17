import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { Company } from 'src/app/model/Company';
import { Sponsor_users } from 'src/app/model/sponsor_users';
import { AddNewEmployeePage } from '../add-new-employee/add-new-employee.page';
import { DeactivatePage } from '../deactivate/deactivate.page';
import { ModifyEmployeeRolePage } from '../modify-employee-role/modify-employee-role.page';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {
  //all sub-employees of a company are a normal sponsor_user (with different rights)
  //employeesData:Sponsor_users[] = [];
  employeesData:any[] = [];

  //extract Company object from LocalStorage
  //for now, creating a dummy Company
  ourCompany = new Company();

  FirstName: string = 'First Name';

  SuperAdminDetails = [{
    firstName : 'Dan',
    lastName : 'James',
    adress : 'Danjames@gmail.com',
  }]

  EmployeeDetails = [
    {
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
  ];

  today: number = Date.now()

  constructor(
    private router: Router, 
    public ModalCtrl: ModalController,
    private platform: Platform
  ) { 
    this.platform.ready().then(()=>{
      this.initialiseEmployeeData();
    });
    this.ourCompany.company_id = 1;
    this.ourCompany.company_name = "Google";
    this.ourCompany.company_industry = "Logal";
    this.ourCompany.comapny_logo = "";
    this.ourCompany.company_description = "";
    this.ourCompany.company_URL = "";
    this.ourCompany.number_of_reports = 0;
  }

  ngOnInit() {
    //send a request to backend to get all Sponsor_users in the same company
    //company info will be stored in the LocalStorage after login

    //for now, creating dummy dataset
  }

  initialiseEmployeeData(){
    this.employeesData = [
      {
        "sponsor_id": "S0020",
        "first_name_of_user": "Apple",
        "last_name_of_user": "Red",
        "email_address": "apple@gmail.com",
        "company_id ": this.ourCompany.company_id,
        "isSuperAdmin": true,  //if isSuperAdmin is true, then 
        "manageBursaries": true,  //manageBursaries also true
        "manageApplications": true, //manageApplications also true
        "inactive": false,
        "isVerified": false,
        "company": this.ourCompany
      },
      {
        "sponsor_id": "S0020",
        "first_name_of_user": "Pear",
        "last_name_of_user": "Green",
        "email_address": "pear@gmail.com",
        "company_id ": this.ourCompany.company_id,
        "isSuperAdmin": false,  //if isSuperAdmin is false, then normal employee
        "manageBursaries": true,
        "manageApplications": true,
        "inactive": false,
        "isVerified": false,
        "company": this.ourCompany
      },
      {
        "sponsor_id": "S0020",
        "first_name_of_user": "Cherry",
        "last_name_of_user": "Sour",
        "email_address": "sour@gmail.com",
        "company_id ": this.ourCompany.company_id,
        "isSuperAdmin": false,
        "manageBursaries": false,
        "manageApplications": true,
        "inactive": false,
        "isVerified": false,
        "company": this.ourCompany
      },
      {
        "sponsor_id": "S0020",
        "first_name_of_user": "Plum",
        "last_name_of_user": "Soft",
        "email_address": "plum@gmail.com",
        "company_id ": this.ourCompany.company_id,
        "isSuperAdmin": false, 
        "manageBursaries": true, 
        "manageApplications": false,
        "inactive": false,
        "isVerified": false,
        "company": this.ourCompany
      }
    ]
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
