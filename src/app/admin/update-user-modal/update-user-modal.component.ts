import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { RoleService } from 'src/app/services/role.service';
import { SaveUpdateUserService } from 'src/app/services/save-update-user.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.css']
})
export class UpdateUserModalComponent implements OnInit {
  selectedFile: any;
  imgURL: any;
  currentUser?: User;
  roles:Role[]=[];


  constructor(private activatedRoute: ActivatedRoute
    , private userService: UserService
    , private saveUserService: SaveUpdateUserService,
     private spinner: NgxSpinnerService,
     private router:Router,
     private roleService:RoleService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.queryParams.subscribe(
      (params: any) => {
this.roleService.getAllRoles().subscribe(
  (response)=>{
    this.roles=response;
  }
)
        const id = params['id'];
        this.userService.getUser(id).subscribe(
          (response: User) => {
            this.currentUser = response;
            this.imgURL = 'data:image/jpeg;base64,' + response.profileImage;
            this.spinner.hide();
            this.currentUser.password="";
          }
        )

      }

    );
  }
  public onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  updateUser(updatedUser: User) {
    this.spinner.show();
    this.saveUserService.saveUser(updatedUser, this.selectedFile);
    this.router.navigate(['admin', 'users']);
  }
}
