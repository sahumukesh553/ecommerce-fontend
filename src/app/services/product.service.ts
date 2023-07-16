import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl=environment.baseURL+"products/";
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl);
  }
  getAllProductsCount():Observable<number>
  {
    return this.http.get<number>(this.baseUrl+"count");
  }
  getProduct(id:number):Observable<Product>
  {
    return this.http.get<Product>(this.baseUrl+id);
  }
  addProduct(newProduct: Product | undefined):Observable<Product> {
    return this.http.post<Product>(this.baseUrl, newProduct);
  }
  deleteProduct(id:number |undefined) {
    return this.http.delete<Product>(this.baseUrl + id);
  }
  updateProduct(updatedProduct: Product |undefined) {
    return this.http.put<Product>(this.baseUrl+updatedProduct?.id, updatedProduct);
  }
}
