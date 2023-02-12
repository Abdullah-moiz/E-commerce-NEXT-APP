import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categories from './components/Categories';
import Intro from './components/Intro';


export default function Landing() {
    
    return (
        <div className='w-full h-screen bg-gray-900 '>
            <Navbar/>
            <Intro/>
            <Categories/>
        </div>
    )
}
