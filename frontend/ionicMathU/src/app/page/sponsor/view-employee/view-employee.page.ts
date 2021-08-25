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
import { EmployeesService } from '../../../service/employees.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {
  isFetching = false;
  loggedSponsor = new Sponsor_users();
  ourCompany = new Company();
  allUsersDetials = new AllUsers();
  userType: string = "";
  //all sub-employees of a company are a normal sponsor_user (with different rights)
  employeesData:Sponsor_users[] = [];
  jsonData_length = 0;

  today: number = Date.now();

  constructor(
    private router: Router, 
    public ModalCtrl: ModalController,
    private platform: Platform,
    private dataService: DataService,
    private alert : AlertController,
    public storage: Storage,
    public _apiService: EmployeesService,
  ) { 
    this.platform.ready().then(()=>{
      this.getUserType();
      this.getCompanyDetails();
      this.getLoggedSponsor();
      //this.initialiseEmployeeData();
    });
  }

  ngOnInit() {
  }

  initialiseEmployeeData(){
    //send a request to backend to get all Sponsor_users in the same company
    //company info will be stored in the LocalStorage after login

    //for now, creating dummy dataset
    /*
    this.employeesData = [
      {
        "sponsor_id": "S0020",
        "first_name_of_user": "Apple",
        "last_name_of_user": "Red",
        "email_address": "apple@gmail.com",
        "company_id": this.ourCompany.company_id,
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
        "company_id": this.ourCompany.company_id,
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
        "company_id": this.ourCompany.company_id,
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
        "company_id": this.ourCompany.company_id,
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
        "company_id": this.ourCompany.company_id,
        "isSuperAdmin": false, 
        "manageBursaries": true, 
        "manageApplications": false,
        "inactive": false,
        "isVerified": false,
        "company": this.ourCompany
      }
    ];
    */

    this.isFetching = true;
    // all bursaries with company_id that are 
    this._apiService.getEmployees(this.ourCompany).subscribe((res:Sponsor_users[]) => {
      console.log("REQUEST SUCCESS ===", res);
      this.employeesData = res["Employees"];
      this.isFetching = false;
    }, (error:any) => {
      console.log("ERROR ===", error);
      this.employeesData = [];
    });
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

  getCompanyDetails(){
    this.storage.get('name').then( (val) => {
      this.ourCompany = <Company>val["sponsor_users"]["company"];
      console.log("in company details ");
      console.log(this.ourCompany);
      this.initialiseEmployeeData();
    }, (err)=>{
      console.log("company detials error " + err);
    })    
  }

  getLoggedSponsor(){
    this.storage.get('name').then( (val) => {
      this.loggedSponsor = <Sponsor_users>val["sponsor_users"];
      console.log("in logged in sponsor details ");
      console.log(this.loggedSponsor);
    }, (err)=>{
      console.log("logged in sponsor error " + err);
    })    
  }

}
