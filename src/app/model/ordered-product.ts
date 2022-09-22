import { Category } from "./category";

export class OrderedProduct {

        id ?: number;
        name ?: string;
        brand ?: string;
        category ?: Category;
        productImage ?: string;
        quantity ?: number;
        price ?: number;
        total?:number;
        categoryId?: number;
        orderId ?: number;
        description?:string;
}
