import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Address } from 'src/app/model/address';
import { IndiaState } from 'src/app/model/india-state';

import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-add-update-address',
  templateUrl: './add-update-address.component.html',
  styleUrls: ['./add-update-address.component.css']
})
export class AddUpdateAddressComponent implements OnInit {
  states:IndiaState[]=[];
@Input()
 address?:Address;
 
  @Output()
 addressUploadEvent=new EventEmitter();

  constructor(private addressService:AddressService,
    private router: Router,private stateService:StateService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.stateService.getAllStates().subscribe(
      (response)=>{
        this.states=response;
        this.spinner.hide();
      }

    )
  }

 

  saveAddress() {
    this.spinner.show();

    if (this.address?.id == null) {
      this.addressService.addAddress(this.address).subscribe(
        (resp) => {
          this.addressUploadEvent.emit();
          this.spinner.hide();
          this.router.navigate(['/address']);
        }
      );
    
    
  } else {
     this.addressService.updateAddress(this.address).subscribe(
      (resp) => {
        this.addressUploadEvent.emit();
        this.spinner.hide();
        this.router.navigate(['/address']);
      }
    );
    
 
  } 
}

      
  
}


