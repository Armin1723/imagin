import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = (mode) => {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  return (
    <div className='w-full bg-blue-600/10 flex h-[8vh] items-center justify-between px-4 md:px-8'>
      <Link to='/' className='h-full'>
        <img src={logo} alt="logo" className='h-full mix-blend-multiply select-none cursor-pointer'/>
      </Link>
      <div className='flex gap-4'>
        { mode==='signup' ? 
                      <Link to='/' >{mode}</Link> :
                      <Link to='/Signup'>{mode}</Link>  
        }
        
        <Link to='/Create' className='hidden md:block'>Create</Link>
      </div> 
    </div>
  )
}

export default Navbar
