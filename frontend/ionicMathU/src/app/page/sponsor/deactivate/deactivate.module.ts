import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeactivatePageRoutingModule } from './deactivate-routing.module';

import { DeactivatePage } from './deactivate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeactivatePageRoutingModule
  ],
  declarations: [DeactivatePage]
})
export class DeactivatePageModule {}
