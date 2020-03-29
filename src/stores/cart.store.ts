import BaseStore from './base.store';
import { action, observable } from 'mobx';
import { IProduct } from '../models/product/product.model';

export class CartStore extends BaseStore<IProduct> {
    private static _instance: CartStore;

    @observable itemCount: { [id: number]: number } = {};

    constructor() {
        super();
    }

    static getInstance(): CartStore {
        if (!this._instance) {
            this._instance = new CartStore()
        }
        return this._instance
    }

    @action
    addProductsToCart(product: IProduct) {
        if (this.itemCount[product.id]) {
            this.itemCount[product.id]++;
        } else {
            this.pushEntity(product);
            this.itemCount[product.id] = 1;
        }

        console.log('Cart count',this.itemCount);
        console.log('Cart product',this.entities);
    }
}

export const cartStore = CartStore.getInstance();
