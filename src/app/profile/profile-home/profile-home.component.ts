import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  loggedInUser?:User;
  constructor(private authService:AuthService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    if(sessionStorage.getItem("loggedInUserId"))
    {
    this.authService.loggedInUser.subscribe(
      (response:User)=>{
        this.loggedInUser=response;
        this.spinner.hide();
      }
    );
    }
  }
  navigateUpdateProfile()
  {
    this.router.navigate(['profile','update']);
  }

}
