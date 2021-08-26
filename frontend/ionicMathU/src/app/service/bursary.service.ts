import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
