import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/services/category.service';
import { SaveUpdateProductService } from 'src/app/services/save-update-product.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {
  private selectedFile:any;
  allCategories:Category[]=[];
  imgURL: any;
  title: string | null = null;
  product:Product=new Product();
  constructor(private CategoryService:CategoryService,
    private saveProductService:SaveUpdateProductService
    ,private spinner:NgxSpinnerService) {}

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe(
      (response:Category[])=>this.allCategories=response
    )
  }
  
  public onFileChanged(event:any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
  addProduct(newProduct:Product)
  {this.spinner.show();
this.saveProductService.saveProduct(newProduct,this.selectedFile);

  }

 
}
