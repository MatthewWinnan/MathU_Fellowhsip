import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AcceptStuPage } from '../accept-stu/accept-stu.page';
import { DeclineStuPage } from '../decline-stu/decline-stu.page';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.page.html',
  styleUrls: ['./view-applicants.page.scss'],
})
export class ViewApplicantsPage implements OnInit {

  constructor(public ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  Applicants=[{
    applicant_name: 'Jadon',
    applicant_lastName: 'Sancho',
    applicant_average: '65%'
  },
  {
    applicant_name: 'Daniel',
    applicant_lastName: 'James',
    applicant_average: '75%'
  },
  {
    applicant_name: 'Marcus',
    applicant_lastName: 'Rashford',
    applicant_average: '80%'
  },]

  

  async declineStu() {
    const modal = await this.ModalCtrl.create({
      component : DeclineStuPage
    })

    return await modal.present()
    
  }

  async acceptStu() {
    const modal = await this.ModalCtrl.create({
      component : AcceptStuPage
    })

    return await modal.present()
  }

}
