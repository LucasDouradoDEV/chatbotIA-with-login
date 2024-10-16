import { LocalStorageApp } from "../utils/LocalStorage"

export class GetChat {

    public static async getChat(tipoChat: string) {
        
        const contentMessage = await LocalStorageApp.getChat(tipoChat)

        return contentMessage
    }

}