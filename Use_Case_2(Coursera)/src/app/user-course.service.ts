import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usercourses } from './model/user_courses';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {

  constructor(private http:HttpClient) { }

  //Methods for CRUD operations

  // GET / READ
  getAllCourses():Observable<usercourses []>{
    
    return this.http.get<usercourses[]>('http://localhost:8080/courses');
  }
}