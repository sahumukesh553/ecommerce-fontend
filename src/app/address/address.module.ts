import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { FormsModule } from '@angular/forms';
import { AddUpdateAddressComponent } from './add-update-address/add-update-address.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { AddressHomeComponent } from './address-home/address-home.component';


@NgModule({
  declarations: [
    AddressComponent,
    AddUpdateAddressComponent,
    ViewAddressComponent,
    AddressHomeComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    FormsModule
  ],
  exports:[
    AddressHomeComponent
  ]
})
export class AddressModule { }
