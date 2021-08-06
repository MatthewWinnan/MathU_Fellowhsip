import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentBasicComponent } from './student-basic/student-basic.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentEducationComponent } from './student-education/student-education.component';
import { RouterModule, Routes } from '@angular/router';

 
const appRoutes: Routes = [
  { path: 'student-basic', component: StudentBasicComponent },
  { path: 'student-education', component: StudentSubjectsComponent },
  { path: 'student-subjects', component: StudentEducationComponent },
  { path: '',   redirectTo: '/student-basic', pathMatch: 'full' },
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
