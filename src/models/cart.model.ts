import {BaseModel} from "./base.model";

export interface CartProducts extends BaseModel {
    title: string;
    description: string;
    image_url: string;
    new_price: number;
}
