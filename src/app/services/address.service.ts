import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl="http://localhost:9090/online-fashion-store/address/";
  constructor(private http:HttpClient) { }

  getAllAddresses():Observable<Address[]>
  {
    return this.http.get<Address[]>(this.baseUrl);
  }

  

  getAddress(id:number):Observable<Address>
  {
    return this.http.get<Address>(this.baseUrl+id);
  }

  addAddress(newAddress: Address | undefined):Observable<Address> {
    return this.http.post<Address>(this.baseUrl, newAddress);
  }
  deleteAddress(id:number |undefined) {
    return this.http.delete<Address>(this.baseUrl + id);
  }
  updateAddress(updatedAddress: Address |undefined) {
    return this.http.put<Address>(this.baseUrl+updatedAddress?.id, updatedAddress);
  }
}
