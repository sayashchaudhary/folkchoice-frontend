import {ApiService} from '../services/api.service';
import {UserStore} from '../stores/user.store';

class AuthController {

    private apiService = ApiService.getInstance();
    private userStore = UserStore.getInstance();

    login(user: {
        email: string,
        password: string
    }) {
        this.apiService.post('/login', user).subscribe(s=>{
            console.log(s);
        });

    }

    register(user: {
        name: string,
        email: string,
        password: string,
        cnfPassword: string,
        phoneNo: string,
        gender: string,
    }) {
        if (!this.userStore.isLoading && !this.userStore.isLoggedIn) {
            this.apiService.post('/signup', user).subscribe(s => {
                    console.log(s);
                }
            );
        }
    }

    oauthGoogle = data => {
        const token=data;
        console.log(token);
        const res = this.apiService.post('/oauth/google',token).subscribe(s=>{
            console.log(s);
            console.log(res);
            // localStorage.setItem('JWT_Token',res.data.token);
        });
    }

    oauthFacebook = data => {
        const token = data;
        console.log(token);
        this.apiService.post('/oauth/facebook', token).subscribe(s=>{
            console.log(s);
        });
    }

}

export const authController = new AuthController();

