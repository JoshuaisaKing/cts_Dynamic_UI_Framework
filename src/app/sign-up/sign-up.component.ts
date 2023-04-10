import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signupForm!: FormGroup;
  image:string = 'assets/images/back.jpg';
  constructor(private service:BooksService, private formbuilder:FormBuilder, private router:Router){
    
  }
  ngOnInit(): void{
    this.signupForm = this.formbuilder.group({
      role:['Student'],
      name:[''],
      email:[''],
      password:['']
    }) 
  }

  signup(){
    this.service.signup(this.signupForm.value).subscribe(data =>{
      console.log(data);
      alert('You Have Registered Successfully!')
      this.router.navigate(['login']);
    })
  }
}
