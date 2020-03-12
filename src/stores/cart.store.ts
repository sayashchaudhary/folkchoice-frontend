import BaseStore from "./base.store";
import {action, observable} from "mobx";
import {CartProducts} from "../models/cart.model";

export class CartStore extends BaseStore<CartProducts> {
    private static _instance: CartStore;

    @observable isCartLoaded = false;
    @observable isCartLoading = false;

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
    addProductsToCart(cartProducts: CartProducts[]) {
        this.addAllEntities(cartProducts);
    }
}

export const productStore = CartStore.getInstance();
