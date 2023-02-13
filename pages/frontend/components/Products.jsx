import React from 'react'
import ProdCard from './ProdCard'

export default function Products({ product }) {
    return (
        <div className='w-full p-4 flex flex-wrap items-center justify-center flex-col'>
            <h1 className='p-2 mb-6 mt-2 border-x-4 border-orange-600 text-4xl uppercase  font-bold '>top Products</h1>
            <div className='w-full h-full flex items-center justify-center flex-wrap'>

                {/* card */}
                {
                    product?.map((item) => {
                        return (
                            <ProdCard item={item} key={item._id} />
                        )
                    })
                }
                {/* card */}

            </div>
        </div >
    )
}
