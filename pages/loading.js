import React from 'react'
import { InfinitySpin } from  'react-loader-spinner'

export default function loading() {
    return (
        <div className='w-full h-screen bg-slate-900 '>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>
    )
}
