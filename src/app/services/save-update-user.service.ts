import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SaveUpdateUserService {
  private uploadUrl=environment.baseURL+"upload/";
  constructor(private httpClient:HttpClient,private userService:UserService,
    private spinner:NgxSpinnerService) { }

  saveUser(user:User,selectedFile:any) {
    if (user?.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', selectedFile, selectedFile.name);
    selectedFile.imageName = selectedFile.name;

    this.httpClient.post(this.uploadUrl, uploadData, { observe: 'response' })
      .subscribe((response:any) => {
        if (response.status === 200) {
          this.userService.addUser(user).subscribe(
            (User:User) => {
            this.spinner.hide();
            
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  } else {
    if(selectedFile){
    const uploadData = new FormData();
    uploadData.append('imageFile',selectedFile,selectedFile.name);
    selectedFile.imageName = selectedFile.name;

    this.httpClient.post(this.uploadUrl, uploadData, { observe: 'response' })
      .subscribe((response:any) => {
        if (response.status === 200) {
    this.userService.updateUser(user).subscribe(
      (reps:User) => {
        this.spinner.hide();
   
      }
    );
    
    
  } else {
    console.log('Image not uploaded successfully');
  }
}
);}
else{
  this.userService.updateUser(user).subscribe(
    (response:User) => {
      this.spinner.hide();
     
    }
  );
}
      
  
}
}

}
