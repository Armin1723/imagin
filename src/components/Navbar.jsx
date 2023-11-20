import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogout } from '../services'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'

const Navbar = ({setIsLoggedIn}) => {
    const user = jwtDecode(localStorage.getItem('userAuth'))
    const [ userId, setUserId ] = useState(user.id)
    const navigateTo = useNavigate()
    const logout =()=>{
        setIsLoggedIn(false)
        handleLogout()
        toast('User Logged Out!!')
        navigateTo('../')
    }
  return (
    <div className='z-10 w-full flex items-center justify-center md:justify-between px-4 md:px-8 fixed bg-gradient-to-b from-blue-400 to-white' style={{WebkitTapHighlightColor: 'transparent'}}>
        <Link to='/'>
            <img src={logo} alt="logo" draggable="false" className='h-[8vh] mix-blend-multiply select-none cursor-pointer'/>
        </Link>
        <div className='hidden md:flex items-center gap-4 capitalize'>
            <Link to='/Community' className='h-[5vh] text-white bg-gradient-to-r from-purple-700/70 to-purple-500/60 hover:bg-gradient-to-br focus:border focus:border-black focus:outline-none font-medium rounded-lg text-sm flex items-center px-5 py-1.5 text-center'>
                Community
            </Link>
            <Link to={`/user/${userId}`} className='h-[5vh] text-white bg-gradient-to-r from-purple-700/70 to-purple-500/60 hover:bg-gradient-to-br focus:border focus:border-black focus:outline-none font-medium rounded-lg text-sm flex items-center px-4 py-1.5 text-center'>
                Profile
            </Link>
            <div onClick={logout} style={{WebkitTapHighlightColor: 'transparent'}} title='logout'>
                <UilSignOutAlt className='icon pb-1 transition-all duration-300 cursor-pointer hover:scale-105 ' size={30} />
            </div>
        </div> 
    </div>
  )
}

export default Navbar
