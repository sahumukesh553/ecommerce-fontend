import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { SaveUpdateUserService } from 'src/app/services/save-update-user.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  selectedFile:any;
  imgURL:any;
  loggedInUser?:User;
  constructor(private authService:AuthService,
    private router:Router
     ,private saveUserService:SaveUpdateUserService
     ,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    if(sessionStorage.getItem("loggedInUserId"))
    {
    this.authService.loggedInUser.subscribe(
      (response:User)=>{
        this.loggedInUser=response;
        this.loggedInUser.password='';
        this.spinner.hide();
      }
    );
    }
  }

  public onFileChanged(event:any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  updateUser(updatedUser:User)
  {this.spinner.show();
this.saveUserService.saveUser(updatedUser,this.selectedFile);
this.authService.getLoggedUser();
this.router.navigate(['/profile']);
  }
}
