import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
order?:Order;
  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute,private orderService:OrderService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
       
        const id = params['id'];
        this.authService.getLoggedUser();
    this.authService.loggedInUser.subscribe(
      (response)=>{
        this.order=response.orders?.find(order => {
          return order.id === +id;
        });
        this.spinner.hide();
      }
    )
        
      })
  }

}
