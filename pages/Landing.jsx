import React, { useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Router from 'next/router';


export default function Landing() {
    const token = Cookies.get('token');
    useEffect(() => {
        if (token) {
            Router.push('/frontend/home')
        }
        else
        {
            Router.push('/login')
        }
    },[])
    return (
        <div className='text-black'>
            hi
            <Link href={'/login'} className="w-60 p-2 h-10 border-2 border-red-700" >Login</Link>
            <Link href={'/register'}  className="w-60 p-2 h-10 border-2 border-red-700">Register</Link>
        </div>
    )
}
