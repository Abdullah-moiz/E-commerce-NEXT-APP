import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";

export default async (req, res) => {
    await connectDB();
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

};