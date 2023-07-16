import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndiaState } from '../model/india-state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl=environment.baseURL+"states/";
  constructor(private http:HttpClient) { }

  getAllStates():Observable<IndiaState[]>
  {
    return this.http.get<IndiaState[]>(this.baseUrl);
  }
}
