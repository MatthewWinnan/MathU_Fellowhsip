import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular'
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Sponsor_users } from 'src/app/model/sponsor_users';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modify-employee-role',
  templateUrl: './modify-employee-role.page.html',
  styleUrls: ['./modify-employee-role.page.scss'],
})
export class ModifyEmployeeRolePage implements OnInit {
  the_message : string = "";
  data:Sponsor_users;
  sa_test = false;

  get super_admin() {
    return this.modifyEmployee.get('super_admin');
  }
  get manage_bursary() {
    return this.modifyEmployee.get('manage_bursary');
  }
  get manage_applications() {
    return this.modifyEmployee.get('manage_applications');
  }
  modifyEmployee = this.formBuilder.group({
    super_admin: [false],
    manage_bursary: [false],
    manage_applications: [false],
  });

  constructor(
    private router: Router, 
    public ModalCtrl: ModalController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
  ) { 
    this.route.queryParams.subscribe(info=> {
      if(info && info.myData){
        this.data = this.route.snapshot.data['myData'];
      }
    })
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData'];
      this.sa_test = this.data.isSuperAdmin; 
    }
    console.log(this.data);
    this.modifyEmployee = this.formBuilder.group({
      super_admin: [this.data.isSuperAdmin],
      manage_bursary: [this.data.manageBursaries],
      manage_applications: [this.data.manageApplications],
    })
  }

  closeModify() {
    this.router.navigateByUrl('view-employee');
  }

  updateSuper(event: Event){
    //console.log((<CustomEvent>event).detail.checked);
    this.data.isSuperAdmin = (<CustomEvent>event).detail.checked;
    this.sa_test = this.data.isSuperAdmin; 
  }

  public modifyEmployeeSubmit() {
    if (!this.modifyEmployee.value.super_admin &&
      !this.modifyEmployee.value.manage_bursary &&
      !this.modifyEmployee.value.manage_applications
    ){
      this.the_message = "Please select a role"
      this.printMessage();
    }
    else{
      this.data.isSuperAdmin = this.modifyEmployee.value.super_admin;
      if(this.data.isSuperAdmin){
        this.data.manageBursaries = true;
        this.data.manageApplications = true;
      }
      else{
        this.data.manageBursaries = this.modifyEmployee.value.manage_bursary;
        this.data.manageApplications = this.modifyEmployee.value.manage_applications;
      }
      console.log(this.data);
      // this.router.navigate(['./../view-employee'])
    }
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
