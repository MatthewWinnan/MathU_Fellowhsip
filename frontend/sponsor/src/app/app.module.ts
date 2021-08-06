import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonComponent } from './components/common/common.component';
import { ConfirmationDialogueComponent } from './components/common/confirmation-dialogue/confirmation-dialogue.component';
import { ForgotPasswordComponent } from './components/common/forgot-password/forgot-password.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { LogoScreenComponent } from './components/common/logo-screen/logo-screen.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { RegisterComponent } from './components/common/register/register.component';

import { SponsorComponent } from './components/sponsor/sponsor.component';
import { ApplicationsComponent } from './components/sponsor/applications/applications.component';
import { ApplicationCardComponent } from './components/sponsor/applications/application-card/application-card.component';
import { ApplicationDetailedCardComponent } from './components/sponsor/applications/application-detailed-card/application-detailed-card.component';
import { ApplicationFilterComponent } from './components/sponsor/applications/application-filter/application-filter.component';

import { SponsorBursaryComponent } from './components/sponsor/sponsor-bursary/sponsor-bursary.component';
import { SponsorBursaryCardComponent } from './components/sponsor/sponsor-bursary/sponsor-bursary-card/sponsor-bursary-card.component';
import { SponsorBursaryDetailedCardComponent } from './components/sponsor/sponsor-bursary/sponsor-bursary-detailed-card/sponsor-bursary-detailed-card.component';
import { SponsorBursaryFilterComponent } from './components/sponsor/sponsor-bursary/sponsor-bursary-filter/sponsor-bursary-filter.component';
import { SponsorEditBursaryDialogueComponent } from './components/sponsor/sponsor-bursary/sponsor-edit-bursary-dialogue/sponsor-edit-bursary-dialogue.component';
import { EmployeeComponent } from './components/sponsor/employee/employee.component';
import { EditEmployeeDialogueComponent } from './components/sponsor/employee/edit-employee-dialogue/edit-employee-dialogue.component';
import { EmployeeCardComponent } from './components/sponsor/employee/employee-card/employee-card.component';
import { SponsorProfileComponent } from './components/sponsor/sponsor-profile/sponsor-profile.component';

import { StudentComponent } from './components/student/student.component';
import { StudentBursaryComponent } from './components/student/student-bursary/student-bursary.component';
import { StudentBursaryCardComponent } from './components/student/student-bursary/student-bursary-card/student-bursary-card.component';
import { StudentBursaryDetailedCardComponent } from './components/student/student-bursary/student-bursary-detailed-card/student-bursary-detailed-card.component';
import { StudentBursaryFilterComponent } from './components/student/student-bursary/student-bursary-filter/student-bursary-filter.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { UserProfileCardComponent } from './components/student/student-profile/user-profile-card/user-profile-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    ConfirmationDialogueComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoginComponent,
    LogoScreenComponent,
    MenuComponent,
    RegisterComponent,
    ApplicationsComponent,
    EmployeeComponent,

    SponsorComponent,
    ApplicationsComponent,
    ApplicationCardComponent,
    ApplicationDetailedCardComponent,
    ApplicationFilterComponent,
    SponsorBursaryComponent,
    SponsorBursaryCardComponent,
    SponsorBursaryDetailedCardComponent,
    SponsorBursaryFilterComponent,
    SponsorEditBursaryDialogueComponent,
    EmployeeComponent,
    EditEmployeeDialogueComponent,
    EmployeeCardComponent,
    SponsorProfileComponent,

    StudentComponent,
    StudentBursaryComponent,
    StudentBursaryCardComponent,
    StudentBursaryDetailedCardComponent,
    StudentBursaryFilterComponent,
    StudentProfileComponent,
    UserProfileCardComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule ,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
