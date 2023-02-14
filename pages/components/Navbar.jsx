import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Router from 'next/router'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import "react-tooltip/dist/react-tooltip.css";
import Cookies from 'js-cookie'
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Navbar({pos}) {
    const token = Cookies.get('token');
    const [curUser, setCurUser] = useState(false);
    const [scrolled , isScrolled]  = useState(false);

    useEffect(() => {
        if (token) {
            setCurUser(true)
        }
    }, [token])


    const logout = () => {
        Cookies.remove('token')
        localStorage.removeItem('user')
        localStorage.clear;
        window.location.reload();
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                isScrolled(true)
            } else {
                isScrolled(false)
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    isScrolled(true)
                } else {
                    isScrolled(false)
                }
            })
        }
    }, [scrolled])



    return (
        <div className={` ${scrolled ? "bg-slate-900" : "bg-transparent"} z-50  w-full h-24  text-white flex justify-around ${pos} top-0 left-0`}>
            <div className=' h-full  flex items-center justify-start px-4'>
                <Image width={150} height={150} alt="Logo" src={'/logo.png'} className=" mx-4" />
            </div>
            <div className=' h-full flex item-center  justify-center px-4'>
                <ul className='w-full h-full flex items-center justify-center'>
                    <li onClick={() => Router.push('/frontend/landing')} className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>Home</li>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>About</li>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>Contact</li>
                    <li className='mx-4 p-2  text-lg cursor-pointer transition-all duration-500 hover:text-orange-600'>Products</li>
                </ul>
            </div>
            <div className=' h-full  flex items-center  justify-around px-4'>
                <AiOutlineShoppingCart onClick={()  => Router.push('/frontend/cart')}  className='text-2xl  mx-4 hover:text-orange-600 transition-all duration-500 cursor-pointer' />
                {
                    curUser ? <BiLogOut id="logout" className='text-2xl  mx-4  hover:text-orange-600 transition-all duration-500 cursor-pointer' onClick={logout} /> : <BiLogIn id="login" className='text-2xl  mx-4  hover:text-orange-600 transition-all duration-500 cursor-pointer' onClick={() => Router.push('/login')}  />
                }

            </div>
            <ReactTooltip
                anchorId="login"
                place="bottom"
                variant="info"
                content="LOGIN"
            />
            <ReactTooltip
                anchorId="logout"
                place="bottom"
                variant="info"
                content="LOGOUT"
            />
        </div>
    )
}
