import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProfilePageRoutingModule } from './view-profile-routing.module';

import { ViewProfilePage } from './view-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule
  ],
  declarations: [ViewProfilePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ViewProfilePageModule {}
