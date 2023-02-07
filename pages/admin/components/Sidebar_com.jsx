import React from 'react'
import { MdOutlineDashboard, MdPendingActions } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { IoMdAddCircle } from 'react-icons/io'
import { HiUserGroup } from 'react-icons/hi'
import { BiCategory } from 'react-icons/bi'
import { CiLogout } from 'react-icons/ci'
import { CiDeliveryTruck } from 'react-icons/ci'
import Router from 'next/router'
import Cookies from 'js-cookie'

export default function Sidebar_com() {

    // logout function
    const logout = () => {
        Cookies.remove('token')
        localStorage.removeItem('user')
        localStorage.clear;
        window.location.reload();
    }


    return (
        <div className='w-2/12 py-4 relative h-full bg-gray-50 text-gray-900 '>
            <div className='flex items-center justify-center py-2 border-b border-b-gray-400'>
                <h1 className='text-xl p-2 flex items-center justify-center'><MdOutlineDashboard className='mr-2' /> Admin Dashboard</h1>
            </div>
            <div className='flex items-center justify-center flex-col  my-2'>
                <ul className='w-full h-full '>
                    <li onClick={() => Router.push('/admin/dashboard')} className='text-lg hover:bg-orange-600 hover:text-white p-2 my-2 border-b border-b-gray-400 transition duration-500 font-semibold flex items-center justify-start mx-4 cursor-pointer ' ><CgProfile className='mr-2' /> Profile</li>
                    <li onClick={() => Router.push('/admin/User')} className='text-lg hover:bg-orange-600 hover:text-white p-2 my-2 border-b border-b-gray-400 transition duration-500 font-semibold flex items-center justify-start mx-4  cursor-pointer '><HiUserGroup className='mr-2' />Registered users</li>
                    <li className='text-lg hover:bg-orange-600 hover:text-white p-2 my-2 border-b border-b-gray-400 transition duration-500 font-semibold flex items-center justify-start mx-4  cursor-pointer '><IoMdAddCircle className='mr-2' /> Add Product</li>
                    <li className='text-lg hover:bg-orange-600 hover:text-white p-2 my-2 border-b border-b-gray-400 transition duration-500 font-semibold flex items-center justify-start mx-4  cursor-pointer '><BiCategory className='mr-2' /> View Product</li>
                    <li className='text-lg hover:bg-orange-600 hover:text-white p-2 my-2 border-b border-b-gray-400 transition duration-500 font-semibold flex items-center justify-start mx-4  cursor-pointer '><MdPendingActions className='mr-2' /> Pending Orders</li>
                    <li className='text-lg hover:bg-orange-600 hover:text-white p-2 my-2 border-b border-b-gray-400 transition duration-500 font-semibold flex items-center justify-start mx-4  cursor-pointer '><CiDeliveryTruck className='mr-2' /> Completed Orders</li>
                </ul>
            </div>
            <div className='w-full absolute bottom-10 left-0 '>
                <button onClick={logout} className='text-lg p-2 w-full h-full hover:bg-orange-600 hover:text-white   transition duration-500 font-semibold flex items-center justify-center  cursor-pointer '><CiLogout className="mr-2" /> Logout</button>
            </div>
        </div>
    )
}
