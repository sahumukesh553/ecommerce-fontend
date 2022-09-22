import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'muskanshopping';
  constructor(private cartService:CartService,private authService:AuthService)
  {

  }
  ngOnInit(): void {
    this.authService.getLoggedUser();
   this.cartService.getProducts();
    
  }
}
