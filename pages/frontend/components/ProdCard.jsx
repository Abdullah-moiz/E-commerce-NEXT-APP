import React from 'react'
import { FaCartPlus } from 'react-icons/fa'


export default function ProdCard({ item , AddtoCart }) {
    const getInCart = () => {
        AddtoCart()
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
                    <FaCartPlus onClick={getInCart} className='text-orange-600 text-2xl mr-4' />
                </div>
            </div>
        </div>
    )
}
