export class CreateAnotacao {

    public static async new(msg: string) {
        if(msg) {
            try {
                const user = await fetch('https://api.request.com/palestra', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "content": msg
                        })
                    })
                    .then(
                        res => res.json()
                    )
                
                if(user.error){
                    return user.error
                }
                
                return "Salvo com sucesso!"
            }catch (error) {
                return "Erro ao salvar anotação"
            }
        }else {
            return "Erro ao salvar anotação"
        }
    }

}