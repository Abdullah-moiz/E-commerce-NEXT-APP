import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Sidebar_com from '../components/Sidebar_com'
import { delete_Product, getProductsData } from '@/services/admin'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';



export async function getStaticProps() {
    const data = await getProductsData() || [];

    return {
        props: { data }
    }

}


export default function getProducts({ data }) {
    const [finalData, setFinalData] = useState(data);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Fetch the updated data from the server
            getProductsData().then((newData) => {
                setFinalData(newData);
            });
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleDelete = async (id) => {
        const data = await delete_Product(id);

        if (data.msg) {
            toast.success(data.msg);
        }
        else {
            toast.error(data.error)
        }
    }

    return (
        <div className='w-full h-screen bg-slate-900 flex  '>
            <Sidebar_com />
            <div className='w-10/12 h-full text-white overflow-auto '>
                <div className='w-full p-4  mt-10 mb-4 flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold tracking-widest border-b p-2 uppercase'>List of Products</h1>
                </div>
                <div className=' px-10 '>
                    <div className="overflow-y-auto  sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b ">
                                        <tr >
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                id
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                Featured Product
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                Image
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            finalData?.map((product) => {
                                                return (
                                                    <tr className="border-b " key={product._id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{product._id}</td>
                                                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                            {product.name}
                                                        </td>
                                                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                            {product.featured === true ? "YES" : "NO"}
                                                        </td>
                                                        <td className="text-sm text-white flex items-center justify-center font-light px-6 py-4 whitespace-nowrap">
                                                            <Image width={100} height={100} src={product.image} alt="product Image" />
                                                        </td>
                                                        <td>
                                                            <Link href={`updateProducts/${product._id}`} class="bg-orange-500 mx-2 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full">Update</Link>
                                                            <button onClick={() => handleDelete(product._id)} class="bg-red-500 mx-2 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })


                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}
