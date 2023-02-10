import React from 'react'
import { InfinitySpin } from  'react-loader-spinner'

export default function loader() {
    return (
        <div className='w-full h-screen bg-slate-900 absolute top-0 left-0 z-50 '>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>
    )
}
