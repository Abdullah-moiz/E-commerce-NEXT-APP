

const baseURl = `http://localhost:3000`;

export const getUserData = async () => {
    try {
        const res = await fetch(`${baseURl}/api/admin/user`, {
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
        const res = await fetch(`${baseURl}/api/admin/addCategory`, {
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
    try {
        const res = await fetch(`${baseURl}/api/admin/GetCategories`, {
            method: 'GET',
        })
        const data = await res.json();
        return data.categories;
    } catch (error) {
        console.log('error in getting Categories data (services) => ' + error);
    }
}


export const deleteCategory = async (id) => {
    try {
        const res = await fetch(`${baseURl}/api/admin/deleteCategory?id=${id}`, {
            method: 'DELETE',
        })
        const data = await res.json()
        return data
    }
    catch (error) {
        console.log('error in deleting category Data => ' + error);
    }
}


export const getCategoryById = async (id) => {
   try
   {
        const res  =  await fetch(`${baseURl}/api/admin/getCategoryById?id=${id}` , {
            method : 'GET'
        })
        const data = await res.json();
        return data ;
   }
   catch(error)
   {
     console.log('error in getting specific category (services) => ' + error)
   }
}


export const update_Category = async (category) => {
    try{
        const res = await fetch(`${baseURl}/api/admin/updateCategory` , {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(category)
        })
        const data = await res.json();
        return data;
    }
    catch(error)
    {
        console.log('error in updating category (services) => ' + error)
    }
}