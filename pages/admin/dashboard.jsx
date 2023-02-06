import React from 'react'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function dashboard() {
  const [email, setEmail] = useState(undefined);
  const token = Cookies.get('token');


  useEffect(() => {
    if (!token) {
      Router.push('/login')
    }
    else {
      const user = localStorage.getItem('user');
      const data = JSON.parse(user);
      if (data.isAdmin === false) {
        toast.error('You are not allowed to access this page');
        Router.push('/frontend/home');
      }

    }


  }, [])

  const logout = () => {
    Cookies.remove('token')
    localStorage.removeItem('user')
    localStorage.clear;
    window.location.reload();
  }
  return (
    <>
      <button onClick={logout}>logout </button>
      <ToastContainer />
    </>
  )
}
