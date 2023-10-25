import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='w-full bg-white flex items-center justify-center md:justify-between px-4 md:px-8 fixed bg-gradient-to-b from-blue-400/60 to-transparent' style={{WebkitTapHighlightColor: 'transparent'}}>
        <Link to='/'>
            <img src={logo} alt="logo" draggable="false" className='h-[8vh] mix-blend-multiply select-none cursor-pointer'/>
        </Link>
        <div className='hidden md:flex items-center gap-4 capitalize'>
            <Link to='/Create' className='h-[5vh] text-white bg-gradient-to-r from-purple-700/70 to-purple-500/60 hover:bg-gradient-to-br focus:border focus:border-black focus:outline-none font-medium rounded-lg text-sm flex items-center px-4 py-1.5 text-center'>
                Create
            </Link>
            <Link to='/Community' className='h-[5vh] text-white bg-gradient-to-r from-purple-700/70 to-purple-500/60 hover:bg-gradient-to-br focus:border focus:border-black focus:outline-none font-medium rounded-lg text-sm flex items-center px-5 py-1.5 text-center'>
                Community
            </Link>
        </div> 
    </div>
  )
}

export default Navbar
