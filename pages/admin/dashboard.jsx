import React from 'react'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function dashboard() {
  
  // storing token in variable token 
  const token = Cookies.get('token');

  // if token is not present then redirect to login page else store the user data in a variable
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

  // logout function
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
