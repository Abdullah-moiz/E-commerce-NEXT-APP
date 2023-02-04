import React from 'react'
import Link from 'next/link'

export default function Landing() {
    return (
        <div className='text-black'>
            hi
            <Link href={'/login'} className="w-60 p-2 h-10 border-2 border-red-700" >Login</Link>
            <Link href={'/register'}  className="w-60 p-2 h-10 border-2 border-red-700">Register</Link>
        </div>
    )
}
