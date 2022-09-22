import { Category } from "./category";

export class Product {
    id ?: number;
    name ?: string;
    brand ?: string;
    category ?: Category;
    categoryId ?: number;
    productImage ?:string;
    quantity ?: number;
    price ?: number;
    discount ?: number;
    dicountedPrice ?: number;
    percentageDiscount ?: number;
    description?:string;
}
