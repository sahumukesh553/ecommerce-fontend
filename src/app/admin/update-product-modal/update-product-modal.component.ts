import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SaveUpdateProductService } from 'src/app/services/save-update-product.service';


@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css']
})
export class UpdateProductModalComponent implements OnInit {
selectedFile:any;
imgURL:any;
currentProduct?:Product;
allCategories:Category[]=[];


  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private categoryService:CategoryService,
    private saveProductService:SaveUpdateProductService,
    private spinner:NgxSpinnerService,
    private router:Router) {}

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.queryParams.subscribe(
      (params:any) => {
      
        const id = params['id'];
        this.productService.getProduct(id).subscribe(
          (response:Product)=>{
            this.currentProduct=response;
            this.imgURL='data:image/jpeg;base64,'+response.productImage;
            this.spinner.hide();
          }
        )

        this.categoryService.getAllCategories().subscribe(
          (response:Category[])=>this.allCategories=response
        )
        }
      
    );
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

  updateProduct(updatedProduct:Product)
  {this.spinner.show();
    this.saveProductService.saveProduct(updatedProduct,this.selectedFile);
    this.router.navigate(['admin', 'products']);
    }
    
  }


