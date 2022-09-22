import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CartItem } from '../model/cart-item';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public productList = new BehaviorSubject<CartItem[]>([]);
  public search = new BehaviorSubject<string>("");
  public grandTotal=new BehaviorSubject<number>(0);

  constructor(private toastService:ToastService) { }

  getProducts() {
    let cart = localStorage.getItem("cart");
    let cartItemList: CartItem[] = [];
    if (cart != null) {
      cartItemList=JSON.parse(cart);
    }
   this.productList.next(cartItemList);
   return cartItemList;
  }

  

  addtoCart(product:CartItem) {
    let cart = localStorage.getItem("cart");
   
    if (cart == null) {
      let cartItemList: any = [];
      product.total=product.price;
      cartItemList.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItemList));
     this.productList.next(cartItemList);
     this.grandTotal.next(this.getTotalPrice());
      this.toastService.showToast(product.name+' added to cart');
    } else {
      let pcart = JSON.parse(cart);
      console.log(pcart);
      let oldProduct = pcart.find((item: any) => item.id == product.id);
      if (oldProduct) {
        oldProduct.quantity = oldProduct.quantity + 1;
        pcart.map((item: any) => {
          if (item.id == oldProduct.id) {
            item.quantity = oldProduct.quantity;
            item.total=item.quantity*item.price;
          }
        });
        localStorage.setItem("cart", JSON.stringify(pcart));
        this.grandTotal.next(this.getTotalPrice());
       this.productList.next(pcart);
       this.toastService.showToast(product.name+' quatity increased to cart');
        //  showToast(oldProduct.productName+" quantity incresed by : "+oldProduct.productQuantity);
        console.log("product quantity increased");
      } else {
        product.total=product.price;
        pcart.push(product);
        localStorage.setItem("cart", JSON.stringify(pcart));
        this.grandTotal.next(this.getTotalPrice());
        this.productList.next(pcart);
        
        console.log("new product added ");
        this.toastService.showToast(product.name+'added to cart');
        //this.productList.next(pcart);
        //  showToast("product added to cart");
      }

    }

  }
  getTotalPrice(): number {
    let grandTotal = 0;
    let cartItem = localStorage.getItem("cart");
    let cartItemList: any = [];
    if (cartItem) {
      cartItemList = JSON.parse(cartItem);
    }
    cartItemList.map((item: any) => {
      grandTotal += item.total;
    })
    return grandTotal;
  }
  removeCartItem(product: CartItem) {
    let cartItem = localStorage.getItem("cart");
    let cartItemList: any = [];
    if (cartItem) {
      cartItemList = JSON.parse(cartItem);
    }
    let newCart =cartItemList.filter((item: any) => item.id != product.id);
    console.log("after remove product"+ newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    this.grandTotal.next(this.getTotalPrice());
    this.productList.next(newCart);
  }
  removeAllCart() {
    let cartItemList: any = [];
    localStorage.removeItem("cart");
    this.grandTotal.next(this.getTotalPrice());
    this.productList.next(cartItemList);
  }


  minus_to_cart(product:CartItem) {
    let cart = localStorage.getItem("cart");

    if (cart) {
      let pcart = JSON.parse(cart);

      let oldProduct = pcart.find((item: any) => item.id == product.id);
      if (oldProduct) {
        if (oldProduct.quantity != 1) {
          oldProduct.quantity = oldProduct.quantity - 1;
          pcart.map((item: any) => {
            if (item.id == oldProduct.id) {
              item.quantity = oldProduct.quantity;
              item.total=item.price*item.quantity;
            }
          });

          localStorage.setItem("cart", JSON.stringify(pcart));
          this.grandTotal.next(this.getTotalPrice());
          this.productList.next(pcart);

          
          console.log("product quantity decreased");
        } else {
          this.toastService.showToast(oldProduct.name+" quantity can not decreased further ");
          console.log("product quantity can not decreased");
        }
      }

    }



  }
}