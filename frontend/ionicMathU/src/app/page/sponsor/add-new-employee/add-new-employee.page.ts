import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'
import { Form, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Sponsor_users } from 'src/app/model/sponsor_users';
import { Company } from 'src/app/model/Company';



@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.page.html',
  styleUrls: ['./add-new-employee.page.scss'],
})
export class AddNewEmployeePage implements OnInit {
  the_message : string = "";
  ourCompany = new Company();

  sa_test = false;



  get first_name() {
    return this.addEmployee.get('first_name');
  }
  get last_name() {
    return this.addEmployee.get('last_name');
  }
  get email_address() {
    return this.addEmployee.get('email_address');
  }
  get super_admin() {
    return this.addEmployee.get('super_admin');
  }
  get manage_bursary() {
    return this.addEmployee.get('manage_bursary');
  }
  get manage_applications() {
    return this.addEmployee.get('manage_applications');
  }

  public errorMessages = {
    first_name: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name cannot be longer than 100 charcters'}
    ],
    last_name: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Last Name cannot be longer than 100 charcters'}
    ],
    email_address: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    super_admin: [],
    manage_bursary: [],
    manage_applications: [],
  }

  addEmployee = this.formBuilder.group({
    first_name: ['', [Validators.required, Validators.maxLength(100)]],
    last_name: ['', [Validators.required, Validators.maxLength(100)]],
    email_address: [
      '', 
      [
        Validators.required, 
        Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")
      ]
    ],
    super_admin: [false],
    manage_bursary: [false],
    manage_applications: [false],
  })

  Subemployee = new Sponsor_users();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    public toastController: ToastController,
    public ModalCtrl: ModalController,
    
  ) { 
    this.ourCompany.company_id = 0;
    this.ourCompany.company_name = "Google";
    this.ourCompany.company_industry = "IT & Telecommunications";
    this.ourCompany.comapny_logo = "";
    this.ourCompany.company_description = "";
    this.ourCompany.company_URL = "";
  }

  ngOnInit() {
  }

  public addEmployeeSubmit() {
    if (!this.addEmployee.value.super_admin &&
      !this.addEmployee.value.manage_bursary &&
      !this.addEmployee.value.manage_applications
    ){
      this.the_message = "Please select a role"
      this.printMessage();
    }
    else{
      this.Subemployee.company = this.ourCompany;
      this.Subemployee.company_id = this.ourCompany.company_id;
      this.Subemployee.first_name_of_user = this.addEmployee.value.first_name;
      this.Subemployee.last_name_of_user = this.addEmployee.value.last_name;
      this.Subemployee.email_address = this.addEmployee.value.email_address;
      this.Subemployee.isSuperAdmin = this.addEmployee.value.super_admin;
      if(this.Subemployee.isSuperAdmin){
        this.Subemployee.manageBursaries = true;
        this.Subemployee.manageApplications = true;
      }
      else{
        this.Subemployee.manageBursaries = this.addEmployee.value.manage_bursary;
        this.Subemployee.manageApplications = this.addEmployee.value.manage_applications;
      }
      console.log(this.Subemployee);
      // this.router.navigate(['./../view-employee'])
    }
    
  }

  updateSuper(event: Event){
    this.sa_test = this.addEmployee.value.super_admin;
    //console.log(this.sa_test);
  }

  // viewEmployees() {
  //   this.router.navigate(['./../view-employee'])
  // }

  // addmember() {
  //   this.router.navigate(['./../view-employee'])
  // }

  closeAdd() {
    this.ModalCtrl.dismiss()
  }

  async printMessage() {
    const toast = this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: this.the_message
    });

    (await toast).present();
    this.the_message = "";
  }

  



}
