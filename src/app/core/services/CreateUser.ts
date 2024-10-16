export class CreateUser {

    public static async new(nome: string, email: string) {
        if(nome && email) {
            try {
                const user = await fetch('https://api.request.com/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "nome": nome,
                            "email": email
                        })
                    })
                    .then(
                        res => res.json()
                    )
                
                if(user.error){
                    return user.error
                }
                
                return "Criado com sucesso"
            }catch (error) {
                return "Erro ao criar o usuário"
            }
        }else {
            return "Informe todos os campos"
        }
    }

}