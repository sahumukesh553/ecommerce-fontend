import { Address } from "./address";
import { Order } from "./order";
import { Role } from "./role";

export class User {
        id ?: number;
        name ?: string;
        email ?: string;
        password?:string;
        number ?: string;
        profileImage ?:string;
        addresses ?: Address[];
        gender?:string;
        role ?: Role;
        orders ?: Order[];
        roleId ?: number;
}
