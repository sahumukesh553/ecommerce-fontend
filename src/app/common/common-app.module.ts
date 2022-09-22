import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories/categories.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
  CategoriesComponent,
  NavigationComponent,
  CartModalComponent,
  FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
   exports :[
    CategoriesComponent,
    NavigationComponent,
    FilterPipe,
  CartModalComponent

  ]
})
export class CommonAppModule { }
