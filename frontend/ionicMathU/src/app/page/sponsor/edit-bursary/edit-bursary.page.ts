import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
//import { IonicPage } from 'ionic-angular';

@Component({
  selector: 'app-edit-bursary',
  templateUrl: './edit-bursary.page.html',
  styleUrls: ['./edit-bursary.page.scss'],
})
export class EditBursaryPage implements OnInit {
  get bursary_name() {
    return this.addBursary.get('bursary_name');
  }
  get bursary_type() {
    return this.addBursary.get('bursary_type');
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
    bursary_description: [
      { type: 'required', message: 'Bursary Description is required'}
    ],
    email_address_bursary: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ]
  }

  addBursary = this.formBuilder.group({
    bursary_name: ['', [Validators.required, Validators.maxLength(100)]],
    bursary_type: ['', [Validators.required]],
    bursary_description: ['', [Validators.required]],
    email_address_bursary: [
      '', 
      [
        Validators.required, 
        Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")
      ]
    ]
    
    // work_back_duration: [],
    // applications_end: [],
    // age_group_min: [],
    // age_group_max: [],
    // study_level: [],
    // field_of_study: [],
    // year_of_study: [],
    // bursary_duration: [],
    // required_marks: [],
    // RSA_citizen: [],
    // need_financial_assistance: [],
    // willing_to_work_further: [],
    // diability: [],
    // province_in_SA: [],
    // bursary_covers_for: [

    // ],
    // date_for_further_communication: []
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public addBursarySubmit() {
    console.log(this.addBursary.value);
  }
}
