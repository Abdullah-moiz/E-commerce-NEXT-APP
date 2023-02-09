import connectDB from "@/utils/connectDB";
import Product from "@/models/Product";

export default async (req, res) => {
    await connectDB();
    switch (req.method) {
        case "POST":
            addProduct(req , res)
            break;
        case "GET":
            getProduct(req , res)
            break;
        case "PUT":
            updateProduct(req , res)
            break;
        case "DELETE":
            deleteProduct(req , res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}


const addProduct = async (req, res) => {
    const data = req.body;
    try
    {
        await Product.create(data);
        return res.status(201).json({msg : "Product Added Successfully"});
    }
    catch(error)
    {
        console.log('error in saving product (server) => ' + error)
        return res.status(405).json({error : "Cannot Add Product , Retry !"})
    }
}

const deleteProduct = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

const updateProduct = async (req, res) => {
    try {

    }
    catch (error) {

    }
}
const getProduct = async (req, res) => {
    try {

    }
    catch (error) {

    }
}