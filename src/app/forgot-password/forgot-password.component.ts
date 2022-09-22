import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { JwtRequest } from '../model/jwt-request';
import { AuthService } from '../services/auth.service';
import { ForgotPasswordService } from '../services/forgot-password.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user=new JwtRequest();
  message?:string;
  constructor(private forgotPasswordService:ForgotPasswordService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }


  sendResetPassword(){
this.spinner.show();
this.forgotPasswordService.sendResetPasswordLink(this.user).subscribe(
  (response)=>
  { this.spinner.hide();
    this.message=response.message;
    console.log(this.message);
   
  },
  (error)=>{
    this.spinner.hide();
    this.message=error.message;
    console.log(this.message);
  }
)
  }

}
