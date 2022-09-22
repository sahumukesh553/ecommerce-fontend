import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Address } from 'src/app/model/address';
import { User } from 'src/app/model/user';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address-home',
  templateUrl: './address-home.component.html',
  styleUrls: ['./address-home.component.css']
})
export class AddressHomeComponent implements OnInit {
loggedInUserId?:number;
  addresses?:Array<Address>;
  selectedAddress?: Address;
    action?: string;
   
    constructor(private addressService:AddressService, private activedRoute: ActivatedRoute,
      private router: Router,private authService:AuthService,private userService:UserService
      ,private spinner:NgxSpinnerService) { }
   
    ngOnInit(): void {
      this.spinner.show();
    this.getAllAddresses();
      this.activedRoute.queryParams.subscribe(
        (params) => {
          this.action = params['action'];
          const id = params['id'];
          if (id) {
            this.selectedAddress = this.addresses?.find(address => {
              return address.id === +id;
            });
            
          }
          if(this.selectedAddress)
          {
            this.selectedAddress.userId=this.loggedInUserId;
          }
        }
      );
    }
  getAllAddresses()
  {
   this.authService.loggedInUser.subscribe(
      (response)=>{
        this.loggedInUserId=response.id;
        this.userService.getUser(response.id).subscribe(
          (user:User)=>{
            this.addresses=user.addresses;
            this.spinner.hide();
          }

        )
      }
    )
  }
 
 
  addAddress() {
    this.selectedAddress = new Address();
    this.selectedAddress.userId=this.loggedInUserId;
    this.router.navigate(['address', 'home'], { queryParams: { action: 'add' } });
  }
  viewAddress(id: number|undefined) {
    this.router.navigate(['address', 'home'], { queryParams: { id, action: 'view' } });
  }


}
