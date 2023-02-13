import React from 'react'
import CatCard from './CatCard'

export default function Categories({ category  }) {
    return (
        <div className='w-full p-4 flex flex-wrap items-center justify-center flex-col'>
            <h1 className='p-2 mb-6 mt-2 border-x-4 border-orange-600 text-4xl uppercase  font-bold '>top Categories</h1>
            <div className='w-full h-full flex items-center justify-center flex-wrap'>

            {
                category?.map((item) => {
                    return ( <CatCard key={item._id} item={item}   />  )
                })
            }

            </div>
        </div >
    )
}
