import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product/product.model';
import { productStore } from '../stores/product.store';

class ProductController {

    private apiService = ApiService.getInstance();

    getAllProduct() {
        console.log('Called');
        this.apiService.get<IProduct[]>('/products').subscribe((products: IProduct[]) => {
            if (products && products.length > 0) {
                console.log(products);
                productStore.addProducts(products);
            }
        });
    };

}

export const productController = new ProductController();

