import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class SaveUpdateProductService {
private uploadUrl="http://localhost:9090/online-fashion-store/upload/";
  constructor(private httpClient:HttpClient,
    private productService:ProductService,
    private spinner:NgxSpinnerService,private router:Router) { }

  saveProduct(product:Product,selectedFile:any) {
    if (product?.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', selectedFile, selectedFile.name);
    selectedFile.imageName = selectedFile.name;

    this.httpClient.post(this.uploadUrl, uploadData, { observe: 'response' })
      .subscribe((response:any) => {
        if (response.status === 200) {
          this.productService.addProduct(product).subscribe(
            (Product:Product) => {
              this.spinner.hide();
              this.router.navigate(['/admin/home']);
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
    this.productService.updateProduct(product).subscribe(
      (response:Product) => {
        this.spinner.hide();
      }
    );
    
    console.log('Image uploaded successfully');
  } else {
    console.log('Image not uploaded successfully');
  }
}
);}
else{
  this.productService.updateProduct(product).subscribe(
    (response:Product) => {
      this.spinner.hide();
    }
  );
}
      
  
}
}

}
