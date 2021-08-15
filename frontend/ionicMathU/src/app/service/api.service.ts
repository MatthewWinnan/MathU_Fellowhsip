import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sponsor_users } from '../model/sponsor_users';
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

  registerSponsor(data : Sponsor_users) {
    console.log(data);
    return this.http.post<Sponsor_users>('http://localhost/mathU_backend/math_u_addSponsor.php', data);
  }
}