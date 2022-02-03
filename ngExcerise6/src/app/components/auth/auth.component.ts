import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService,AuthResponseData} from './auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode =true; 
  model : any ={}
  isLoading = false;
  error : string =null;
  constructor(private authservice : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSwitchmode()
  {
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(form : NgForm)
  {
// console.log(form.value);
if(!form.valid)
{
  return;
}


const email =form.value.email;
const password= form.value.password;
this.isLoading = true;

let authObservable : Observable<AuthResponseData>;

if(this.isLoginMode)
{
  authObservable=this.authservice.login(email,password)
}
else{
  authObservable=this.authservice.signup(email,password)
 
}
authObservable.subscribe( (resData)=>
{
  console.log(resData)
  this.isLoading = false;
  this.router.navigate(['/shopping']);
},

(errorMessage)=>
{
console.log(errorMessage);
this.error = errorMessage;
this.isLoading = false;
})

;

form.reset();
  }
}
