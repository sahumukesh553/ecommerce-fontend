import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path: '', component: OrderHomeComponent
,children:[
  {path:'order-detail',component:OrderDetailComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
