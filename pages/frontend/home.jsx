import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function home() {

  // create a token variable and store the token in it
  const token = Cookies.get('token');

  // if the token is not present then redirect to login page else store the user data in a variable
  useEffect(() => {
    if (!token) {
      Router.push('/login')
    }
    else {
      const user = localStorage.getItem('user');
      const data = JSON.parse(user);
      if (data.isAdmin === true) {
        toast.error('You are not allowed to access this page');
        Router.push('/admin/dashboard');
      }
    }


  }, [])


  // logout function

  const logout = () => {
    Cookies.remove('token')
    localStorage.removeItem('user')
    localStorage.clear;
    window.location.reload();
  }

  return (
    <div>
      <button onClick={logout} className="p-4">logout</button>
      <ToastContainer />
    </div>
  )
}
