import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../model/user';
import { SaveUpdateUserService } from '../services/save-update-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
selectedFile:any;
imgURL:any;
user:User=new User();
  constructor(private saveUserService:SaveUpdateUserService,private spinner:NgxSpinnerService,
    private router:Router ) { }

  ngOnInit(): void {
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
  register(newUser:User)
  {this.spinner.show();
    this.saveUserService.saveUser(newUser,this.selectedFile);
    this.router.navigate(['login']);
  }
}
