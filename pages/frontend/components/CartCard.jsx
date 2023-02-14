import Image from 'next/image'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { delete_cart_data } from '@/services/admin'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CartCard({item , userID , reupdate}) {


    const delete_cart = async () => {
        const data = { user :  userID ,productID : item.productID };
        const res = await delete_cart_data(data);
        if(res.msg)
        {
            toast.success(res.msg);
            reupdate();
        }
        else
        {
            toast.error(res.error);
        }
    }
   

    return (
        <div className='text-white w-full h-32  flex justify-around items-center bg-slate-900 rounded-xl my-4'>
            <div className='w-40 h-full flex items-center justify-center '>
                <Image src={item.productImage} alt="hello" height={100} width={100} />
            </div>
            <div className='w-40 h-full flex items-center justify-center '>
                <p className='text-xl font-semibold '>{item.productName}</p>
            </div>
            <div className='w-40 h-full flex items-center justify-center '>
                <p className='text-xl font-semibold '>$ {item.productPrice}</p>
            </div>
            <div className='w-40 h-full flex items-center justify-center '>
                <button className='text-2xl  text-center font-semibold  outline-none hover:scale-125 transition duration-500 w-10 h-10  flex items-center justify-center '>+</button>
                <p className=' text-gray-100 scale-110 font-semibold w-10 h-10 flex items-center justify-center text-2xl'>3</p>
                <button className='text-2xl  text-center font-semibold  outline-none hover:scale-125 transition duration-500 w-10 h-10  flex items-center justify-center '>-</button>
            </div>
            <div className='w-40 h-full flex items-center justify-center '>
                <AiOutlineDelete onClick={delete_cart} className="font-semibold text-4xl  cursor-pointer hover:text-red-500" />
            </div>
        </div>
    )
}
