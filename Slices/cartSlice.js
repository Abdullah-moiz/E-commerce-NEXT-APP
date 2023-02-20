import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
         addToCart: async (state, action) => {
            const res = await add_to_cart(data);
            if (res.msg) {
                toast.success(res.msg)
            }
            else {
                toast.error(res.error)
            }
        },
    },
})


export default CartSlice.reducer;