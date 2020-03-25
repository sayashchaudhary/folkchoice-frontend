import BaseStore from './base.store';
import { IProduct } from '../models/product/product.model';
import { action, observable } from 'mobx';

export class ProductStore extends BaseStore<IProduct> {
    private static _instance: ProductStore;

    @observable isProductsLoaded = false;
    @observable isProductsLoading = false;

    private constructor() {
        super();
    }

    static getInstance(): ProductStore {
        if (!this._instance) {
            this._instance = new ProductStore();
        }

        return this._instance;
    }

    @action
    addProducts(products: IProduct[]) {
        this.addAllEntities(products);
    }
}

export const productStore = ProductStore.getInstance();

