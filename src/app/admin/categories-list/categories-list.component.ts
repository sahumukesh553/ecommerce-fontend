import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { UpdateCategoryModalComponent } from '../update-category-modal/update-category-modal.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

categories:Category[]=[];

  constructor(private  router:Router,private categoryService:CategoryService,private spinner:NgxSpinnerService) {}



  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories()
  {
    this.spinner.show();
    this.categoryService.getAllCategories().subscribe(
      (response:Category[])=>
      {this.categories=response;
      this.spinner.hide();
     }
    )
  }
  navigateUpdateCategory(categoryId:number|undefined)
  {
    this.router.navigate(['admin','update-category'],{ queryParams: { id:categoryId } });
  }
  deleteCategory(id:number|undefined)
  { this.spinner.show();
    this.categoryService.deleteCategory(id).subscribe(
      (response)=>{
        this.categoryService.getAllCategories().subscribe(
          (response:Category[])=> {
            this.categories=response;
            this.spinner.hide();
            this.getAllCategories();
          }

        )
      }
    )
  }

}
