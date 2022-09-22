import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { ForgotPasswordModel } from 'src/app/model/forgot-password-model';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
forgotPasswordModel:ForgotPasswordModel=new ForgotPasswordModel();
confirmPassword?:string;
match=true;
message?:string;
hidden=true;

  constructor(private activatedRoute:ActivatedRoute,private spinner:NgxSpinnerService,private forgotPasswordService:ForgotPasswordService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
       
        this.forgotPasswordModel.token = params['token'];
  });
}
  checkMatchPassword(){

    if(this.forgotPasswordModel.password == this.confirmPassword)
    {
      this.match=true;
    }else{
      this.match=false;
    }
  }

  resetPassword(){
    this.spinner.show();
this.forgotPasswordService.resetPassword(this.forgotPasswordModel).subscribe(
  (response)=>{
    this.spinner.hide();
    this.message=response.message;
  }
  ,(error)=>{
    this.spinner.hide();
    this.message=error.message;
  }
)
  }

  showPassword(){
if(this.hidden){
    $("#password").prop('type','text');
    $("#confirm-password").prop('type','text');
    this.hidden=false;
}else{
  $("#password").prop('type','password');
    $("#confirm-password").prop('type','password');
    this.hidden=true;
}
  }
}
