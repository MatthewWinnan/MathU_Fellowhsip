import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student_users } from 'src/app/model/student_users';
import { Observable } from 'rxjs';
//import { sponsor_users } from '../../model/sponsor_users';
//import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient,
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
   }

//   registerSponsor(data : sponsor_users) : Observable<sponsor_users> {
//     //console.log(data);
//     return this.http.post<sponsor_users>('http://localhost/mathU_backend/math_u_addSponsor.php', data);
//   }

   registerStudent(data: student_users) : Observable<student_users>{
     console.log(data);
     return this.http.post<student_users>('http://localhost/mathU_backend/math_u_addStudent.php', data);
   }
}
