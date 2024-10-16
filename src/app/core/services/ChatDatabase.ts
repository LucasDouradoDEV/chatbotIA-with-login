import { GetUser } from "../utils/getUser"
import { LocalStorageApp } from "../utils/LocalStorage"

export class GetChatDatabase {
    
    public static async get() {

        const tokenUser = await GetUser.getField('token')
        const idUser = await GetUser.getField('id')

        console.log('TokenUser::', tokenUser)
        console.log('idUser::', idUser)


        //  Request do chat no backend (desativado)
        // try {
        //     const res = await fetch(`https://api.request.com/getHistoryByUser?userId=${idUser}`, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${tokenUser}`
        //         },
        //     })
        //     .then(
        //         res => res.json()
        //     ).finally(
        //     )
        //     this.setLocalStorageChat(res)

        // }catch (error) {
        //     console.log(error)
        // }

        

        this.setLocalStorageChat(this.chatHistoryExample())

    }


    private static async setLocalStorageChat(items: {}[]) {
        LocalStorageApp.setChat('CHAT1', await this.filterChat(items, 'CHAT1'))
        LocalStorageApp.setChat('CHAT2', await this.filterChat(items, 'CHAT2'))
        LocalStorageApp.setChat('CHAT3', await this.filterChat(items, 'CHAT3'))
    }

    private static async filterChat(items:any[], tipoChat: string) {
        let idChatSelected = tipoChat
        let chatItems = items.filter(item => item.contexto_chat == idChatSelected)    
        
        if(chatItems.length <= 0) {
            chatItems = []
        }
        return items.filter(item => item.contexto_chat == idChatSelected)    
    }
   
    
    private static chatHistoryExample() {
        const startHistoryChat = [
            {
                "id": 1,
                "chatId": 1,
                "userId": 1,
                "role": "assistant",
                "content": "Olá! sou a assistente do CHAT 1. Como posso ajudar você hoje?",
                "contexto_chat": "CHAT1"
            },
            {
            "id": 2,
            "chatId": 2,
            "userId": 1,
            "role": "assistant",
            "content": "Olá! sou a assistente do CHAT 2. Como posso ajudar você hoje?",
            "contexto_chat": "CHAT2"
            },
            {
            "id": 3,
            "chatId": 3,
            "userId": 1,
            "role": "assistant",
            "content": "Olá! sou a assistente do CHAT 3. Como posso ajudar você hoje?",
            "contexto_chat": "CHAT3"
            }
        ]

        return startHistoryChat
    }
}  