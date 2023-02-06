import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router';
import Navbar from './components/Navbar';


export default function Landing() {

    // storing token in variable token
    const token = Cookies.get('token');

    // if token is present then redirect to home page
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
