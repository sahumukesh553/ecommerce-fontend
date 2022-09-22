import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from '../common/categories/categories.component';
import { ShopModule } from '../shop/shop.module';
import { AppModule } from '../app.module';
import { CommonAppModule } from '../common/common-app.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShopModule,
    CommonAppModule,
    FormsModule

  ]
})
export class HomeModule { }
