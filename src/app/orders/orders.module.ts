import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderHomeComponent } from './order-home/order-home.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailComponent,
    OrderHomeComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports:[
    OrdersComponent
  ]
})
export class OrdersModule { }
