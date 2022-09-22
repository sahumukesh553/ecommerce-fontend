import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndiaState } from '../model/india-state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl="http://localhost:9090/online-fashion-store/states/";
  constructor(private http:HttpClient) { }

  getAllStates():Observable<IndiaState[]>
  {
    return this.http.get<IndiaState[]>(this.baseUrl);
  }
}
