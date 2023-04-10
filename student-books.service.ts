import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { books } from './model/books';
import { stubooks } from './model/student-books';

@Injectable({
  providedIn: 'root'
})
export class StuBooksService {

  constructor(private http:HttpClient) { }

  //Methods for CRUD operations

  // GET / READ
  getAllStuBooks():Observable<stubooks []>{
    
    return this.http.get<stubooks[]>('http://localhost:8080/books');
  }
}