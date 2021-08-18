import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptStuPageRoutingModule } from './accept-stu-routing.module';

import { AcceptStuPage } from './accept-stu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptStuPageRoutingModule
  ],
  declarations: [AcceptStuPage]
})
export class AcceptStuPageModule {}
