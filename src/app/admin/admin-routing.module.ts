import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdateCategoryModalComponent } from './update-category-modal/update-category-modal.component';
import { UpdateProductModalComponent } from './update-product-modal/update-product-modal.component';
import { UpdateUserModalComponent } from './update-user-modal/update-user-modal.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent ,
 
  children:[
    {path:'users',component:UsersListComponent},
    {path:'categories',component:CategoriesListComponent},
    { path:'products',component:ProductsListComponent},
    {path:'home',component:AdminHomeComponent},
    {path:'update-user',component:UpdateUserModalComponent},
    {path:'update-category',component:UpdateCategoryModalComponent},
    {path:'update-product',component:UpdateProductModalComponent},
    {path:'add-product',component:AddProductModalComponent},
    {path:'add-category',component:AddCategoryModalComponent},
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },

  ]


}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
