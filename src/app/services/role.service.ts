import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl="http://localhost:9090/online-fashion-store/role/";
  constructor(private http:HttpClient) { }

  getAllRoles():Observable<Role[]>
  {
    return this.http.get<Role[]>(this.baseUrl);
  }
}
