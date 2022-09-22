import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModalComponent } from './common/cart-modal/cart-modal.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, 
  { path: 'contact',
  canActivate:[AuthGuard],
   loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
   { path: 'checkout', 
   canActivate:[AuthGuard],
   loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) }, 
   { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'admin',
  canActivate:[AdminGuard],
   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'profile', 
  canActivate:[AuthGuard],
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {path:'cart',component:CartModalComponent},
  { path: 'address',
  canActivate:[AuthGuard],
   loadChildren: () => import('./address/address.module').then(m => m.AddressModule) },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'orders',
  canActivate:[AuthGuard], loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
