import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclineStuPageRoutingModule } from './decline-stu-routing.module';

import { DeclineStuPage } from './decline-stu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclineStuPageRoutingModule
  ],
  declarations: [DeclineStuPage]
})
export class DeclineStuPageModule {}
