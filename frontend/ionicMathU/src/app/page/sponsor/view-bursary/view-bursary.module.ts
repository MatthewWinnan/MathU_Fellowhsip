import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewBursaryPageRoutingModule } from './view-bursary-routing.module';
import { ViewBursaryPage } from './view-bursary.page';
import { MenuComponent } from '../../../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBursaryPageRoutingModule
  ],
  declarations: [
    ViewBursaryPage,
    MenuComponent
  ]
})
export class ViewBursaryPageModule {}
