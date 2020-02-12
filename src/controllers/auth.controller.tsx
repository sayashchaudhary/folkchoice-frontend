import {ApiService} from '../services/api.service';
import {UserStore} from '../stores/user.store';

class AuthController {

    private apiService = ApiService.getInstance();
    private userStore = UserStore.getInstance();

    login(user: {
        email: string,
        password: string
    }) {
        this.apiService.post('/login', user).subscribe();

    }

    register(user: {
        name: string,
        email: string,
        password: string,
        cnfPassword: string,
        phoneNo: string,
        gender: string,
        role: string
    }) {
        if (!this.userStore.isLoading && !this.userStore.isLoggedIn) {
            this.apiService.post('/signup', user).subscribe(s => {
                    console.log(s);
                }
            );
        }
    }

}

export const authController = new AuthController();

