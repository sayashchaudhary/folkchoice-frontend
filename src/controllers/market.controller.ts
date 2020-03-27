import { ApiService } from '../services/api.service';
import { IMarket } from "../models/Market/Market.model";
import { marketStore } from "../stores/market.store";

class MarketController {

    private apiService = ApiService.getInstance();

    getAllMarket() {
        console.log('Called');
        this.apiService.get<IMarket[]>('/retailers').subscribe((markets: IMarket[]) => {
            if (markets && markets.length > 0) {
            console.log('market');
            marketStore.addMarket(markets);
            }
        });
    };
}
export const marketController = new MarketController();
