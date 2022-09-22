import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordHomeComponent } from './forgot-password-home/forgot-password-home.component';


@NgModule({
  declarations: [
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ForgotPasswordHomeComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule
  ]
})
export class ForgotPasswordModule { }
