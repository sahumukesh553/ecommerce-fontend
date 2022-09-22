import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonAppModule } from '../common/common-app.module';


@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CommonAppModule
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
