import { LocalStorageApp } from "./LocalStorage";

export class LogoutApp {

    public static logout() {
        LocalStorageApp.deleteLocalStorage();
        window.location.replace('/login')
    }
}