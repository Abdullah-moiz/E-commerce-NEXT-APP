import Category from "@/models/Category";
import connectDB from "@/utils/connectDB";


export default async (req, res) => {

    await connectDB();

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