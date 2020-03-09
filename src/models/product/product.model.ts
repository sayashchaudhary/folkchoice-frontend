import { BaseModel } from '../base.model';
import { IProductSubcategory } from './product-subcategory.model';

export interface IProduct extends BaseModel {
    title: string;
    description: string;
    has_variants: boolean;
    image_url: string;
    old_price: number;
    new_price: number;
    productSubcategory: IProductSubcategory;
}