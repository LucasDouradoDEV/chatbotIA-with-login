import { GetUser } from "../utils/getUser"

export class GetInsightDatabase {

    public static async get() {

        const tokenUser = await GetUser.getField('token')
        
        try{
            const res = await fetch(`https://api.request.com/insights`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenUser}`
                },
            })
            .then(
                res => res.json()
            )
            return res
        }
        catch (error) {
            return error
        }
    }
}