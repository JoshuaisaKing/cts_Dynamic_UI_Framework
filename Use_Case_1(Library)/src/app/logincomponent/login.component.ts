import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  image:string = 'assets/images/back.jpg';

  loginForm!: FormGroup;
  dateandtime = new Date();
  currentdateandtime = this.dateandtime.toDateString();

  constructor(private service:BooksService, private frombuilder:FormBuilder, private router:Router){}

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
        console.log(this.loginForm.value.email);
        if (user.role === 'Administrator') {
          this.router.navigate(['books']);
        } else {
          this.router.navigate(['student-books']);
        }
        
      }
      else{
        console.log(`${this.currentdateandtime} :`, this.loginForm.value.email , ' Incorrect attempt for login');
        alert('Username or Password is Incorrect!');
      }
    })
  }
}

