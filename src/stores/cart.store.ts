import BaseStore from "./base.store";
import {action, computed, observable} from "mobx";
import {CartProducts} from "../models/cart.model";

export class CartStore extends BaseStore<CartProducts> {
    private static _instance: CartStore;

    // @observable isCartLoaded = false;
    // @observable isCartLoading = false;

    @observable itemsInBag = [];

    @computed get bagCount() {
        return this.itemsInBag.reduce((prevItemCount, currentItem) => {
            return prevItemCount + currentItem;
        }, 0);
    }

    addItem(itemContainer, cartProducts: CartProducts[]) {
        const isItemPresent = itemContainer.findIndex(item => {
            return item.cartProducts === cartProducts;
        });
        if (isItemPresent) {
            itemContainer[isItemPresent]['count']++
        } else {
            itemContainer.push({cartProducts})
        }
    }

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
        this.addItem(this.itemsInBag, cartProducts);
    }
}

export const cartStore = CartStore.getInstance();
