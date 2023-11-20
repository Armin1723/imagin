import React, {useEffect, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UilImagePlus, UilUser, UilSignOutAlt, UilApps } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode"
import { handleLogout } from '../services'

const NavbarBottom = ({setIsLoggedIn}) => {
    const [active, setActive] = useState('create')
    const [ userId , setUserId ] = useState('')
    const navigateTo = useNavigate()

    //Handle Navigation
    useEffect(()=>{
        //Get Id of user
        const user = jwtDecode(localStorage.getItem('userAuth'))
        setUserId(user.id)

        let icons = document.querySelectorAll('.icon')
        Object.values(icons).map((icon) =>{
            icon.style.color = 'black'
            icon.style.transform = 'scale(1)'
            icon.style.borderBottom = 'none'
            const parentDiv = icon.closest('div')
            if(parentDiv.id == active){
                icon.style.color = 'rgb(33, 37, 75)'
                icon.style.transform = 'scale(1.15)'
                icon.style.borderBottom = '2px solid rgb(33, 37, 75)'
            }        
        })
    },[active])
    
    
    


    //Logout function
    const logout =()=>{
        handleLogout()
        setIsLoggedIn(false)
        navigateTo('../')
        toast('User Logged Out!!')
    } 
  return (
    <div className='flex md:hidden items-center justify-around p-2 bg-gradient-to-b from-white to-blue-600 z-[10] shadow-md fixed bottom-0 w-full overflow-hidden' style={{WebkitTapHighlightColor: 'transparent'}}>
        <div onClick={e =>setActive(e.currentTarget.id)} id='create'>
            <Link to='/Create' >
                <UilImagePlus className=' icon pb-1 transition-all duration-300' size={30} />
            </Link>
        </div>
        <div onClick={e =>setActive(e.currentTarget.id)} id='community'>
            <Link to='/Community' >
                <UilApps className='icon pb-1 transition-all duration-300' size={30} />
            </Link>
        </div>
        <div onClick={e =>setActive(e.currentTarget.id)} id='profile'>
            <Link to={`user/${userId}`} >
                <UilUser className='icon pb-1 transition-all duration-300' size={30} />
            </Link>
        </div>
        <div id='logout'> 
            <div onClick={logout} >
                <UilSignOutAlt className='icon pb-1 transition-all duration-300' size={30} />
            </div>
        </div>
    </div>
  )
}
export default NavbarBottom
