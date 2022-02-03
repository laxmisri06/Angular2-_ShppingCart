import { formatNumber } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


@ViewChild('loginform') loginto :NgForm 

  model : any ={}
  constructor() { }

  ngOnInit(): void {
  }
login(form:NgForm)
{

console.log(this.model);
form.reset(this.loginto);
}
}
