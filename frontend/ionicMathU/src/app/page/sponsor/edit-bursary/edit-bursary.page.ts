import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Bursary } from '../../../model/bursaries';
import { BursaryService } from '../../../service/bursary.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-bursary',
  templateUrl: './edit-bursary.page.html',
  styleUrls: ['./edit-bursary.page.scss'],
})
export class EditBursaryPage implements OnInit {
  data:Bursary;
  the_message : string = "";

  dateToday = new Date().toISOString().substring(0,10);

  get bursary_name() {
    return this.addBursary.get('bursary_name');
  }
  get bursary_type() {
    return this.addBursary.get('bursary_type');
  }
  get WB_duration() {
    return this.addBursary.get('WB_duration');
  }
  get age_group() {
    return this.addBursary.get('age_group');
  }
  get academic_level() {
    return this.addBursary.get('academic_level');
  }
  get study_field() {
    return this.addBursary.get('study_field');
  }
  get minimum_year_required() {
    return this.addBursary.get('minimum_year_required');
  }
  get min_average() {
    return this.addBursary.get('min_average');
  }
  get RSA_citizen(){
    return this.addBursary.get('RSA_citizen');
  }
  get financial_need(){
    return this.addBursary.get('financial_need');
  }
  get study_further(){
    return this.addBursary.get('study_further');
  }
  get disability(){
    return this.addBursary.get('disability');
  }
  get province(){
    return this.addBursary.get('province');
  }
  get bursary_covers_for(){
    return this.addBursary.get('bursary_covers_for');
  }
  get bursary_duration(){
    return this.addBursary.get('bursary_duration');
  }
  get closing_date(){
    return this.addBursary.get('closing_date');
  }
  get shortlist_date(){
    return this.addBursary.get('shortlist_date');
  }
  get bursary_description() {
    return this.addBursary.get('bursary_description');
  }

  get email_address_bursary() {
    return this.addBursary.get('email_address_bursary');
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

  addBursary = this.formBuilder.group({
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
    private route:ActivatedRoute, 
  ) { }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData'];
      //console.log(this.data);
    }
    this.addBursary = this.formBuilder.group({
      bursary_name: [this.data.bursary_name, [Validators.required, Validators.maxLength(100)]],
      bursary_type: [this.data.bursary_type, [Validators.required]],
      WB_duration: [this.data.WB_duration],
      age_group: [{"Lower": this.data.min_age, 
                "Upper": this.data.max_age}],  
      academic_level: [this.data.academic_level, [Validators.required]],
      study_field: [this.data.study_field],
      minimum_year_required: [this.data.minimum_year_required],
      min_average: [this.data.min_average],
      RSA_citizen: [this.data.RSA_citizen],
      financial_need: [this.data.financial_need],
      study_further: [this.data.study_further],
      disability: [this.data.disability],
      province: [this.data.province],
      bursary_covers_for: [this.data.bursary_covers],
      bursary_duration: [this.data.bursary_duration, [Validators.required]],
      closing_date: [this.data.closing_date, [Validators.required]],
      shortlist_date: [this.data.shortlist_date, [Validators.required]],
      bursary_description: [this.data.bursary_description, [Validators.required]],
      email_address_bursary: [
        this.data.email_address, 
        [
          Validators.required, 
          Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")
        ]
      ]
    });
    this.addBursary.value.age_group.lower = this.data.min_age;
    this.addBursary.value.age_group.upper = this.data.max_age;
  }

  public addBursarySubmit() {
    //console.log(this.addBursary.value);
    this.bursary.company_id = this.data.company_id; //fix it
    this.bursary.bursary_id = this.data.bursary_id;
    this.bursary.bursary_name = this.addBursary.value.bursary_name;
    this.bursary.bursary_type = this.addBursary.value.bursary_type;
    this.bursary.bursary_description = this.addBursary.value.bursary_description;
    this.bursary.WB_duration = this.addBursary.value.WB_duration;
    this.bursary.min_age = this.addBursary.value.age_group.lower;
    this.bursary.max_age = this.addBursary.value.age_group.upper;
    this.bursary.academic_level = this.addBursary.value.academic_level;
    this.bursary.study_field = this.addBursary.value.study_field;
    this.bursary.minimum_year_required = this.addBursary.value.minimum_year_required;
    this.bursary.min_average = this.addBursary.value.min_average;
    this.bursary.RSA_citizen = this.addBursary.value.RSA_citizen;
    this.bursary.financial_need = this.addBursary.value.financial_need;
    this.bursary.study_further = this.addBursary.value.study_further;
    this.bursary.disability = this.addBursary.value.disability;
    this.bursary.province = this.addBursary.value.province;
    this.bursary.bursary_covers = this.addBursary.value.bursary_covers_for; 
    this.bursary.closing_date = this.dateChanged();
    this.bursary.shortlist_date = this.addBursary.value.shortlist_date.substring(0,10);
    this.bursary.email_address = this.addBursary.value.email_address_bursary;
    this.bursary.bursary_duration = this.addBursary.value.bursary_duration;
    this.bursary.isVisible = this.data.isVisible;
    this.bursary.bursary_status = this.data.bursary_status;
    this.bursary.company = this.data.company;
    console.log(this.bursary);
    
    //send api request 
    this._apiService.editBursary(this.bursary).subscribe((res:Bursary) => {
      console.log("EDIT REQUEST SUCCESS ===", res);
      this.the_message = res["message"];
      this.printMessage();
      if (this.the_message.substring(0,7) == "Success"){
        this.router.navigateByUrl('/view-bursary/1');
      }
    }, (error:any) => {
      this.the_message = 'error';// error;
      this.printMessage();
      console.log("ERROR ===", error);
    });
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
    return (this.addBursary.get('closing_date').value.substring(0,10));
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
