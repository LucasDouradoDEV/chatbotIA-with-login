export class GetChatId {

    public static async getChat(tipoChat: string) {
        
        let idChatSelected: string
        
        switch (tipoChat) {
            case 'CRONOGRAMA':
                idChatSelected = "CRONOGRAMA"
                break;

            case 'PALESTRA':
                idChatSelected = "PALESTRA"
                break;

            case 'PORTFOLIO':
                idChatSelected = "PORTFOLIO"
                break;

            default:
                idChatSelected = ""
                break;
        }

        return idChatSelected
    }

}