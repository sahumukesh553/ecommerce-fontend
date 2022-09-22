import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Order } from '../model/order';
import { OrderedProduct } from '../model/ordered-product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl="http://localhost:9090/online-fashion-store/order/";
  
  constructor(private cartService:CartService,private http:HttpClient,private spinner:NgxSpinnerService,private router:Router) { }

  prepareOrder(order:Order)
  {
    let cartItemList=this.cartService.getProducts();
    cartItemList.forEach((item:CartItem)=>
    {
      let product=new OrderedProduct();
      product.name=item.name;
      product.brand=item.brand;
      product.price=item.price;
      product.total=item.total;
      product.quantity=item.quantity;
      product.category=item.category;
      product.description=item.description;
      order.products.push(product);

    });
   
    order.orderAmount=this.cartService.getTotalPrice();
    this.cartService.removeAllCart();
    this.makeOrder(order);
  }

  getOrder(id:number):Observable<Order>
  {
    return this.http.get<Order>(this.baseUrl+id);
  }
  makeOrder(newOrder: Order ){
    return this.http.post<Order>(this.baseUrl, newOrder).subscribe(
      (response)=>{
        this.spinner.hide();
        this.router.navigate(['/profile']);
      }
    )
  }
}
