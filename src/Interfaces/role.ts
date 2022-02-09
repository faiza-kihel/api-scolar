import { ActionModel } from "./action";
import { UserModel } from "./user";

export class RoleModel {
    id?: number;
    status?: any; 
    createdAt?: any;
    updatedAt?: any
    name?: any
    users? :UserModel[]
    actions?: ActionModel[]
}