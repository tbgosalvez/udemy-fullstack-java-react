/*
    Hard-coded Username & Password
*/
import axios from 'axios';

class AuthService {
    AUTH_DATA = "Basic " + window.btoa("user:password");

    login = (u, p) => {
        if(u === "user" && p === "pwd") {
            sessionStorage.setItem("authUser", u);
            this.setupAxiosInterceptors();
        }
        else
            console.log("auth failed");
    }

    isLoggedIn = () => {
        if(sessionStorage.getItem("authUser"))
            return true;
        
        return false;
    }

    logout = () => { sessionStorage.removeItem("authUser"); }

    setupAxiosInterceptors = () => {
        axios.interceptors.request.use( config => {
            if(this.isLoggedIn()) {
                config.headers.authorization = this.AUTH_DATA;
            }

            return config;
        });
    }
}

export default new AuthService();