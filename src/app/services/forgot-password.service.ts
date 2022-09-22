import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPasswordModel } from '../model/forgot-password-model';
import { JwtRequest } from '../model/jwt-request';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private baseUrl="http://localhost:9090/online-fashion-store/password";

  constructor(private httpClient:HttpClient) { }

  sendResetPasswordLink(user:JwtRequest):Observable<any>
  {
   return this.httpClient.get<any>(this.baseUrl+"/forgot_password?email="+user.username);
  }

  resetPassword(request:ForgotPasswordModel):Observable<any>
  {
return this.httpClient.post<any>(this.baseUrl+"/reset_password",request);
  }
}
