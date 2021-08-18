import { Injectable } from '@angular/core';
import { Sponsor_users } from '../model/sponsor_users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private employeeData:Sponsor_users = new Sponsor_users();
  //private data: any;

  constructor() { }

  setEmployeeData(id, data){
    this.employeeData[id] = data;
  }

  getEmployeeData(id){
    return this.employeeData[id];
  }
}
