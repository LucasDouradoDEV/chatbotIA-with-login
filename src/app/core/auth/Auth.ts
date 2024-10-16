import { CheckLogin } from "../helpers/CheckLogin"
import { GetChatDatabase } from "../services/ChatDatabase"

export class AuthLogin {

    public static async Login(emailUser: string) {
        
        if(emailUser) {
            try {
                const user = await fetch('https://api.request.com/loginPorEmail', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "email": emailUser
                        })
                    })
                    .then(
                        res => res.json()
                    )
                
                if(user.error){
                    return user.error
                }else {
                    const setUserLS = await CheckLogin.setToken(user.token, user.user)
                    const chat = await GetChatDatabase.get()
                }

                return "Logado com sucesso"          
            }catch (error) {
                return error
            }
        }else {
            return "E-mail não informado"
        }
    }
}