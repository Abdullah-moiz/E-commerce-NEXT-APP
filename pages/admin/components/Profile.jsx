import React, { useEffect, useState } from 'react'


export default function Profile() {
    const [name, setName] = useState(undefined)
    const [email, setEmail] = useState(undefined)



    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'))
        setName(data?.name)
        setEmail(data?.email)
    }, [])


    return (
        <div className='w-10/12 h-full text-white px-4 flex items-center justify-start flex-col'>
            <div className='w-full p-4  mt-10 mb-4 flex items-center justify-center'>
                <h1 className='text-4xl font-semibold tracking-widest border-b p-2 uppercase'>WELCOME {name} </h1>
            </div>
            <div className='container w-8/12  p-4 '>
                    <div className=' flex px-2 items-center justify-center w-full h-full '>


                        <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-400 text-sm">2d ago</span>
                                <span class="text-emerald-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="mt-6 w-fit mx-auto">
                                <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" class="rounded-full w-28 " alt="profile picture" srcset="" />
                            </div>

                            <div class="mt-8 ">
                                <h2 class="text-white font-bold text-2xl tracking-wide">{name} </h2>
                            </div>
                            <p class="text-emerald-400 font-semibold mt-2.5" >
                                Active
                            </p>

                            <div class="h-1 w-full bg-black mt-8 rounded-full">
                                <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                            </div>
                            <div class="mt-3 text-white text-sm">
                                <span class="text-gray-400 font-semibold">Authority:</span>
                                <span>40%</span>
                            </div>

                        </section>



                    </div>
                
            </div>
        </div>
    )
}
