import { BaseModel } from '../base.model';
import { IProductCategory } from './product-category.model';

export interface IProductSubcategory extends BaseModel {
    name: string;
    productCategory: IProductCategory;
}