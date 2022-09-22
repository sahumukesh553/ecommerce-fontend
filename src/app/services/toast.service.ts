import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

   showToast(content:string)
  {console.log("toast called");
     $("#toast").addClass("display");
     $("#toast").html(content);
    setTimeout(()=>{
       $("#toast").removeClass("display");
     },2000);
  }


}
