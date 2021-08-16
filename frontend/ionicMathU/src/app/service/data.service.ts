import { Injectable } from '@angular/core';
import { Bursary } from '../model/bursaries';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data:Bursary = new Bursary();

  constructor() { }

  setData(id, data){
    this.data[id] = data;
  }

  getData(id){
    return this.data[id];
  }
}
