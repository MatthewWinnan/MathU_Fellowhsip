
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentBasicComponent } from './student-basic/student-basic.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentEducationComponent } from './student-education/student-education.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentBasicComponent,
    StudentSubjectsComponent,
    StudentEducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
