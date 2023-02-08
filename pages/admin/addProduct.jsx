import React from 'react'
import Sidebar_com from './components/Sidebar_com'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'

export default function addProduct() {
    const token = Cookies.get('token');

    // if token is not present then redirect to login page else store the user data in a variable
    useEffect(() => {
      if (!token) {
        Router.push('/login')
      }
      else {
        const user = localStorage.getItem('user');
        const data = JSON.parse(user);
        if (data.isAdmin === false) {
          toast.error('You are not allowed to access this page');
          Router.push('/frontend/home');
        }
      }
      
  
    }, [])
    return (
        <div className='w-full h-screen bg-slate-900 flex'>
            <Sidebar_com />
            <div className='w-10/12 h-full text-white'>
                <div className='w-full p-4  mt-10 mb-4 flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold tracking-widest border-b p-2 uppercase'>Add  products</h1>
                </div>
                
            </div>
        </div>
    )
}
