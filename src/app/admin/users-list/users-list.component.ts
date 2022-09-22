import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:User[]=[];

  constructor(private router:Router,private userService:UserService,private spinner:NgxSpinnerService) {}
 
  

  navigateUpdateUser(userId:number|undefined)
  {
    this.router.navigate(['admin','update-user'],{ queryParams: { id: userId } });
  }
 

  ngOnInit(): void {
    this.spinner.show();
   this.getAllUsers();
  }
  getAllUsers(){
   
    this.userService.getAllUsers().subscribe(
      (response:User[])=> {
        this.users=response;
        this.spinner.hide();
      }
    )
  }
  deleteUser(id:number|undefined)
  {
    this.spinner.show();
    this.userService.deleteUser(id).subscribe(
      (response)=>{
        this.spinner.hide();
        this.getAllUsers();
      }
    )
  }

}
