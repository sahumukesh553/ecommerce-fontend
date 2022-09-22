import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : Product[], filterString: string, propName:string): any[] {

    const result:Product[] =[];
    if(!value || filterString===''){
      return value;
    }
    value.forEach((product:Product)=>{
      if(product.category?.name?.trim().toLowerCase().includes(filterString.toLowerCase())
      || product.category?.name?.trim().toLowerCase()==filterString.toLowerCase()){
         result.push(product);
    }else
    {
        if(product.name?.trim().toLowerCase().includes(filterString.toLowerCase())
        || product.name?.trim().toLowerCase()==filterString.toLowerCase())
        {
           result.push(product);
        }
        else{
            if(product.description?.trim().toLowerCase().includes(filterString.toLowerCase())
            || product.description?.trim().toLowerCase()==filterString.toLowerCase())
            {
               result.push(product);
            }
               else{

                if(product.brand?.trim().toLowerCase().includes(filterString.toLowerCase())
                || product.brand?.trim().toLowerCase()==filterString.toLowerCase())
                   result.push(product);
               }
        }
    }
   
    });
    return result;
  }

}
