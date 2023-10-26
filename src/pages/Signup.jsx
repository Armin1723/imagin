import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Signup = () => {
  const [text] = useTypewriter({
    words: ['Endless possibilities.', 'Imaginative brilliance.', 'iMAGIN.'],
    loop: {},
  })
  return (
    <div className='grid place-items-center min-h-[100dvh] bg-gradient-to-br from-transparent to-blue-300/20'>
      <form className='w-[90%] md:w-3/5 border-2 md:min-h-[70vh] flex flex-col items-center gap-4 px-8 py-8 bg-blue-300/30 rounded-3xl overflow-hidden shadow-xl shadow-gray-500/50 border-blue-900/30'>
        <img src={logo} className='max-h-[5%] w-1/3 md:w-1/4 mix-blend-multiply select-none'/>
        <div className='text-sm md:text-lg w-[110%] text-center'>Welcome to the world of <span className='text-blue-900'>{text}</span><Cursor/></div>
        <div className="name flex justify-between md:justify-around w-[110%] md:w-4/5 gap-4">
          <input type="text" name="firstName" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Enter your First name' required/>
          <input type="text" name="lastName" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Enter your Last name' required/>
        </div>
        <div className="email flex md:justify-start w-[110%] md:w-4/5 gap-4">
          <input type="email" name="email" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-full md:w-2/3 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Enter your Email Address' required/>
        </div>
        <div className="password flex justify-between md:justify-around w-[110%] md:w-4/5 gap-4">
          <input type="password" name="password" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Choose a Password.' title='Password must contain smallcase, uppercase, number and @$!,.'/>
          <input type="password" name="confirmPassword" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Re-enter your Password.' required/>
        </div>
        <div className="details flex justify-between md:justify-around w-[110%] md:w-4/5 gap-4">
          <input type="number" name="mobile" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Enter your Mobile number.' required/>
          <input type="date" name="dateOfBirth" className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' placeholder='Choose your DoB.' required/>
        </div>
        <div>
          Already a clan member?
          <Link to='/' className='text-blue-700 underline cursor-pointer'> Login</Link>
        </div>
        <input type="submit" value="SignUp" className='border-2 border-blue-400 bg-gradient-to-br from-blue-700/70 to-blue-300/70 hover:bg-gradient-to-r md:w-1/2 w-2/3 p-[4px] rounded-md cursor-pointer' />
      </form>
      
      
    </div>
  )
}

export default Signup
