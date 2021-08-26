import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewProfilePageRoutingModule } from './view-profile-routing.module';
import { ViewProfilePage } from './view-profile.page';
import { MenuComponent } from '../../../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule
  ],
  declarations: [
    ViewProfilePage,
    MenuComponent
  ]
})
export class ViewProfilePageModule {}
