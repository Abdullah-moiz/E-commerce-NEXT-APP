import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true,
    },
    productName : {
        type: String,
        required: true,
    },

    productPrice : {
        type: Number,
        required: true,
    },

    productQuantity : {
        type: Number,
        required: true,
    },
    
    productImage : {
        type: String,
        required: true,
    }
})

const cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default cart;
