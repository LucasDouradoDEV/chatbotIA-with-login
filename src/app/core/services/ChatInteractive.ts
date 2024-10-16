import { GetChat } from "../helpers/getChat";
import { GetChatId } from "../helpers/getChatId";
import { GetUser } from "../utils/getUser";
import { LocalStorageApp } from "../utils/LocalStorage";

export class ChatInteractive {

    public static async sendChat(tipoChat: string, msg: string) {

        const tokenUser = await GetUser.getField('token')
        let idChat = await LocalStorageApp.getChat(tipoChat)
        let history = await LocalStorageApp.getChat(tipoChat)
        let idUser = await GetUser.getField('id')
        let responseMessage = ''
        // console.log("Olá: ", history[0].chatId)
        console.log(history)
        console.log(idChat)
        
        try {    
            const user = await fetch(`https://api.request.com/users/${idUser}/chats/${history[0].chatId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenUser}`
                },
                body: JSON.stringify({
                    history: history,
                    "content": msg
                })
            })
            .then(
                res => res.json()
            )
            console.log(user)
            responseMessage = user.content
        } catch (error) {
            responseMessage = "Erro ao enviar o chat"
        }

        let messages = await GetChat.getChat(tipoChat)

        let itemMsgUser = {
            id: messages.length + 1,
            chatId: history[0].chatId,
            userId: await GetUser.getField('id'),
            role: "user",
            content: msg
        }

        messages.push(itemMsgUser)

        LocalStorageApp.setItemChat(tipoChat, itemMsgUser)

        let itemMsg = {
            id: messages.length + 1,
            chatId: history[0].chatId,
            userId: await GetUser.getField('id'),
            role: "assistant",
            content: responseMessage
          }
      
          messages.push(itemMsg)
          LocalStorageApp.setItemChat(tipoChat, itemMsg)

        return responseMessage
    }
}