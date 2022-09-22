import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[]=[];
  public filterCategory:Product[]=[];
  searchTerm?:string;
  constructor(private productService:ProductService,private cartService:CartService,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.productService.getAllProducts().subscribe(
      (response:Product[])=>{
        this.products=response;
        this.filterCategory=response;
        this.spinner.hide();
      }
    )
  }

  filter(category:any){
    this.filterCategory = this.products
    .filter((product:any)=>{
      if(product.category?.name == category || category=='all-products'){
        return product;
      }
    })

  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }

}
