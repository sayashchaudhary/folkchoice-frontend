import { BaseModel } from '../base.model';
import { IMarketName } from "./Market-userdetails.model";

export interface IMarket extends BaseModel {
    description: string;
    image_url: string;
    rating: number;
    user: IMarketName;
    id: number;
}
