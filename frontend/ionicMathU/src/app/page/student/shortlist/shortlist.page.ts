import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student_bursary } from 'src/app/model/student_bursary';
import { student_users } from 'src/app/model/student_users';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.page.html',
  styleUrls: ['./shortlist.page.scss'],
})


export class ShortlistPage implements OnInit {
  bursaryShortlist:Student_bursary[] = [];
  thisStudent:student_users = new student_users;
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    //stored in Storage (when login)
    this.initialiseStudentData();


    //api call to backend --> all bursaries with this student 
    this.initialiseShortlist();
  }

  initialiseStudentData(){
    //someone who just logged in 
    this.thisStudent.id = 100;
    this.thisStudent.student_id = "U0100";
    this.thisStudent.first_name = "Newbie";
    this.thisStudent.last_name = "Newest";
    this.thisStudent.date_of_birth = "03-03-1994";
    this.thisStudent.email_address = "marcus.rashford@gmail.com";
    this.thisStudent.nationality = false;
    this.thisStudent.contact_number = "";
    this.thisStudent.city = "";
    this.thisStudent.province = "";
    this.thisStudent.disability = null;
    this.thisStudent.current_academic_level = "";
    this.thisStudent.grade = 0.0;
    this.thisStudent.syllabus = "";
    this.thisStudent.average = 0.0;
    this.thisStudent.currently_studying = "";
    this.thisStudent.year_of_study = "";
    this.thisStudent.study_institution = "";
    this.thisStudent.continue_studies = null;
    this.thisStudent.gpa = 0.0;
    this.thisStudent.description_of_student = "";
    this.thisStudent.bursarred = null;
    this.thisStudent.current_bursaries = "";
    this.thisStudent.workback = 0;
    this.thisStudent.website = "";
    this.thisStudent.Students_marks = [];

    //High school student 
    // this.thisStudent.id = 1;
    // this.thisStudent.student_id = "U0001";
    // this.thisStudent.first_name = "Jadon";
    // this.thisStudent.last_name = "Sancho";
    // this.thisStudent.date_of_birth = "03-03-2005";
    // this.thisStudent.email_address ="jadon@gmail.com";
    // this.thisStudent.nationality = true;
    // this.thisStudent.contact_number = "+27 80 783 7823";
    // this.thisStudent.city = "Centurion";
    // this.thisStudent.province = "Gauteng";
    // this.thisStudent.disability = false;
    // this.thisStudent.current_academic_level = "High School";
    // this.thisStudent.grade = 10;
    // this.thisStudent.syllabus ="CAPS";
    // this.thisStudent.average = 70.0;
    // this.thisStudent.currently_studying = "";
    // this.thisStudent.year_of_study = "";
    // this.thisStudent.study_institution = "";
    // this.thisStudent.continue_studies = false;
    // this.thisStudent.gpa = 0.0;
    // this.thisStudent.description_of_student = "I am a very hard-working learner";
    // this.thisStudent.bursarred = false;
    // this.thisStudent.current_bursaries ="";
    // this.thisStudent.workback = 2;
    // this.thisStudent.website ="";
    // this.thisStudent.Students_marks = [
    //   {
    //     subject_name: "English",
    //     marks: 90.0
    //   },
    //   {
    //     subject_name: "Maths",
    //     marks: 75.0
    //   },
    //   {
    //     subject_name: "Afrikaans",
    //     marks: 85.0
    //   },
    //   {
    //     subject_name: "Life Orientation",
    //     marks: 90.0
    //   }
    // ];

    //Undergrad student
    // this.thisStudent.id = 2;
    // this.thisStudent.student_id = "U0002";
    // this.thisStudent.first_name = "Daniel";
    // this.thisStudent.last_name = "James";
    // this.thisStudent.date_of_birth = "03-03-1999";
    // this.thisStudent.email_address = "daniel@gmail.com";
    // this.thisStudent.nationality = true;
    // this.thisStudent.contact_number = "+27 80 783 0000";
    // this.thisStudent.city = "Johannesburg";
    // this.thisStudent.province = "Free State";
    // this.thisStudent.disability = false;
    // this.thisStudent.current_academic_level = "Undergraduate";
    // this.thisStudent.grade = 0.0;
    // this.thisStudent.syllabus = "";
    // this.thisStudent.average = 0.0;
    // this.thisStudent.currently_studying = "Civil Engineering";
    // this.thisStudent.year_of_study = "Year 3";
    // this.thisStudent.study_institution = "University of Pretoria";
    // this.thisStudent.continue_studies = false;
    // this.thisStudent.gpa = 75.0;
    // this.thisStudent.description_of_student = "I am an ambitious learner";
    // this.thisStudent.bursarred = false;
    // this.thisStudent.current_bursaries = "";
    // this.thisStudent.workback = 2;
    // this.thisStudent.website = "www.james.co.za";
    // this.thisStudent.Students_marks = [];
  }

  initialiseShortlist(){
    this.bursaryShortlist = [
      {
        Bursary_ID: 1,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-01-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 1,
          company_id: 0,
          bursary_name: "MechEng",
          bursary_type: "Work Back",
          bursary_description: "This is a good bursary",
          WB_duration: 4,
          min_age: 13,
          max_age: 26,
          academic_level: "Undergraduate",
          study_field: "Law",
          minimum_year_required: 2,
          min_average: 76,
          RSA_citizen: true,
          financial_need: false,
          study_further: false,
          disability: true,
          province: "Gauteng",
          bursary_covers: [
              "Accommodation Fees",
              "Meals",
              "Books Allowance",
              "Transport"
          ],
          closing_date: "2021-11-16",
          shortlist_date: "2021-11-20",
          email_address: "name@gmail.com",
          bursary_duration: 2,
          isVisible: true,

          company: {
            company_id: 0,
            company_name: "Sasol",
            company_industry: "Mining",
            company_logo: "", //not implemented for now
            company_description: "This is a good company",
            company_URL: "www.sasol.com",
            number_of_reports: 0,
          }
        }
      },
      {
        Bursary_ID: 5,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Accepted",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 5,
          company_id: 1,
          bursary_name: "HatchEng",
          bursary_type: "Bursary",
          bursary_description: "This is a hatch bursary",
          WB_duration: 0,
          min_age: 10,
          max_age: 26,
          academic_level: "Undergraduate",
          study_field: "Law",
          minimum_year_required: 2,
          min_average: 76,
          RSA_citizen: true,
          financial_need: false,
          study_further: false,
          disability: true,
          province: "Gauteng",
          bursary_covers: [
              "Accommodation Fees",
              "Meals",
              "Books Allowance",
              "Transport"
          ],
          closing_date: "2021-11-16",
          shortlist_date: "2021-11-20",
          email_address: "name@gmail.com",
          bursary_duration: 2,
          isVisible: true,

          company: {
            company_id: 1,
            company_name: "Hatch",
            company_industry: "Law",
            company_logo: "", //not implemented for now
            company_description: "This is a amazing company",
            company_URL: "www.hatch.com",
            number_of_reports: 0,
          }
        }
      },
      {
        Bursary_ID: 6,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Declined",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 6,
          company_id: 2,
          bursary_name: "ElecEng",
          bursary_type: "Work Back",
          bursary_description: "This is a good bursary",
          WB_duration: 4,
          min_age: 13,
          max_age: 26,
          academic_level: "Undergraduate",
          study_field: "Law",
          minimum_year_required: 2,
          min_average: 76,
          RSA_citizen: true,
          financial_need: false,
          study_further: false,
          disability: true,
          province: "Gauteng",
          bursary_covers: [
              "Accommodation Fees",
              "Meals",
              "Books Allowance",
              "Transport"
          ],
          closing_date: "2021-11-16",
          shortlist_date: "2021-11-20",
          email_address: "name@gmail.com",
          bursary_duration: 2,
          isVisible: true,

          company: {
            company_id: 2,
            company_name: "Eskom",
            company_industry: "Electricity",
            company_logo: "", //not implemented for now
            company_description: "This is a electricity company",
            company_URL: "www.eskom.com",
            number_of_reports: 0,
          }
        }
      },
      {
        Bursary_ID: 8,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 8,
          company_id: 3,
          bursary_name: "ChemEng",
          bursary_type: "Work Back",
          bursary_description: "This is a good bursary",
          WB_duration: 4,
          min_age: 13,
          max_age: 26,
          academic_level: "Undergraduate",
          study_field: "Law",
          minimum_year_required: 2,
          min_average: 76,
          RSA_citizen: true,
          financial_need: false,
          study_further: false,
          disability: true,
          province: "Gauteng",
          bursary_covers: [
              "Accommodation Fees",
              "Meals",
              "Books Allowance",
              "Transport"
          ],
          closing_date: "2021-11-16",
          shortlist_date: "2021-11-20",
          email_address: "name@gmail.com",
          bursary_duration: 2,
          isVisible: true,

          company: {
            company_id: 3,
            company_name: "Dischem",
            company_industry: "Pharmacy",
            company_logo: "", //not implemented for now
            company_description: "This is a medicine company",
            company_URL: "www.dischem.com",
            number_of_reports: 0,
          }
        }
      },
      {
        Bursary_ID: 10,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 10,
          company_id: 8,
          bursary_name: "AeroEng",
          bursary_type: "Work Back",
          bursary_description: "This is a good bursary",
          WB_duration: 4,
          min_age: 13,
          max_age: 26,
          academic_level: "Undergraduate",
          study_field: "Law",
          minimum_year_required: 2,
          min_average: 76,
          RSA_citizen: true,
          financial_need: false,
          study_further: false,
          disability: true,
          province: "Gauteng",
          bursary_covers: [
              "Accommodation Fees",
              "Meals",
              "Books Allowance",
              "Transport"
          ],
          closing_date: "2021-11-16",
          shortlist_date: "2021-11-20",
          email_address: "name@gmail.com",
          bursary_duration: 2,
          isVisible: true,

          company: {
            company_id: 8,
            company_name: "NASA",
            company_industry: "Space",
            company_logo: "", //not implemented for now
            company_description: "This is a rocket company",
            company_URL: "www.nasa.com",
            number_of_reports: 0,
          }
        }
      },

      {
        Bursary_ID: 15,
        Student_ID: this.thisStudent.id,
        Application_Date: "02-02-2021",
        Status: "Pending",
        Student: this.thisStudent,
        bursary: {
          bursary_id: 15,
          company_id: 10,
          bursary_name: "AeroEng",
          bursary_type: "Work Back",
          bursary_description: "This is a good bursary",
          WB_duration: 4,
          min_age: 13,
          max_age: 26,
          academic_level: "Undergraduate",
          study_field: "Law",
          minimum_year_required: 2,
          min_average: 76,
          RSA_citizen: true,
          financial_need: false,
          study_further: false,
          disability: true,
          province: "Gauteng",
          bursary_covers: [
              "Accommodation Fees",
              "Meals",
              "Books Allowance",
              "Transport"
          ],
          closing_date: "2021-11-16",
          shortlist_date: "2021-11-20",
          email_address: "name@gmail.com",
          bursary_duration: 2,
          isVisible: true,

          company: {
            company_id: 10,
            company_name: "Bell",
            company_industry: "IT and Telecommunications",
            company_logo: "", //not implemented for now
            company_description: "This is a phone company",
            company_URL: "www.bell.com",
            number_of_reports: 0,
          }
        }
      },
      


    ];
  }

  goToBursaryView(bursID, k) {
    console.log("goToBursaryView() ran with the ",  bursID );
    k = bursID
    this.router.navigate(["/student-home", k])    
  }

  deleteApplication(bursID) {
    console.log("deleteApplication() ran with the ",  bursID )
  }

  doRefresh() {
    window.location.reload();
  }}
