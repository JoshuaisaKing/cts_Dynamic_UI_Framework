import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserCourseService } from '../user-course.service';
import { courses } from '../model/courses';

@Component({
  selector: 'app-books',
  templateUrl: './user_courses.component.html',
  styleUrls: ['./user_courses.component.css']
})
export class UserCourseComponent implements OnInit{

  image:string = 'assets/images/back.jpg';
  searchtext:any;
  public usercoursearray :any = [];
  booksform!: FormGroup;
  booksobj:courses = new courses();
  constructor(private courseService:UserCourseService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.getAllUserCourses()
  }
  //GET
  getAllUserCourses(){
    return this.courseService.getAllCourses().subscribe(data =>{
      this.usercoursearray = data;
    })
  }
}