import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function home() {
  const [email, setEmail] = useState(undefined);

  const token = Cookies.get('token');

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
