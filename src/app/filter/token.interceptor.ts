import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = 'secure-user-token';
    if(this.authService.getToken())
    {
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', `Bearer ${this.authService.getToken()}`),
    });
    console.log("token has been added to request");
    return next.handle(modifiedReq);
  }
  return next.handle(req);
  }
}
