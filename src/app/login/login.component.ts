import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { JwtRequest } from '../model/jwt-request';
import { JwtResponse } from '../model/jwt-response';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new JwtRequest();
  message?:string;
  constructor(private auth:AuthService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

login()
{ this.spinner.show();
this.auth.login(this.user).subscribe(
  (response:JwtResponse)=>{
  if(response.token)
  {
    
   sessionStorage.setItem("token",response.token);
   if(response.userId)
   {
   sessionStorage.setItem("loggedInUserId",response.userId);
   this.auth.getLoggedUser();
   }
   if(response.isAdmin=="true")
   {
   sessionStorage.setItem("isAdmin",response.isAdmin);
   this.auth.getLoggedUser();
   this.router.navigate(['admin','home']);
   }else{
    if(response.isAdmin)
    sessionStorage.setItem("isAdmin",response.isAdmin);
    this.auth.getLoggedUser();
    this.router.navigate(['home']);
   }

  }
  this.spinner.hide();}
  ,(error)=>{
    this.message="username or password is wrong";
    console.log("something went Wrong");
    this.spinner.hide();
   }

);

}

}
