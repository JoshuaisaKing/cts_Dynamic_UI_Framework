import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StuBooksService } from '../student-books.service';
import { books } from '../model/books';

@Component({
  selector: 'app-books',
  templateUrl: './student-books.component.html',
  styleUrls: ['./student-books.component.css']
})
export class StuBooksComponent implements OnInit{

  image:string = 'assets/images/back.jpg';
  searchtext:any;
  public stubooksarray :any = [];
  booksform!: FormGroup;
  booksobj:books = new books();
  constructor(private booksService:StuBooksService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.getAllStuBooks()
  }
  //GET
  getAllStuBooks(){
    return this.booksService.getAllStuBooks().subscribe(data =>{
      this.stubooksarray = data;
    })
  }
}