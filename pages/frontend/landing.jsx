import { getCategoriesData, getProductsData } from '@/services/admin';
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categories from './components/Categories';
import Intro from './components/Intro';
import Products from './components/Products';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export async function getStaticProps() {
    const category = await getCategoriesData() || [];
    const totalProduct = await getProductsData() || [];
    const product = totalProduct.slice(0, 8)

    return {
        props: { category, product }
    }

}


export default function Landing({ category, product }) {

    const AddtoCart  = () => {
        toast.success('Product added to cart', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='w-full h-screen bg-gray-900 '>
            <Navbar />
            <Intro />
            <Categories category={category} />
            <Products product={product}  AddtoCart={AddtoCart}/>
            <ToastContainer/>
        </div>
    )
}
