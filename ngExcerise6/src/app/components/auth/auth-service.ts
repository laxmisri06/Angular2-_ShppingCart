import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import {  Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Userdata } from "./user-data.model";


export interface AuthResponseData
{ 
    kind : string,
    idToken : string,
    email: string,
    refreshToken: string,
    expiresIn : string,
    localId : string,
    registered?: boolean
}

@Injectable({providedIn:'root'})
export class AuthService
{
    user = new Subject<Userdata>();
constructor(private http :HttpClient,
    private router : Router)
{

}

signup(email :string ,password : string)
{
    return this.http.post<AuthResponseData>
    (
'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcG1rJCGqxH-EPVsPd7aF61q6t1BI_Pvc'
       ,{
        email :email,
        password: password,
        returnSecureToken : true
    }
    
    ).pipe(catchError(this.handleerror),
    tap(resData=>
        {
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn)
        })
    );
}


login(email:string,password:string)
{
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcG1rJCGqxH-EPVsPd7aF61q6t1BI_Pvc',
    {
        email :email,
        password: password,
        returnSecureToken : true
    }
    
    
    ).pipe(catchError(this.handleerror),tap(resData=>
        {
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn)
        })
    
    
    );
}
logout()
{
    this.user.next(null);
    this.router.navigate(['/auth']);
}
private handleAuthentication(email:string,userId:string,token:string,expiresIn:number)
{
    const expirationdate = new Date(new Date().getTime() + expiresIn *1000);
    const user = new Userdata(
        email,
        userId,
      
      token,
        expirationdate);
        this.user.next(user);
}

private handleerror(errorRes: HttpErrorResponse)
{
    let errorMessage ='An unknown error occured!!';
    if(!errorRes.error || !errorRes.error.error)
        {
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message)
        {
            case 'EMAIL_EXISTS':
                errorMessage ='This email already exists';
                break;
                case 'EMAIL_NOT_FOUND':
                errorMessage ='Email not found';
                break;
                case 'INVALID_PASSWORD':
                    errorMessage ='This password is Incorrect';
                    break;

        }
        return throwError(errorMessage)
}
}
