import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?:Product;

  constructor(private productService:ProductService,
    private cartService:CartService,
    private spinner:NgxSpinnerService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        
        const id = params['id'];
        if (id) {
          this.productService.getProduct(id).subscribe(
            (response)=>{
              this.product=response;
              this.spinner.hide();
              
            }
            ,(error)=>{
              console.log("error is cought");
            }
            )
          
          }
        });
          
  }
  addtocart(item: any){
    let cartItem=new CartItem();
    cartItem.id=item.id;
    cartItem.name=item.name;
    cartItem.brand=item.brand;
    cartItem.description=item.description;
    cartItem.price=item.price;
    cartItem.quantity=1;
    cartItem.productImage=item.productImage;
    cartItem.category=item.category;
    this.cartService.addtoCart(cartItem);
  }

}
