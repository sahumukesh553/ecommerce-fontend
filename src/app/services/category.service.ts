import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl="http://localhost:9090/online-fashion-store/categories/";
  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.baseUrl);
  }
  getAllCategoriesCount():Observable<number>
  {
    return this.http.get<number>(this.baseUrl+"count");
  }

  getCategory(id:number):Observable<Category>
  {
    return this.http.get<Category>(this.baseUrl+id);
  }
  addCategory(newCategory: Category | undefined):Observable<Category> {
    return this.http.post<Category>(this.baseUrl, newCategory);
  }
  deleteCategory(id:number |undefined) {
    return this.http.delete<Category>(this.baseUrl + id);
  }
  updateCategory(updatedCategory: Category |undefined) {
    return this.http.put<Category>(this.baseUrl+updatedCategory?.id, updatedCategory);
  }
}
