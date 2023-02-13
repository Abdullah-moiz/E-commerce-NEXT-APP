import React, { useEffect } from 'react'
import Sidebar_com from '../../components/Sidebar_com';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileBase from 'react-file-base64'
import { update_product,  getProductByID , getProductsData } from '@/services/admin'
import Router from 'next/router';

import Image from 'next/image';


export async function getStaticProps({ params }) {
    const product_data = await getProductByID(params.id);
    return {
        props: { product_data }
    }
}


export async function getStaticPaths() {
    const product = await getProductsData()

    return {
        paths: product.map(prod => {
            return {
                params: { id: String(prod._id) }
            };
        }),
        fallback: false
    };
}


export default function updateProducts({ product_data }) {

    const [cateData, setCateData] = useState(product_data);
    const [imageData, setImageData] = useState(cateData.image || null);

    const handleImageChange = (base64) => {
        setImageData(base64);
    };





    const handleInputChange = (e) => {
        if (e.target.type === "checkbox") {
            setCateData({ ...cateData, [e.target.name]: e.target.checked });
        } else {
            setCateData({ ...cateData, [e.target.name]: e.target.value });
        }
    };

   const updateNow = async () => 
   {
        const res = await update_product(cateData)
        if (res.msg) {
            toast.success(res.msg);
            Router.push('/admin/products/getProducts');
        }
        else {
            toast.error(res.error);
        }
   }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setCateData({...cateData , image : imageData}, updateNow())
    }




    return (
        <div className='w-full h-screen bg-slate-900 flex'>
            <Sidebar_com />
            <div className='w-10/12 h-full text-white flex flex-col items-center overflow-auto'>
                <div className='w-full p-4  mt-10 mb-4 flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold tracking-widest border-b p-2 uppercase'>Add  Category</h1>
                </div>

                <form className='text-white' onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Category Name</label>
                        <input name='name' value={cateData.name} onChange={handleInputChange} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Category name" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Category Slug</label>
                        <input name='slug' value={cateData.slug} onChange={handleInputChange} type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required placeholder='Slug' />
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input name='featured' onChange={handleInputChange} checked={cateData.featured} id="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Featured Product</label>
                    </div>
                    <div class="mb-6">

                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea name='description' value={cateData.description} onChange={handleInputChange} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Leave a comment..."></textarea>

                    </div>
                    {cateData.image &&
                        <div>
                            <Image width={300} height={200} src={cateData.image} alt="no image" />
                        </div>
                    }

                    <div class="mb-6">

                        <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Category Image</label>
                        <FileBase onDone={({ base64 }) => handleImageChange(base64)} type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required placeholder='Slug' />

                    </div>

                    <button type="submit" class="text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-600">Submit</button>
                </form>


            </div>
            <ToastContainer />
        </div>
    )
}