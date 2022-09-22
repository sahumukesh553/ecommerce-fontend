import { Category } from "./category";

export class CartItem {

    id ?: number;
    name ?: string;
    brand ?: string;
    productImage ?:string;
    quantity ?: number;
    price ?: number;
    description?:string;
    total?:number;
    category ?: Category;
}
