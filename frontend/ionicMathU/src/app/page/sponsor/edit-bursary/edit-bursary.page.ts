import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Bursary } from '../../../model/bursaries';
import { BursaryService } from '../../../service/bursary.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-bursary',
  templateUrl: './edit-bursary.page.html',
  styleUrls: ['./edit-bursary.page.scss'],
})
export class EditBursaryPage implements OnInit {
  the_message : string = "";

  dateToday = new Date().toISOString().substring(0,10);

  get bursary_name() {
    return this.editBursary.get('bursary_name');
  }
  get bursary_type() {
    return this.editBursary.get('bursary_type');
  }
  get WB_duration() {
    return this.editBursary.get('WB_duration');
  }
  get age_group() {
    return this.editBursary.get('age_group');
  }
  get academic_level() {
    return this.editBursary.get('academic_level');
  }
  get study_field() {
    return this.editBursary.get('study_field');
  }
  get minimum_year_required() {
    return this.editBursary.get('minimum_year_required');
  }
  get min_average() {
    return this.editBursary.get('min_average');
  }
  get RSA_citizen(){
    return this.editBursary.get('RSA_citizen');
  }
  get financial_need(){
    return this.editBursary.get('financial_need');
  }
  get study_further(){
    return this.editBursary.get('study_further');
  }
  get disability(){
    return this.editBursary.get('disability');
  }
  get province(){
    return this.editBursary.get('province');
  }
  get bursary_covers_for(){
    return this.editBursary.get('bursary_covers_for');
  }
  get bursary_duration(){
    return this.editBursary.get('bursary_duration');
  }
  get closing_date(){
    return this.editBursary.get('closing_date');
  }
  get shortlist_date(){
    return this.editBursary.get('shortlist_date');
  }
  get bursary_description() {
    return this.editBursary.get('bursary_description');
  }

  get email_address_bursary() {
    return this.editBursary.get('email_address_bursary');
  }

  

  public errorMessages = {
    bursary_name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cannot be longer than 100 charcters'}
    ],
    bursary_type: [
      { type: 'required', message: 'Bursary Type is required' }
    ],
    WB_duration: [],
    age_group: [],
    academic_level: [
      { type: 'required', message: 'Academic Level is required' }
    ],
    study_field: [],
    minimum_year_required: [],
    min_average: [],
    bursary_description: [
      { type: 'required', message: 'Bursary Description is required'}
    ],
    RSA_citizen: [],
    financial_need: [],
    study_further: [],
    disability: [],
    bursary_covers_for: [],
    bursary_duration: [
      { type: 'required', message: 'Bursary Duration is required' },
    ],
    closing_date: [
      { type: 'required', message: 'Closing Date is required' },
    ],
    shortlist_date: [
      { type: 'required', message: 'Closing Date for Further Communication is required' },
    ],
    
    email_address_bursary: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ]
  }

  editBursary = this.formBuilder.group({
    bursary_name: ['', [Validators.required, Validators.maxLength(100)]],
    bursary_type: ['', [Validators.required]],
    WB_duration: [0],
    age_group: [''],  
    academic_level: ['', [Validators.required]],
    study_field: [''],
    minimum_year_required: [0],
    min_average: [''],
    RSA_citizen: [false],
    financial_need: [false],
    study_further: [false],
    disability: [false],
    province: [],
    bursary_covers_for: [],
    bursary_duration: ['', [Validators.required]],
    closing_date: ['', [Validators.required]],
    shortlist_date: ['', [Validators.required]],
    bursary_description: ['', [Validators.required]],
    email_address_bursary: [
      '', 
      [
        Validators.required, 
        Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")
      ]
    ]
  });

  bursary = new Bursary() ;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private router:Router,
    public _apiService: BursaryService,
  ) { 
    this.bursary = {
      "company_id": 0,
      "bursary_name": "Retirement",
      "bursary_type": "Work Back",
      "bursary_description": "This is a good bursary",
      "WB_duration": 4,
      "min_age": 13,
      "max_age": 26,
      "academic_level": "Undergraduate",
      "study_field": "Law",
      "minimum_year_required": 2,
      "min_average": 76,
      "RSA_citizen": true,
      "financial_need": false,
      "study_further": false,
      "disability": true,
      "province": "Gauteng",
      "bursary_covers": [
          "Accommodation Fees",
          "Meals",
          "Books Allowance",
          "Transport"
      ],
      "closing_date": "2021-11-16",
      "shortlist_date": "2021-11-20",
      "email_address": "name@gmail.com",
      "bursary_duration": 2,
      "isVisible": true,
      //"bursary_status": "Open",
  }
  
  
  }

  ngOnInit() {
  }

  public editBursarySubmit() {
    //console.log(this.editBursary.value);
    this.bursary.company_id = 0; //fix it
    this.bursary.bursary_name = this.editBursary.value.bursary_name;
    this.bursary.bursary_type = this.editBursary.value.bursary_type;
    this.bursary.bursary_description = this.editBursary.value.bursary_description;
    this.bursary.WB_duration = this.editBursary.value.WB_duration;
    this.bursary.min_age = this.editBursary.value.age_group.lower;
    this.bursary.max_age = this.editBursary.value.age_group.upper;
    this.bursary.academic_level = this.editBursary.value.academic_level;
    this.bursary.study_field = this.editBursary.value.study_field;
    this.bursary.minimum_year_required = this.editBursary.value.minimum_year_required;
    this.bursary.min_average = this.editBursary.value.min_average;
    this.bursary.RSA_citizen = this.editBursary.value.RSA_citizen;
    this.bursary.financial_need = this.editBursary.value.financial_need;
    this.bursary.study_further = this.editBursary.value.study_further;
    this.bursary.disability = this.editBursary.value.disability;
    this.bursary.province = this.editBursary.value.province;
    this.bursary.bursary_covers = this.editBursary.value.bursary_covers_for; 
    this.bursary.closing_date = this.dateChanged();
    this.bursary.shortlist_date = this.editBursary.value.shortlist_date.substring(0,10);
    this.bursary.email_address = this.editBursary.value.email_address_bursary;
    this.bursary.bursary_duration = this.editBursary.value.bursary_duration;
    console.log(this.bursary);

    //send api request 
    // this._apiService.editBursary(this.bursary).subscribe((res:Bursary) => {
    //   console.log("REQUEST SUCCESS ===", res);
    //   this.the_message = res["message"];
    //   this.printMessage();
    //   if (this.the_message.substring(0,7) == "Success"){
    //     this.router.navigate(['./view-bursary']);
    //   }
    // }, (error:any) => {
    //   this.the_message = 'error';// error;
    //   this.printMessage();
    //   console.log("ERROR ===", error);
    // });
  }

  _rangeChange(event :any){
    console.log(event.detail.value);
  }

  _ionChange(event : any){
    console.log(event.detail.checked);
  }

  multipleCheckBox(event: any){
    //console.log(event.detail.value);
  }

  dateChanged(){
    return (this.editBursary.get('closing_date').value.substring(0,10));
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
