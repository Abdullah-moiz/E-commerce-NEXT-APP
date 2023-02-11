import connectDB from "@/utils/connectDB";
import Product from "@/models/Product";


export default async (req , res) => 
{
    await connectDB();

    const {id} = req.query;

    try
    {
        const data = await Product.findById({_id : id});
        return res.status(201).send(data);
    }
    catch(error)
    {
        console.log('error in getting product data by id (server) => ')
        return res.status(408).json({error : 'cannot get product data'})
    }
    
}