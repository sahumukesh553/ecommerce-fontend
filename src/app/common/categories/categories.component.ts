import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
lastCategory?:number=0;
categories:Category[]=[];
@Output()
categoryClickEvent=new EventEmitter();
  constructor(private categoryService:CategoryService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.categoryService.getAllCategories().subscribe(
      (response:Category[])=> {
        this.categories=response;
        this.spinner.hide();
      }
    )
    $("#category0").addClass('link-active');
  }

  makeActive(id:number)
  { 
   $("#category"+this.lastCategory).removeClass('link-active');
    $("#category"+id).addClass('link-active');
    this.lastCategory=id;
   }

  filter(searchCategory:string|undefined)
  {
    if(searchCategory)
    {

    this.categoryClickEvent.emit(searchCategory);
    console.log("categoryClickEvent trigged with category :"+searchCategory);
    }
  }

}
