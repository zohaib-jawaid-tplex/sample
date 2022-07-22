import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userEmail = 'zohaibjawaid@gmail.com';
  password = '123456';

  form = new FormGroup({
    email: new FormControl(this.userEmail , [Validators.required, Validators.email]),
    password : new FormControl(this.password , [Validators.minLength(4) , Validators.maxLength(8) , Validators.required])
  });
  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  sign(){
    if(this.userEmail === this.form.value['email'] && this.password === this.form.value['password']){
      localStorage.setItem('token' , 'abc123');
      this._router.navigate(['feed']);
    }else{
      alert('Email and password not matched');
    }
  }


}
