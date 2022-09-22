import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from '../orders/orders.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileHomeComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    OrdersModule
  ]
})
export class ProfileModule { }
