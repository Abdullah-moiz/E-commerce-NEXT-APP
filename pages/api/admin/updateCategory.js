import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";



export default async (req , res) => 
{
    await connectDB();

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