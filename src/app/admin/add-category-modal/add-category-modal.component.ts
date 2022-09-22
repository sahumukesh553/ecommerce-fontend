import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent implements OnInit {
  title: string | null = null;
  category:Category=new Category();
  constructor(private categoryService:CategoryService,private router:Router,private spinner:NgxSpinnerService) {}

  ngOnInit(): void {
  }
addCategory(newCategory:Category)
{ this.spinner.show();
this.categoryService.addCategory(newCategory).subscribe(
  (response)=>{
    this.spinner.hide();
this.router.navigate(['admin','home']);
  }
)
}
}
