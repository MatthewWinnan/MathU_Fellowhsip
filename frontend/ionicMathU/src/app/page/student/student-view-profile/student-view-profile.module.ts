import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentViewProfilePageRoutingModule } from './student-view-profile-routing.module';
import { ViewProfilePage } from './student-view-profile.page';
import { MenuComponent } from '../../../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentViewProfilePageRoutingModule
  ],
  declarations: [
    ViewProfilePage,
    MenuComponent
  ]
})
export class ViewStudentPageModule {}
