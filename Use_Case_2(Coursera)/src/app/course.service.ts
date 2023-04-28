import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courses } from './model/courses';
import { ISignup } from './model/signup';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  //Methods for CRUD operations

  // GET / READ
  getAllCourses():Observable<courses []>{
    
    return this.http.get<courses[]>('http://localhost:8080/courses');
  }

  // POST / CREATE
  addcourse(course:courses):Observable<courses>{
    return this.http.post<courses>('http://localhost:8080/courses',course);
  }

  // PUT / UPDATE
  updatecourse(courses:any, id:number):Observable<courses>{
    console.log('http://localhost:8080/courses/'+id);
    return this.http.put<courses>(`http://localhost:8080/courses/${id}` ,courses);
  }

  // DELETE
  deletecourse(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/courses/' +id);
  }

  //POST / SIGNUP
  signup(info:ISignup):Observable<ISignup>{
    return this.http.post<ISignup>('http://localhost:8080/UserSignupForm/',info);
  }

  //GET / LOGIN
  login():Observable<ISignup>{
    return this.http.get<ISignup>('http://localhost:8080/UserSignupForm/');
  }
}
