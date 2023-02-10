

const baseURl = `http://localhost:3000`;


// getting all users data
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


// Adding Category
export const add_Category = async (category) => {
    try {
        const res = await fetch(`${baseURl}/api/admin/category`, {
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


// getting all categories data
export const getCategoriesData = async () => {
    try {
        const res = await fetch(`${baseURl}/api/admin/category`, {
            method: 'GET',
        })
        const data = await res.json();
        return data.categories;
    } catch (error) {
        console.log('error in getting Categories data (services) => ' + error);
    }
}

// deleting  Category
export const deleteCategory = async (id) => {
    try {
        const res = await fetch(`${baseURl}/api/admin/category?id=${id}`, {
            method: 'DELETE',
        })
        const data = await res.json()
        return data
    }
    catch (error) {
        console.log('error in deleting category Data => ' + error);
    }
}

// getting Category by id
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

// updating Category
export const update_Category = async (category) => {
    console.log(' i got call')
    try{
        const res = await fetch(`${baseURl}/api/admin/category` , {
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

// ---------------------------------------------- Products---------------------------------------------------------------------------------

// adding Product
export const add_products = async ( product ) => 
{
    try
    {
        const res =  await fetch(`${baseURl}/api/admin/product` , {
            method : 'POST',
            headers : 
            {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(product)
        })
        const data =  await res.json();
        return data;
    }
    catch(error)
    {
        console.log('error in saving product (services) => ' +  error )
    }
}


// getting all products data
export const getProductsData = async () => {
    try {
        const res = await fetch(`${baseURl}/api/admin/product`, {
            method: 'GET',
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in getting products data (services) => ' + error);
    }
}