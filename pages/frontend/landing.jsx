import { getCategoriesData } from '@/services/admin';
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categories from './components/Categories';
import Intro from './components/Intro';


export async function getStaticProps() {
    const category = await getCategoriesData() || [];

    return {
        props: { category }
    }

}


export default function Landing( {category}) {

    useEffect(() => {
        console.log(category)
    }, [])
    
    return (
        <div className='w-full h-screen bg-gray-900 '>
            <Navbar/>
            <Intro/>
            <Categories category={category}/>
        </div>
    )
}
