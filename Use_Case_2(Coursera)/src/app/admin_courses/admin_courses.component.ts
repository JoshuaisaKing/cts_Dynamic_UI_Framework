import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { courses } from '../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './admin_courses.component.html',
  styleUrls: ['./admin_courses.component.css']
})
export class CourseComponent implements OnInit{

  image:string = 'assets/images/back.jpg';
  searchtext:any;
  public coursearray :any = [];
  coursesform!: FormGroup;
  courseobj:courses = new courses();
  constructor(private CourseService:CourseService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.coursesform = this.formBuilder.group({
      id:[''],
      course_name:[''],
      author:[''],
      course_level:['']
    })
    this.getAllCourses()
      
  }
  //GET
  getAllCourses(){
    return this.CourseService.getAllCourses().subscribe((data :any) =>{
      this.coursearray = data;
    })
  }
  //POST
  addCourse(){
    this.courseobj.id = this.coursesform.value.id;
    this.courseobj.course_name = this.coursesform.value.course_name;
    this.courseobj.author = this.coursesform.value.author;
    this.courseobj.course_level = this.coursesform.value.course_level;


    this.CourseService.addcourse(this.courseobj).subscribe(data =>{
      console.log(data);
      alert("New Course Has been Created!");
      this.getAllCourses();
    })
  }

  onEdit(course:any ){
    this.courseobj.id = course.id;
    this.coursesform.controls['id'].setValue(course.id);
    this.coursesform.controls['course_name'].setValue(course.course_name);
    this.coursesform.controls['author'].setValue(course.author);
    this.coursesform.controls['course_level'].setValue(course.course_level);
  }

  onupdatecourse(){
    this.courseobj.id = this.coursesform.value.id;
    this.courseobj.course_name = this.coursesform.value.course_name;
    this.courseobj.author = this.coursesform.value.author;
    this.courseobj.course_level = this.coursesform.value.course_level;
    console.log(this.courseobj);
    this.CourseService.updatecourse(this.courseobj, this.courseobj.id).subscribe(data =>{
      console.log(data);
      alert('Successfully Updated Course!');
      this.getAllCourses();
    })
  }

  onDelete(course:any){
    this.CourseService.deletecourse(course.id).subscribe(data =>{
      console.log(data);
      alert('Record Successfully Deleted!');
      this.getAllCourses();
    })
  }
}
