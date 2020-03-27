import BaseStore from './base.store';
import { IMarket } from '../models/Market/Market.model';
import { action, observable } from 'mobx';

export class MarketStore extends BaseStore<IMarket> {
    private static _instance: MarketStore;

    @observable isMarketLoaded = false;
    @observable isMarketLoading = false;

    static getInstance(): MarketStore {
        if (!this._instance) {
            this._instance = new MarketStore();
        }

        return this._instance;
    }

    @action
    addMarket(markets: IMarket[]) {
        this.addAllEntities(markets);
    }
}

export const marketStore = MarketStore.getInstance();

