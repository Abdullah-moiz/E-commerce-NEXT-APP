import React, { useEffect, useState } from 'react'
import { getCategoriesData, get_Product_By_Category } from '@/services/admin';
import Navbar from '@/pages/components/Navbar';
import Footer from '@/pages/components/Footer';
import ProdCard from '../components/ProdCard';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export async function getStaticProps({ params }) {
    const product = await get_Product_By_Category(params.id) || [];
    return {
        props: { product }
    }
}

export default function viewProductByCategories({ product , AddtoCart }) {
    const [catName, setCatName] = useState(undefined);

    useEffect(() => {
        product?.map((prod) => {
            setCatName(prod.category.name);
        })
    },[])

    return (
        <>
        <div className='w-full flex bg-slate-900 flex-col '>
            <Navbar pos={"absolute"} />
            <div className="w-full h-full px-4 bg-white py-10 my-24">
                <Link href={'/frontend/landing'} className="text-orange-600 border-b-2 border-slate-900 p-2 text-lg font-semibold">Home / {catName}</Link>
                <div className='my-10 mx-4 flex flex-wrap py-4 items-center justify-center'>
                    {
                        product?.map((item) => {
                            return <ProdCard item={item} key={item._id} AddtoCart={AddtoCart} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
        <ToastContainer />
        </>
    )
}

export async function getStaticPaths() {
    const category = await getCategoriesData();
    return {
        paths: category.map((cate) => {
            return {
                params: { id: String(cate._id) }
            }
        }),
        fallback: false,

    }

}



