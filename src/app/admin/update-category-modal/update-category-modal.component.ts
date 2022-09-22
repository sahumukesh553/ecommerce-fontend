import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-update-category-modal',
  templateUrl: './update-category-modal.component.html',
  styleUrls: ['./update-category-modal.component.css']
})
export class UpdateCategoryModalComponent implements OnInit {

 currentCategory?:Category;

  constructor(private activatedRoute:ActivatedRoute,private categoryService:CategoryService,private router:Router,private spinner:NgxSpinnerService ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.queryParams.subscribe(
      (params:any) => {
      const id = params['id'];
        this.categoryService.getCategory(id).subscribe(
          (response:Category)=>{
            this.currentCategory=response;
            this.spinner.hide();
          }
        )

        }
      
    );
    
  }

  updateCategory(updatedCategory:Category)
  {
    this.spinner.show();
    this.categoryService.updateCategory(updatedCategory).subscribe(
      (response)=>
      {
        this.spinner.hide();
        this.router.navigate(['admin','categories']);
      }
    )
  }

}
