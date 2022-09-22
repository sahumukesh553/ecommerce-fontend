import { Address } from "./address";
import { OrderedProduct } from "./ordered-product";


export class Order {

        id ?: number;
        customerName?:string;
        customerNumber?:string;
        status ?: string;
        date ?: string;
        orderAmount ?: number;
        products:OrderedProduct[]=[];
        address ?: Address;
        addressId ?: number;
        userId ?: number;
}
