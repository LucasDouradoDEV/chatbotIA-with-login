export class LocalStorageApp {

    public static async getChat(tipoChat: string) {
        console.log('LocalStorageApp::GetChat >> ',tipoChat)
        const r = await this.getTable(tipoChat)        
        return r;
    }
    public static setChat(tipoChat: string, history: any) {
        localStorage.setItem(tipoChat, JSON.stringify(history));
    }

    public static setItemChat(tipoChat: string, item:{}) {  
        const table = this.getTable(tipoChat);
        table.push(item);
        localStorage.setItem(tipoChat, JSON.stringify(table));
    }

    private static getTable(tipoChat: string) {
        const table = localStorage.getItem(tipoChat);
        if (table) {
            return JSON.parse(table);
        }
        return [];
    }

    public static deleteLocalStorage() {
        localStorage.clear();
    }
}