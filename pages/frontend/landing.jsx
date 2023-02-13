import { getCategoriesData, getProductsData } from '@/services/admin';
import React from 'react'
import Navbar from '../components/Navbar';
import Categories from './components/Categories';
import Intro from './components/Intro';
import Products from './components/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';


export async function getStaticProps() {

    const category = await getCategoriesData() || [];
    const totalProduct = await getProductsData() || [];

    // filtering featured products
    const filterProduct = totalProduct.filter((item) => {
        return item.featured === true;
    })
    
    // 
    const product = filterProduct.slice(0, 8);


    return {
        props: { category, product }

    }

}


export default function Landing({ category, product }) {
    return (
        <div className='w-full h-screen bg-gray-900 '>
            <Navbar pos={"fixed"} />
            <Intro />
            <Categories category={category} />
            <Products product={product} />
            <Footer />
            <ToastContainer />
        </div>
    )
}
