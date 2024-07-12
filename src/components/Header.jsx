import React from 'react'
import logo from '../assets/images/logo.svg'
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className='flex bg-slate-100 p-2 w-full items-center gap-4'>
        <img src={logo} width={60} height={60}/>
        <div className='flex bg-slate-100 p-2 w-full items-center gap-2'>
          <input type='text' />
          <CiSearch />
        </div>
      </div>
  )
}

export default Header