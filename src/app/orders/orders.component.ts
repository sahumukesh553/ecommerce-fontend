import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Order } from '../model/order';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders?:Order[];
  constructor(private authService:AuthService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.authService.getLoggedUser();
    this.authService.loggedInUser.subscribe(
      (response)=>{
        this.orders=response.orders;
      }
    )
    }


    viewOrder(id:number|undefined)
    {
      this.spinner.show();
      this.router.navigate(['/orders','order-detail'],{ queryParams: { id} });

    }
  }


