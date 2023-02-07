
const API_URL = process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:3000';

export const getUserData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/admin/user`  , {
            method: 'GET',
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in fetching user data for admin (services) => ' + error)
    }
}