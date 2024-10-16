import { GetUser } from "../utils/getUser"
import { GetChatId } from "../helpers/getChatId"
import { LocalStorageApp } from "../utils/LocalStorage"

export class GetChatDatabase {
    
    public static async get() {

        const tokenUser = await GetUser.getField('token')
        const idUser = await GetUser.getField('id')

        console.log('TokenUser::', tokenUser)
        console.log('idUser::', idUser)

        try {
            const res = await fetch(`https://api.request.com/getHistoryByUser?userId=${idUser}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenUser}`
                },
            })
            .then(
                res => res.json()
            ).finally(
            )
            this.setLocalStorageChat(res)

        }catch (error) {
            console.log(error)
        }

        // LocalStorageApp.setItemChat(tipoChat, item)

    }


    private static async setLocalStorageChat(items: []) {
        LocalStorageApp.setChat('CHAT1', await this.filterChat(items, 'CHAT1'))
        LocalStorageApp.setChat('CHAT2', await this.filterChat(items, 'CHAT2'))
        LocalStorageApp.setChat('CHAT3', await this.filterChat(items, 'CHAT3 '))
    }

    private static async filterChat(items:any[], tipoChat: string) {
        let idChatSelected = await GetChatId.getChat(tipoChat)
        let chatItems = items.filter(item => item.contexto_chat == idChatSelected)    
        
        if(chatItems.length <= 0) {
            chatItems = []
        }
        return items.filter(item => item.contexto_chat == idChatSelected)    
    }
        
}