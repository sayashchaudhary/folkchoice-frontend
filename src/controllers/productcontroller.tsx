import {ApiService} from '../services/api.service';
class ProductController {

    private apiService = ApiService.getInstance();
    viewProduct(){
         return this.apiService.get('/products').subscribe(s => {
            console.log(s);
        });
    };

}

export const productController = new ProductController();

