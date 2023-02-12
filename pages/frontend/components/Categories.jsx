import React, { useState } from 'react'
import Image from 'next/image'

export default function Categories() {
    const [hovered   ,  setHovered   ] = useState(false)
  return (
    <div className='w-full p-4 flex flex-wrap'>
        {/* card */}
            <div className={`${hovered ? "brightness-50" : "brightness-100"} cursor-pointer w-80 h-52 bg-green-600 flex items-center justify-center p-2  rounded-xl relative`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
                <Image  fill src='/intro.jpg'  cover alt='no Image for Categories rounded-xl'  />
                {
                    hovered && (
                        <h1 className='text-xl font-semibold z-20 text-white brightness-200'>Categories</h1>
                    )
                }
            </div>
        {/* card */}
    </div>
  )
}
