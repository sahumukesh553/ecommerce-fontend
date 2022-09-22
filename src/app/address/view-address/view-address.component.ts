import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Address } from 'src/app/model/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {
  @Input()
  address?:Address;
  @Output()
  addressDeletedEvent=new EventEmitter();
    constructor(private addressService:AddressService,private router:Router
      ,private spinner:NgxSpinnerService) { }
  
    ngOnInit(): void {
      
    }
    ngOnChanges(changes: SimpleChanges): void {
     
    }
    deleteAddress(){
      this.spinner.show();
      this.addressService.deleteAddress(this.address?.id).subscribe(
        (Address) => {
          this.addressDeletedEvent.emit();
          this.spinner.hide();
          this.router.navigate(['address', 'home']);
        }
      );
    }
    editAddress(){
      this.router.navigate(['address', 'home'], { queryParams: { action: 'edit', id: this.address?.id } });
    }

}
