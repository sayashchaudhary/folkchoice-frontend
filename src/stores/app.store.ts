import { action, observable } from 'mobx';

export class AppStore {
    private static _instance: AppStore;

    @observable isLoggedIn = false;
    @observable redirectUrl = '/dashboard';

    private constructor() {

    }

    @action
    setRedirectUrl(url: string) {
        if (!this.redirectUrl) {
            return;
        }
        this.redirectUrl = url;
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new AppStore();
        }
        return this._instance;
    }
}