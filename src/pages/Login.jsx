import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import hoverGif from '../assets/hoverGif.gif'
import { Link, useNavigate } from 'react-router-dom'
import {animateHover, removeHover} from '../services'
import { ToastContainer, toast } from 'react-toastify'
import baseUrl from '../assets/constants/baseUrl.js'

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ error, setError ] = useState(null)
  const navigateTo = useNavigate()

  useEffect(()=>{
    const authToken = localStorage.getItem('userAuth')
    if(authToken){
      navigateTo('/create')
      setIsLoggedIn(true)
    }
  },[])

  const handleLogin = async (e)=>{
    e.preventDefault()
      const response = await fetch(baseUrl + '/api/user/login',{headers : {
        'Content-Type' : 'application/json',
        },method : 'post' ,
        body : JSON.stringify({
          email,
          password
        }),
      })
      const data = await response.json()
      if(data.error)
        setError(data.error)
      else if(data.success){
        setIsLoggedIn(true)
        localStorage.setItem("userAuth" , data.authToken)
        navigateTo('/create')
      }
  }

  //Handle Google Login
  // const login = useGoogleLogin({
  //   onSuccess: tokenResponse => {
  //     console.log(tokenResponse)
  //     decodedResponse = jwtDecode(tokenResponse.access_token)
  //     console.log(decodedResponse)
  //   }
  // });

  return (
    <div className='flex items-center justify-center h-[100vh] bg-gradient-to-br from-transparent to-blue-300/40 '>
      <ToastContainer/>
      {/* Graphics Side */}
      <div className='hidden min-[640px]:flex flex-col w-1/2 h-full justify-between px-8 text-left'>
        <div className="content select-none flex flex-col h-1/2 pt-10 pl-8 relative" onMouseMove={(e)=>animateHover(e)} onMouseLeave={()=>removeHover()}>
          <div className="top font-lobster text-[8vh] w-full font-thin cursor-crosshair">iMAGIN</div>
          <div className="mid capitalize text-[6vh] pb-5 stroke mix-blend-difference">Out of the Box</div>
          <div className="bottom mr-32 cursor-crosshair text-justify">Welcome to <span className="font-lobster">iMAGIN</span> a place where your imagination is the only limit. Get ready to be amazed. Explore the world of likeminded individuals and create something unique.</div>
        </div>
        <div className='absolute h-1/3 overlayGif w-1/2 bg-transparent' ><img src={hoverGif} className='overlayGifImg absolute'/></div>
        <div className="bottom-logo mix-blend-multiply mb-[5vh]">
          <img src={logo} className='h-[12vh] select-none'/>
        </div>
      </div>

      {/* Form Side */} 
      <div className='flex w-full h-full min-[640px]:w-1/2 items-center justify-center'>
        <form method="POST" onSubmit={async(e)=>handleLogin(e)} className='flex flex-col items-center justify-center gap-8 bg-blue-200/30 w-4/5 md:w-3/5 min-h-[55%] md:min-h-[60%] rounded-3xl overflow-hidden shadow-xl shadow-gray-500/50 py-4 pb-8 border-2 border-blue-900/30'>
          <img src={logo} className='w-1/2 max-h-[5%] mix-blend-multiply select-none' />
          <div className="actualForm flex flex-col items-center justify-center gap-5 w-full">
            <input type="email" 
                   placeholder='Enter your email' 
                   name='email' autoComplete='true'
                   onChange={(e)=>setEmail(e.currentTarget.value)} 
                   value={email} 
                   className='border-2 focus:outline-none border-blue-300 focus:border-blue-600 p-[6px] rounded-lg pl-3 md:w-1/2 w-2/3'/>
            <input type="password"
                   placeholder='Enter your password' 
                   name='password' autoComplete='true'
                   onChange={(e)=>setPassword(e.currentTarget.value)} 
                   value={password} 
                   className='border-2 focus:outline-none border-blue-300 focus:border-blue-600 p-[6px] rounded-lg pl-3 md:w-1/2 w-2/3'/>
            {error && <div className=' text-red-600 font-bold'>{error}</div>}
            <input type="submit" value='Login' className='border-2 border-blue-400 bg-gradient-to-br from-blue-700/70 to-blue-300/70 hover:bg-gradient-to-r md:w-1/2 w-2/3 p-[4px] rounded-md cursor-pointer'/>
            <div className='text-sm -mt-2'>New to <span className='font-lobster font-[100] tracking-widest'>iMAGIN</span>? <Link to='/signup' className='text-blue-700 underline cursor-pointer'>Signup</Link></div>
          </div>
          {/* <div className="googleSignup flex flex-col items-center justify-between md:gap-4 gap-2 w-full">
            <div className='text-[2vh] font-bold relative w-full flex flex-col items-center text-center'>OR</div>
            <div className='flex flex-row gap-2 p-[5px] border-2 border-blue-400 bg-gradient-to-br from-blue-700/70 to-blue-300/70 hover:bg-gradient-to-r md:w-1/2 w-2/3 justify-center rounded-md cursor-pointer'  onClick={() => login()}>Login via <UilGoogle /></div>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login
