import React from 'react'
import { useEffect , useState } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';

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

      console.log(data)

    }


  }, [])

  const logout = () => {
    Cookies.remove('token')
    localStorage.removeItem('user')
    localStorage.clear;
    window.location.reload();
  }
  return (
    <button onClick={logout}>logout </button>
  )
}
