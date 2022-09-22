import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
 
totalUsers?:number;
totalProducts?:number;
totalCategories?:number;
  constructor(private router:Router,
    private productService:ProductService,
    private categoryService:CategoryService,
    private userService:UserService
    ,private spinner:NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.categoryService.getAllCategoriesCount().subscribe(
      (response:number)=>this.totalCategories=response
    );
    this.productService.getAllProductsCount().subscribe((response:number)=> {
      this.totalProducts=response;});
    this.userService.getAllUsersCount().subscribe((response:number)=>this.totalUsers=response);
    this.spinner.hide();
  }
  openCategoryModal() {
   this.router.navigate(['admin','add-category']);
  }
  
  openProductModal() {
    this.router.navigate(['admin','add-product']);
  }
  goToUsersList()
  {
this.router.navigate(['admin/users']);
  }
  goToProductsList(){
    this.router.navigate(['admin/products']);
  }
  goToCategoriesList(){
    this.router.navigate(['admin/categories']);
  }
}
