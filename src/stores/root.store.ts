import { observable } from 'mobx';
import { UserStore } from './user.store';
import { AppStore } from './app.store';
import { ProductStore } from './product.store';

export class RootStore {
    private static _instance: RootStore;

    @observable userStore: UserStore;
    @observable appStore: AppStore;
    @observable productStore: ProductStore;

    private constructor() {
        this.userStore = UserStore.getInstance();
        this.appStore = AppStore.getInstance();
        this.productStore = ProductStore.getInstance();
    }

    static getInstance(): RootStore {
        if (!this._instance) {
            this._instance = new RootStore();
        }

        return this._instance;
    }
}

export const rootStore = RootStore.getInstance();
