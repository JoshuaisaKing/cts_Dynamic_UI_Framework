import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { books } from '../model/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  image:string = 'assets/images/back.jpg';
  searchtext:any;
  today = new Date();
  fifdaysfromnow = this.today.getFullYear() + '-' + (this.today.getMonth()+1) + '-' + (this.today.getDay()+15);
  public booksarray :any = [];
  booksform!: FormGroup;
  booksobj:books = new books();
  constructor(private booksService:BooksService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.booksform = this.formBuilder.group({
      id:[''],
      borrowed_by:[''],
      book_name:[''],
      borrow_date:[''],
      return_by:[''],
      author:[''],
      returned:['']
    })
    this.getAllBooks()
      
  }
  //GET
  getAllBooks(){
    return this.booksService.getAllBooks().subscribe((data :any) =>{
      this.booksarray = data;
    })
  }
  //POST
  addBook(){
    this.booksobj.id = this.booksform.value.id;
    this.booksobj.borrowed_by = this.booksform.value.borrowed_by;
    this.booksobj.book_name = this.booksform.value.book_name;
    this.booksobj.borrow_date = this.booksform.value.borrow_date;
    this.booksform.value.return_by = this.fifdaysfromnow;
    this.booksobj.return_by = this.booksform.value.return_by;
    this.booksobj.author = this.booksform.value.author;
    this.booksobj.returned = this.booksform.value.returned;


    this.booksService.addBook(this.booksobj).subscribe(data =>{
      console.log(data);
      console.log(this.fifdaysfromnow);
      alert("New Book Has been Borrowed!");
      this.getAllBooks();
    })
  }

  onEdit(book:any){
    this.booksobj.id = book.id;
    this.booksform.controls['borrowed_by'].setValue(book.borrowed_by);
    this.booksform.controls['author'].setValue(book.author);
    this.booksform.controls['book_name'].setValue(book.book_name);
    this.booksform.controls['returned'].setValue(book.returned);
    this.booksform.controls['borrow_date'].setValue(book.borrow_date);
    this.booksform.controls['return_by'].setValue(book.return_by);
  }

  onupdatebook(){
    this.booksobj.book_name = this.booksform.value.book_name;
    this.booksobj.returned = this.booksform.value.returned;
    this.booksobj.author = this.booksform.value.author;
    this.booksobj.borrowed_by = this.booksform.value.borrowed_by;
    this.booksobj.borrow_date = this.booksform.value.borrow_date;
    this.booksobj.return_by = this.booksform.value.return_by;
    console.log(this.booksobj);
    this.booksService.updatebook(this.booksobj, this.booksobj.id).subscribe(data =>{
      console.log(data);
      alert('Successfully Updated!');
      this.getAllBooks();
    })
  }

  onDelete(book:any){
    this.booksService.deletebook(book.id).subscribe(data =>{
      console.log(data);
      alert('Record Successfully Deleted!');
      this.getAllBooks();
    })
  }
}
