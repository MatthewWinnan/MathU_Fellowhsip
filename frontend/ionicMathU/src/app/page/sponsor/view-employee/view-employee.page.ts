import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { Company } from '../../../model/company';
import { Sponsor_users } from 'src/app/model/sponsor_users';
import { DataService } from 'src/app/service/data.service';
import { AddNewEmployeePage } from '../add-new-employee/add-new-employee.page';
//import { ModifyEmployeeRolePage } from '../modify-employee-role/modify-employee-role.page';
import { AlertController } from '@ionic/angular';
import { AllUsers } from '../../../model/all_users';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {
  ourCompany = new Company();
  allUsersDetials = new AllUsers();
  userType: string = "";
  //all sub-employees of a company are a normal sponsor_user (with different rights)
  //employeesData:Sponsor_users[] = [];
  employeesData:any[] = [];

  today: number = Date.now();

  constructor(
    private router: Router, 
    public ModalCtrl: ModalController,
    private platform: Platform,
    private dataService: DataService,
    private alert : AlertController,
    public storage: Storage,
  ) { 
    this.platform.ready().then(()=>{
      this.initialiseEmployeeData();
    });
    this.getUserType();
    this.ourCompany.company_id = 1;
    this.ourCompany.company_name = "Google";
    this.ourCompany.company_industry = "Logal";
    this.ourCompany.company_logo = "";
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
        "inactive": true,
        "isVerified": false,
        "company": this.ourCompany
      },
      {
        "sponsor_id": "S0025",
        "first_name_of_user": "Apricot",
        "last_name_of_user": "Peach",
        "email_address": "apricot@gmail.com",
        "company_id ": this.ourCompany.company_id,
        "isSuperAdmin": true,  //if isSuperAdmin is true, then 
        "manageBursaries": true,  //manageBursaries also true
        "manageApplications": true, //manageApplications also true
        "inactive": false,
        "isVerified": false,
        "company": this.ourCompany
      },
      {
        "sponsor_id": "S0027",
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
        "sponsor_id": "S0029",
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
        "sponsor_id": "S0030",
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
 
  modifyEmployee(editEmployeeItem) {
    this.dataService.setEmployeeData(1, editEmployeeItem);
    this.router.navigateByUrl('modify-employee-role/1');
  }

  deactivate(employeeItem) {
    this.alert.create({
      header: "Confirmation!",
      subHeader: "Are you sure you would like to Deactivate this employee account?",
      buttons:[{
        text: "Deactivate",
        handler:(data) => {
          employeeItem.inactive = true;
          console.log(employeeItem);
          //send request to backend
        } 
    },
    { 
      text: "Cancel",
      handler: (data) => {
        //this.status = "Cancelled!"
      }
    }]
    }).then((confirmElement) => {
      confirmElement.present()
    })
  }

  getUserType(){
    this.storage.get('name').then( (val) => {
      //console.log(val);
      this.userType = val["role"];
    }, (err)=>{
      this.userType = "";
    })
  }

}
