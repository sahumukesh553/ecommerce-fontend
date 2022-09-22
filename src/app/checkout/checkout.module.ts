import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CommonAppModule } from '../common/common-app.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CommonAppModule,
    FormsModule
  ]
})
export class CheckoutModule { }
