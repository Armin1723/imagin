import React from 'react'
import { UilGoogle } from '@iconscout/react-unicons'
import logo from '../assets/logo.png'
import hoverGif from '../assets/hoverGif.gif'
import { Link } from 'react-router-dom'
import {animateHover, removeHover} from '../services'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-gradient-to-br from-transparent to-blue-300/40 '>
      <div className='hidden min-[640px]:flex flex-col w-1/2 h-full justify-between px-8 text-left'>
        <div className="content flex flex-col h-1/2 pt-10 pl-8 relative" onMouseMove={(e)=>animateHover(e)} onMouseLeave={()=>removeHover()}>
          <div className="top font-lobster text-[8vh] w-full font-thin cursor-crosshair">iMAGIN</div>
          <div className="mid capitalize text-[6vh] pb-5 stroke mix-blend-difference">Out of the Box</div>
          <div className="bottom mr-32 cursor-crosshair">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet veniam vero eum corrupti illo ducimus rerum corporis similique adipisci!</div>
        </div>
        <div className='absolute h-1/3 overlayGif w-1/2 bg-transparent' ><img src={hoverGif} className='overlayGifImg absolute'/></div>
        <div className="bottom-logo mix-blend-multiply">
          <img src={logo} className='h-[12vh] mb-[10vh]'/>
        </div>
      </div>
      <div className='flex w-full h-full min-[640px]:w-1/2 items-center justify-center'>
        <form className='flex flex-col items-center justify-around bg-blue-200/30 w-4/5 md:w-3/5 min-h-[70%] rounded-3xl overflow-hidden shadow-xl shadow-gray-500/50 py-4 pb-8 border-2 border-blue-900/30'>
          <img src={logo} className='w-1/2 max-h-[5%] mix-blend-multiply ' />
          <div className="actualForm flex flex-col items-center justify-center gap-5 w-full">
            <input type="email" placeholder='Enter your email' className='border-2 border-blue-300 p-[6px] rounded-lg pl-3 focus:bg-blue-50/10 md:w-1/2 w-2/3'/>
            <input type="password" placeholder='Enter your password' className='border-2 border-blue-300 p-[6px] rounded-lg pl-3 focus:bg-blue-50/10 md:w-1/2 w-2/3'/>
            <input type="submit" value='Login' className='border-2 border-blue-400 bg-gradient-to-br from-blue-700/70 to-blue-300/70 hover:bg-gradient-to-r md:w-1/2 w-2/3 p-[4px] rounded-md '/>
            <div className='text-sm -mt-2'>New to <span className='font-lobster font-extralight tracking-wider'>iMAGIN</span>? <Link to='/signup' className='text-blue-700 underline cursor-pointer'>Signup</Link></div>
          </div>
          <div className="googleSignup flex flex-col items-center justify-between gap-6 w-full">
            <div className='text-[2vh] font-bold relative w-full flex flex-col items-center text-center'>OR</div>
            <div className='flex flex-row gap-2 p-[5px] border-2 border-blue-400 bg-gradient-to-br from-blue-700/70 to-blue-300/70 hover:bg-gradient-to-r md:w-1/2 w-2/3 justify-center rounded-md '>Login via <UilGoogle /></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
