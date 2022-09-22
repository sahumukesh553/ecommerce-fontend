import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { UpdateCategoryModalComponent } from './update-category-modal/update-category-modal.component';
import { UpdateProductModalComponent } from './update-product-modal/update-product-modal.component';
import { UpdateUserModalComponent } from './update-user-modal/update-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    CategoriesListComponent,
    ProductsListComponent,
    AdminHomeComponent,
    AddProductModalComponent,
    AddCategoryModalComponent,
    UpdateCategoryModalComponent,
    UpdateProductModalComponent,
    UpdateUserModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
