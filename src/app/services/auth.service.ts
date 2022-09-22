import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtRequest } from '../model/jwt-request';
import { JwtResponse } from '../model/jwt-response';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticationUrl="http://localhost:9090/online-fashion-store/authenticate";
  private fetchUserDetailUrl="http://localhost:9090/online-fashion-store/users/";
  private forgotPasswordUrl="http://localhost:9090/online-fashion-store/forgot-password";
  public loggedInUser=new BehaviorSubject<User>({});
  constructor(private http:HttpClient,private router:Router,private spinner:NgxSpinnerService ) { }




public login(user:JwtRequest):Observable<JwtResponse>
{
 return this.http.post<JwtResponse>(this.authenticationUrl,user);
}

public resetPassword(user:JwtRequest):Observable<User>
{
 return this.http.post<User>(this.forgotPasswordUrl,user);
}

public getLoggedUser(){
let id=sessionStorage.getItem("loggedInUserId");
if(id){
  this.http.get<User>(this.fetchUserDetailUrl+id).subscribe(
    (response:User)=>{
      console.log("current logged in "+response);
     
      this.loggedInUser.next(response);
    }
  )
  }
}


public isUserLoggedIn()
{
  return sessionStorage.getItem("token")?true:false;
}
public getToken()
{
  return sessionStorage.getItem("token");
}
public logout(){
  sessionStorage.clear();

}
public isAdmin()
{
  if(sessionStorage.getItem("isAdmin")!=null && sessionStorage.getItem("isAdmin")=="true" )
  {
return true;
  }
  else{
    return false;
  }

}

}
