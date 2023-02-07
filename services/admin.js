import axios from "axios"

export const getUserData  =  async () => {
    const result =  await axios.get('/api/admin/user')
    console.log(result)
    return result.json()
}