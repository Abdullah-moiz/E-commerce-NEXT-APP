import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";

export default async (req, res) => {
    await connectDB();
    switch (req.method) {
        case "POST":
            await addCategory(req , res)
            break;
        case "GET":
            await getCategory(req , res)
            break;
        case "PUT":
            await updateCategory(req , res)
            break;
        case "DELETE":
            await  deleteCategory(req , res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

// Adding Category

const addCategory = async (req, res) => {
    const data = req.body;

    const {name , slug , featured , image , description} = data;

    if(!name || !slug || !featured || !image || !description) {
        return res.status(422).json({error : "Please fill all the fields"});
    }
    
    try {
        await Category.create(data);
        return res.status(201).json({msg : 'Category added successfully'});
    }
    catch (error) {
        console.log('error adding category', error.message);
        return res.status(500).json({error : "something went wrong"});
    }
}


// deleting  Category
const deleteCategory = async (req, res) => {
    const { id } = req.query;
    try {
        await Category.findByIdAndDelete(id);
        return res.status(200).json({ msg: "category deleted successfully" });
    }
    catch (error) {
        console.log('error in deleting Category data (backend) => ' + error);
        return res.status(405).json({ error: "cannot delete category" });
    }
}

// updating Category

const updateCategory = async (req, res) => {
    const data = req.body;
    const id = data._id;
    try
    {
        await Category.findByIdAndUpdate(id , data)
        return res.status(200).json({msg : 'category updated successfully'})
        
    }
    catch(error)
    {
        console.log('error in getting category data by id (server) => ' + error)
        return res.status(408).json({error : 'cannot update category data'})
    }
}


// getting Category
const getCategory = async (req, res) => {
    try
    {
        const categories = await Category.find({});
        return res.status(200).json({categories});
    }
    catch(error)
    {
        console.log('error in getting Categories data (backend) => ' + error);
        return res.status(405).json({error : "cannot get categories"});
    }
}