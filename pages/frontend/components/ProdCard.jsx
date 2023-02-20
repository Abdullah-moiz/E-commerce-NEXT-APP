import React, { useEffect, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { add_to_cart } from '@/services/admin';



export default function ProdCard({ item }) {
    const token = Cookies.get('token');
    const [userID, setUserID] = useState(undefined)

    useEffect(() => {
        if (token) {
            const getUser = localStorage.getItem('user')
            const user = JSON.parse(getUser);
            setUserID(user._id)
        }
    }, [])

    const AddtoCart = async () => {
        if (!token) {
            toast.error('Please login ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if (userID) {
            const { _id, name, image, price } = item;
            const data = { productID: _id, productName: name, productImage: image, productPrice: price, user: userID , productQuantity: 1}
            
        }

    }

    return (
        <div className='cursor-pointer w-72 h-80 my-4 mx-4 rounded-2xl shadow-xl transition-all duration-700 hover:scale-110 relative '>
            <div className='w-full h-4/6 bg-gray-400 rounded-2xl ' >
                <img src={item.image} alt="no image" className='w-full h-full object-fill' />
            </div>
            {
                item.featured && <p className='bg-slate-900 py-1  absolute flex items-center justify-center text-white text-center  text-sm  top-2  left-3 rounded-2xl px-4'>Featured</p>
            }

            <div className='w-full h-2/6  p-2'>
                <p className='text-lg font-bold px-2 py-1 uppercase tracking-wider'>{item.name}</p>
                <div className='flex w-full justify-between items-center'>
                    <p className='text-lg font-bold px-2 py-1'>$ {item.price}</p>
                    <FaCartPlus onClick={AddtoCart} className='text-orange-600 text-2xl mr-4' />
                </div>
            </div>
        </div>
    )
}
