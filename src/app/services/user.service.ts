import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl="http://localhost:9090/online-fashion-store/users/";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl);
  }

  getAllUsersCount():Observable<number>
  {
    return this.http.get<number>(this.baseUrl+"count");
  }

  getUser(id:number|undefined):Observable<User>
  {
    return this.http.get<User>(this.baseUrl+id);
  }

  addUser(newUser: User | undefined):Observable<User> {
    return this.http.post<User>(this.baseUrl, newUser);
  }
  deleteUser(id:number |undefined) {
    return this.http.delete<User>(this.baseUrl + id);
  }
  updateUser(updatedUser: User |undefined) {
    return this.http.put<User>(this.baseUrl+updatedUser?.id, updatedUser);
  }
}
