import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student_users } from '../model/student_users';
import { Student_bursary } from '../model/student_bursary';

@Injectable({
  providedIn: 'root'
})
export class BursaryService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient,
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
  }

  getBursaries(data){
    return this.http.post<any>('http://localhost/mathU_backend/get_all_bursaries.php', data);
    //change file name 
  }

  getStudentBursaries(data:student_users){
    return this.http.post<any>('http://localhost/mathU_backend/get_student_bursaries.php', data);
    //change file name 
  }

  studentApplyBursary(data:Student_bursary){
    return this.http.post<any>('http://localhost/mathU_backend/student_apply.php', data);
    //change file name 
  }
}
