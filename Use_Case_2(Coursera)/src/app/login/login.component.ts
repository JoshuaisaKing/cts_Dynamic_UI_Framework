import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  image:string = 'assets/images/back.jpg';

  loginForm!: FormGroup;
  constructor(private service:CourseService, private frombuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
      this.loginForm = this.frombuilder.group({
        role:[''],
        email:[''],
        password:['']
      }) 
  }

  login(){
    this.service.login().subscribe(data =>{
      const user = data['find']((x:any)=>{
          return x.email === this.loginForm.value.email && x.password === this.loginForm.value.password && x.role === this.loginForm.value.role;
      });
      if(user != null){
        alert('You Have Logged In Successfully!');
        if (user.role === 'Administrator') {
          this.router.navigate(['books']);
        } else {
          this.router.navigate(['student-books']);
        }
        
      }
      else{
        alert('Username or Password is Incorrect!');
      }
    })
  }
}

