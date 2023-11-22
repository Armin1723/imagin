import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { handleSignup  } from '../services'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [ error, setError ] = useState(null)
  const [ message, setMessage ] = useState(null)

  // Password Validation
  useEffect((e)=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
    if(password.length <= 7 || password.length >= 15){
      setError("Password must have 8-15 characters.")
    }else if(!password.match(regex)){
      setError("Password Must Contain Uppercase, lowercase , number and special character.")
    }else {
      setError(null)
    }
  },[password])

  // Password Matching
  useEffect(()=>{
    if(password != confirmPassword)
      setError("Passwords do not match.")
    else
      setError(null)
  },[confirmPassword])

  //Signup
  const signup = async(e)=>{
    const creds = {firstName, lastName, email, password, mobile, dateOfBirth}
    e.preventDefault()
    const data = await handleSignup(creds)
    setMessage(data.msg)
  }

  //Typewriter Effect
  const [text] = useTypewriter({
    words: ['Endless possibilities.', 'Imaginative brilliance.', 'iMAGIN.'],
    loop: {},
  })

  return (
    <div className='grid place-items-center min-h-[100dvh] bg-gradient-to-br from-transparent to-blue-300/20'>
      <form method="post" onSubmit={(e)=>signup(e)} className='w-[90%] md:w-3/5 border-2 md:min-h-[70h] flex flex-col items-center gap-4 px-8 pt-4 pb-8 bg-blue-300/30 rounded-3xl overflow-hidden shadow-xl shadow-gray-500/50 border-blue-900/30'>
        <img src={logo} className='max-h-[5%] w-1/2 md:w-1/4 mix-blend-multiply select-none'/>
        <div className='text-sm md:text-lg w-[110%] text-center'>Welcome to the world of <span className='text-blue-900'>{text}</span><Cursor/></div>
        <div className="name flex justify-between md:justify-around w-[110%] md:w-4/5 gap-4">
          <input type="text"
                 name="firstName" 
                 onChange={(e)=>setFirstName(e.currentTarget.value)} 
                 value={firstName} 
                 className='capitalize focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Enter your First name' 
                 required/>
          <input type="text" 
                 name="lastName" 
                 onChange={(e)=>setLastName(e.currentTarget.value)} 
                 value={lastName}
                 className='capitalize focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Enter your Last name' 
                 required/>
        </div>
        <div className="email flex w-[110%] md:w-[120%] gap-4 justify-center">
          <input type="email" 
                 name="email"
                 onChange={(e)=>setEmail(e.currentTarget.value)} 
                 value={email} 
                 className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-full md:w-2/3 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Enter your Email Address' 
                 required/>
        </div>
        <div className="password flex justify-between md:justify-around w-[110%] md:w-4/5 gap-4">
          <input type="password" 
                 name="password"
                 onChange={(e)=>setPassword(e.currentTarget.value)} 
                 value={password} 
                 className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Choose a Password.' 
                 title='Password must contain smallcase, uppercase, number and @$!,.'/>
          <input type="password"
                 name="confirmPassword"
                 onChange={(e)=>setConfirmPassword(e.currentTarget.value)} 
                 value={confirmPassword} 
                 className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Re-enter your Password.' 
                 required/>
        </div>
        {error && <div className='w-full md:w-4/5 align-left text-xs text-red-600'>{error}</div>}
        <div className="details flex justify-between md:justify-around w-[110%] md:w-4/5 gap-4">
          <input type="number" 
                 name="mobile" 
                 onChange={(e)=>setMobile(e.currentTarget.value)} 
                 value={mobile}
                 className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Enter your Mobile number.'
                 required/>
          <input type="date" 
                 name="dateOfBirth" 
                 onChange={(e)=>setDateOfBirth(e.currentTarget.value)} 
                 value={dateOfBirth}
                 className='focus:outline-none border-2 border-blue-300 focus:border-blue-600 rounded-lg pl-2 md:pl-3 w-1/2 p-[6px] placeholder:text-xs md:placeholder:text-md' 
                 placeholder='Choose your DoB.' 
                 required/>
        </div>
        <div className='text-center'>
          Already a clan member?
          <Link to='/' className='text-blue-700 underline cursor-pointer'> Login</Link>
        </div>
        {message && <div className='text-xs text-purple-900 font-bold italic'>{message}</div>}
        <input type="submit" value="SignUp" disabled={error} className='border-2 border-blue-400 bg-gradient-to-br from-blue-700/70 to-blue-300/70 hover:bg-gradient-to-r md:w-1/2 w-2/3 p-[4px] rounded-md cursor-pointer' />
      </form>
      
      
    </div>
  )
}

export default Signup
