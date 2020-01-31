import {ApiService} from '../services/api.service';
import {UserStore} from '../stores/user.store';

export class AuthController {

    private apiService = ApiService.getInstance();
    private userStore = UserStore.getInstance();

    login(email: string, password: string) {
        const user = {
            email,
            password
        }
        this.apiService.post('/login', user).subscribe();

    }

    register(user: {
        name: string,
        email: string,
        password: string,
        cnfPassword: string,
        phoneNo: number,
        gender: string
    }) {
        if (!this.userStore.isLoading && !this.userStore.isLoggedIn) {
            this.apiService.post('/user', user).subscribe();
        }
    }


}


