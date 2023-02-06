import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router';
import Navbar from './components/Navbar';


export default function Landing() {
    const token = Cookies.get('token');
    useEffect(() => {
        if (token) {
            Router.push('/frontend/home')
        }
    },[])
    return (
        <div className='w-full h-screen bg-gray-900 border-2'>
            <Navbar/>
        </div>
    )
}
