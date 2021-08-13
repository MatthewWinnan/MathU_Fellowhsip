import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
  }

  login_a_user(data:any){
    return this.http.post<any>('http://localhost/mathU_backend/math_u_login.php', data);
    //change the file name!
  }
}
