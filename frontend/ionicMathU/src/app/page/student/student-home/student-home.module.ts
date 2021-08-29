import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentHomePageRoutingModule } from './student-home-routing.module';
import { StudentHomePage } from './student-home.page';
import { MenuComponent } from '../../../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentHomePageRoutingModule
  ],
  declarations: [
    StudentHomePage,
    MenuComponent
  ]
})
export class StudentHomePageModule {}
