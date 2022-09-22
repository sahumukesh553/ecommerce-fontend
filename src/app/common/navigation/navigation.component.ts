import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  
  loggedInUser?:User;
  public totalItem : number = 0;
  


constructor(private router:Router,public authService:AuthService,private cartService:CartService,private spinner:NgxSpinnerService) { }
  
 

  ngOnInit(): void { 
    
    if(sessionStorage.getItem("loggedInUserId"))
    {
      this.authService.getLoggedUser();
    this.authService.loggedInUser.subscribe(
      (response:User)=> {
        this.loggedInUser=response;
      }
    )
    }

    this.cartService.productList
    .subscribe((res:any)=>{
      this.totalItem = res.length;
    })
}
  logoutUser(){
this.authService.logout();
this.router.navigate(['home']);
  }

  
}
