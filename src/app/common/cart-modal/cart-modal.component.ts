import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  title: string | null = null;
  public products : CartItem[] = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) {}

   ngOnInit(): void {
    this.cartService.getProducts();
     this.cartService.productList.subscribe(
      (resp:CartItem[])=>{
        this.products=resp;
        console.log("items in cart "+resp);
      }

     );
    this.cartService.grandTotal.subscribe(
      (response)=>this.grandTotal=response
    );
    
  }
  removeItem(item:CartItem){
console.log("remove item from cart "+item.name)
 this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  addToCart(item:CartItem)
  {
    this.cartService.addtoCart(item);
  }
  minusToCart(item:CartItem)
  {
    this.cartService.minus_to_cart(item);
  }

}
