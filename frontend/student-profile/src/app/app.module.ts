
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';

import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentEducationComponent } from './student-education/student-education.component';
import { StudentBasicModule } from './student-basic/student-basic.module';


@NgModule({
  declarations: [
    AppComponent,
    StudentSubjectsComponent,
    StudentEducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StudentBasicModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
