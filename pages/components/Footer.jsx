import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (

        <footer className="p-4 bg-slate-900 text-white  shadow md:px-6 md:py-8 ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <Image src={'/logo.png'}  alt="no logo"  width={100} height={100} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">E-commerce</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 3 <a href="/" className="hover:underline">PAIN & GAIN</a>. All Rights Reserved.
            </span>
        </footer>

    )
}
