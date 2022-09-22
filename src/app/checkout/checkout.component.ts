import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Order } from '../model/order';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
order=new Order();
  loggedInUser?:User;
  constructor(private authService:AuthService,
    private router:Router,
    private spinner:NgxSpinnerService,
    private orderService:OrderService) { }

  ngOnInit(): void {
    this.spinner.show();
    if(sessionStorage.getItem("loggedInUserId"))
    {
   this.authService.getLoggedUser();
    this.authService.loggedInUser.subscribe(
      (response:User)=>{
        this.loggedInUser=response;
        this.order.customerName=response.name;
        this.order.customerNumber=response.number;
        this.order.userId=response.id;

        this.spinner.hide();
      }
    );
    }
  }
  makeOrder()
  {
    this.spinner.show();
    this.orderService.prepareOrder(this.order);
    
  }

}
