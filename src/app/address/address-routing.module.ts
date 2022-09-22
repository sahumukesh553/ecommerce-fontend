import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressHomeComponent } from './address-home/address-home.component';
import { AddressComponent } from './address.component';

const routes: Routes = [
  { path: '', component: AddressComponent
  ,children:[
    {path:'home' ,component:AddressHomeComponent},
    {path:'' ,redirectTo:'/address/home',pathMatch:'full'},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
