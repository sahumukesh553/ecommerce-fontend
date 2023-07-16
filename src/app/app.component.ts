import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import Swal, { SweetAlertIcon } from  'sweetalert2';
import { AlertService } from './services/alert.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'muskanshopping';
  constructor(private cartService:CartService,private authService:AuthService,private alertService:AlertService)
  {

  }
  ngOnInit(): void {
    this.authService.getLoggedUser();
   this.cartService.getProducts();
    this.showSuccessMessage(
      'SweetAlert Success',
      'Testing my first sweet alert',
      'success',
      true
    );
  }
  showSuccessMessage(title: string, message: string, icon: SweetAlertIcon, showCancelButton: boolean) {
  this.alertService.showAlertMessage(title,message,icon,showCancelButton);
  }
  
  
  

  
}
