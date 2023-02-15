import connectDB from "@/utils/connectDB";
import cart from "@/models/Cart";

export default async (req, res) => {
    await connectDB();
    switch (req.method) {
        case "POST":
            await add_to_cart(req, res)
            break;
        case "GET":
            await get_cart_data(req, res)
            break;
        case "PUT":
            await update_cart_data(req, res)
            break;
        case "DELETE":
            await delete_cart_data(req, res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}


const add_to_cart = async (req, res) => {
    const data = req.body;
    const { productID, user } = data;

    try {

        const checkProd = await cart.findOne({ $and: [{ productID }, { user }] });

        if (checkProd) return res.status(401).json({ error: "This product already exists in cart" })

        await cart.create(data);
        return res.status(200).json({ msg: "Product added to cart " })

    } catch (error) {

        console.log('error in adding product to cart (server) => ' + error)
        return res.status(401).json({ error: "Something went wrong" })

    }
}


const get_cart_data = async (req, res) => {
    const { id } = req.query;
    try {
        const cartData = await cart.find({ user: id });
        return res.status(200).send(cartData);
    } catch (error) {
        console.log('error in getting cart data (server) => ' + error)
        return res.status(401).json({ error: "Something went wrong" })
    }
}


const delete_cart_data = async (req, res) => {

    const data = req.body;
    const { productID, user } = data;


    try {

        await cart.deleteOne({ $and: [{ productID }, { user }] });
        return res.status(200).json({ msg: "Product deleted from cart " })

    } catch (error) {

        console.log('error in deleting product from cart (server) => ' + error)
        return res.status(401).json({ error: "Something went wrong" })

    }

}


const update_cart_data = async (req, res) => {
    
        const data = req.body;
        const { productID, user, quantity } = data;
    
        try {
    
            await cart.updateOne({ $and: [{ productID }, { user }] }, {productQuantity : quantity });
            return res.status(200).json({ msg: "Product updated in cart " })
    
        } catch (error) {
    
            console.log('error in updating product in cart (server) => ' + error)
            return res.status(401).json({ error: "Something went wrong" })
    
        }
}