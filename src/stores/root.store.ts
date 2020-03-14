import { observable } from 'mobx';
import { UserStore } from './user.store';
import { AppStore } from './app.store';
import { ProductStore } from './product.store';
import {CartStore} from "./cart.store";

export class RootStore {
    private static _instance: RootStore;

    @observable userStore: UserStore;
    @observable appStore: AppStore;
    @observable productStore: ProductStore;
    @observable cartStore: CartStore;

    private constructor() {
        this.userStore = UserStore.getInstance();
        this.appStore = AppStore.getInstance();
        this.productStore = ProductStore.getInstance();
        this.cartStore = CartStore.getInstance();
    }

    static getInstance(): RootStore {
        if (!this._instance) {
            this._instance = new RootStore();
        }

        return this._instance;
    }
}

export const rootStore = RootStore.getInstance();
