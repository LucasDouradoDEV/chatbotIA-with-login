import { LocalStorageApp } from "../utils/LocalStorage";

export class CheckLogin {
    public static getToken() {
        if (localStorage.getItem('login') == null) {
            if(!window.location.href.includes('/login') && !window.location.href.includes('/signup'))
                window.location.replace('/login')
                LocalStorageApp.deleteLocalStorage()
            return false
        }else {
            return true;
        }
    }


    public static setToken(token: string, user: any) {
        console.log('set::User')
        localStorage.setItem('login', JSON.stringify({ 
                token, 
                nome: user.nome,
                email: user.email,
                id: user.id                
            })
        );
        return true;
    }
}