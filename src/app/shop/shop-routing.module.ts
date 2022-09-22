import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent,
  children:[
   { path:'product',component:ProductDetailComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
