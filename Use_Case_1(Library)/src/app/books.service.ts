import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { books } from './model/books';
import { ISignup } from './model/signup';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  //Methods for CRUD operations

  // GET / READ
  getAllBooks():Observable<books []>{
    
    return this.http.get<books[]>('http://localhost:8080/books');
  }

  // POST / CREATE
  addBook(book:books):Observable<books>{
    return this.http.post<books>('http://localhost:8080/books/',book);
  }

  // PUT / UPDATE
  updatebook(book:any, id:number):Observable<books>{
    return this.http.put<books>('http://localhost:8080/books/' +id,book);
  }

  // DELETE
  deletebook(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/books/' +id);
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
