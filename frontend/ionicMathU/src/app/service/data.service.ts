import { Injectable } from '@angular/core';
import { Bursary } from '../model/bursaries';
import { Sponsor_users } from '../model/sponsor_users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data:Bursary = new Bursary();
  private employeeData:Sponsor_users = new Sponsor_users();
  //private data: any;

  constructor() { }

  setData(id, data){
    this.data[id] = data;
  }

  getData(id){
    return this.data[id];
    //this.employeeData[id] = data;
  }

  // getData(id){
  //   return this.employeeData[id];
  // }
}
