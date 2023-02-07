import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Router from 'next/router'
import { BiLogIn } from 'react-icons/bi'


export default function Navbar() {
    return (
        <div className='w-full h-24 bg-gray-50 text-black flex justify-around'>
            <div className=' h-full  flex items-center justify-start px-4'>
                <Image width={150} height={150} alt="Logo" src={'/logo.png'} className=" mx-4" />
            </div>
            <div className=' h-full flex item-center  justify-center px-4'>
                <ul className='w-full h-full flex items-center justify-center'>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>Home</li>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>About</li>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>Contact</li>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>Products</li>
                </ul>
            </div>
            <div className=' h-full  flex items-center  justify-around px-4'>
                <AiOutlineShoppingCart className='text-2xl  mx-4 hover:text-orange-600 transition-all duration-500 cursor-pointer' />
                <BiLogIn  className='text-2xl  mx-4  hover:text-orange-600 transition-all duration-500 cursor-pointer' onClick={() => Router.push('/login')} />
            </div>
        </div>
    )
}
