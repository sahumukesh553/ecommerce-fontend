import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent ,
children:[
  {path:'update',component:ProfileUpdateComponent},
  {path:'',component:ProfileHomeComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
