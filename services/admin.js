
const API_URL = process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:3000';

export const getUserData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/admin/user`, {
            method: 'GET',
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in fetching user data for admin (services) => ' + error)
    }
}



export const add_Category = async (category) => {
    try {
        const res = await fetch('http://localhost:3000/api/admin/addCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category)

        })
        
        const data = await res.json();
        return data

    } catch (err) {
        console.log('Facing error at addCategory client => ' + err);
    }
}



export const getCategoriesData = async () => {
    try{
        const res = await fetch('http://localhost:3000/api/admin/GetCategories', {
            method: 'GET',
        })
        const data = await res.json();
        return data.categories;
    }catch(error)
    {
        console.log('error in getting Categories data (services) => ' + error);
    }
}