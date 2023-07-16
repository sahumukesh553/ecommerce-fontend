import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  showAlertMessage(title:string,message:string,icon:SweetAlertIcon,showCancelButton:boolean)
  {
    return Swal.fire({
      title : title,
      text : message,
      icon : icon,
      showCancelButton : showCancelButton
    })
  }
}
