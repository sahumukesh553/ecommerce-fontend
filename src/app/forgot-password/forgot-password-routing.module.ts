import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordHomeComponent } from './forgot-password-home/forgot-password-home.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component:ForgotPasswordHomeComponent,
  children:[
    {
      path:'',component:ForgotPasswordComponent
    },
    {
      path:'reset-password',component:ResetPasswordComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
