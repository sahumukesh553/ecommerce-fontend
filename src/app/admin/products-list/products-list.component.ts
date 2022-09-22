import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { UpdateProductModalComponent } from '../update-product-modal/update-product-modal.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

products:Product[]=[];

  constructor(private router:Router,private productService:ProductService,private spinner:NgxSpinnerService) {}

 

  ngOnInit(): void {
    
    this.getAllProducts();
  }
  getAllProducts()
  {
    this.spinner.show();
    this.productService.getAllProducts().subscribe(
      (response:Product[])=>{
        this.products=response;
        this.spinner.hide();
      }
    )
  }
  navigateUpdateProduct(productId:number|undefined)
  {
    this.router.navigate(['admin','update-product'],{ queryParams: {  id: productId } });
  }
  deleteProduct(productId:number|undefined)
  {
    this.spinner.show();
    this.productService.deleteProduct(productId).subscribe(
      (response)=>{
        this.spinner.hide();
        this.getAllProducts();
      }
    )
  }
}
