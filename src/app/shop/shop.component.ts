import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input()
products:Product[]=[];

searchKey:string="";
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
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
  showProduct(productId:number|undefined)
  {
    this.router.navigate(['shop/product'],{ queryParams: { id:productId }});
  }

}
