import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UilImagePlus, UilUser, UilSignOutAlt, UilApps } from '@iconscout/react-unicons'
import './utils.css'
import { setActive } from '../services'

const NavbarBottom = () => {
    
  return (
    <div className='flex md:hidden items-center justify-around p-2 overflow-auto bg-gradient-to-b from-transparent to-blue-600/40' style={{WebkitTapHighlightColor: 'transparent'}}>
        <div onClick={e =>setActive(e)} >
            <Link to='/Create' >
                <UilImagePlus className=' icon active' />
            </Link>
        </div>
        <div onClick={e =>setActive(e)}>
            <Link to='/Community' >
                <UilApps className='icon' />
            </Link>
        </div>
        <div onClick={e =>setActive(e)}>
            <Link to='/' >
                <UilUser className='icon' />
            </Link>
        </div>
        <div onClick={e =>setActive(e)}>
            <Link to='/' >
                <UilSignOutAlt className='icon' />
            </Link>
        </div>
    </div>
  )
}

export default NavbarBottom
