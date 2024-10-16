export class GetUser {
    public static async getField(field: string) {
        const user = await localStorage.getItem('login');
        const tUser = JSON.parse(user!)[field]
        return tUser;
    }
}