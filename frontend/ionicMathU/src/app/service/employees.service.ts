import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bursary } from '../model/bursaries';
import { Company } from '../model/Company';
import { Sponsor_users } from '../model/sponsor_users';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient,
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
  }

  addEmployee(data:Sponsor_users){
    return this.http.post<any>('http://localhost/mathU_backend/math_u_addEmployee.php', data);
  }

  getEmployees(data:Company){
    return this.http.post<Sponsor_users[]>('http://localhost/mathU_backend/math_u_viewEmployees.php', data);
  }
}