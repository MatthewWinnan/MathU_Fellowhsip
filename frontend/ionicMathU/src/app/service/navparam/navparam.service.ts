import { Injectable } from '@angular/core';
import { student_users } from '../../model/student_users';
@Injectable({
  providedIn: 'root'
})
export class NavparamService {
  student:student_users;
  user:any;
  constructor() { }
  setUser()
  {

  }
  getUser()
  {

  }
  setStudent(navObject)
  {
    this.student=navObject;
  }
  getStudent()
  {
    return this.student;
  }

}
