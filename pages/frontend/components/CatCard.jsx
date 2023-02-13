import React  ,{useState} from 'react'
import Link from 'next/link'

export default function CatCard({item}) {
    
    const [hovered, setHovered] = useState(false)
    return (
        <Link href={`viewProductByCategories/${item._id}`}  className={`shadow-xl gap-4 mx-6 my-3 w-96 h-52 bg-green-600 flex items-center justify-center  rounded-2xl relative  transition-all hover:scale-110  duration-700 cursor-pointer`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <img src={item.image} alt="no Image" className='object-fill w-full h-full rounded-2xl' />
            {
                hovered && (
                    <div className='absolute bottom-0 left-0 bg-gray-500/70 w-full h-full flex items-center justify-center rounded-2xl'>
                        <h1 className='text-xl font-semibold  text-white brightness-200'>{item.name}</h1>
                    </div>
                )
            }
        </Link>
    )
}
