import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { StuBooksService } from '../student-books.service';
import { books } from '../model/books';


@Component({
  selector: 'app-books',
  templateUrl: './student-books.component.html',
  styleUrls: ['./student-books.component.css']
})
export class StuBooksComponent implements OnInit{

  searchtextstuname : any;
  searchtextbookname: any;
  searchtextauthorname: any;
  searchtextreturned: any;
  dateandtime = new Date();
  currentdateandtime = this.dateandtime.toDateString();
  p:number = 1;
  image:string = 'assets/images/back.jpg';
  public stubooksarray :any = [];
  public stubooksarraycnames : any;
  booksform!: FormGroup;
  booksobj:books = new books();
  constructor(private booksService:StuBooksService,private formBuilder:FormBuilder){ }

  ngOnInit(): void {
    this.getAllStuBooks()
  }
  //GET
  getAllStuBooks(){
    return this.booksService.getAllStuBooks().subscribe(data =>{
      this.stubooksarray = data;
      console.log(data[0]);
    })
  }
  key = 'id';
  r:boolean = false;
  sort(key: string){
    this.key = key;
    this.r = !this.r;

  }
}
