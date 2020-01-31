import BaseStore from './base.store';
import { UserModel } from '../models/user.model';
import { action, observable, runInAction } from 'mobx';

export class UserStore extends BaseStore<UserModel> {
    private static _instance: UserStore;

    @observable isLoading = false;
    @observable isLoaded = false;
    @observable isLoggedIn = false;

    static getInstance(): UserStore {
        if (!this._instance) {
            this._instance = new UserStore();
        }

        return this._instance;
    }

    @action
    loadUser() {
        console.log(this);
        this.isLoading = true;
        const u: UserModel = {
            id: Math.random(),
            name: 'Some name',
            email: 'Some email'
        };
        runInAction(() => {
            this.pushEntity(u);
        })
    }
}
