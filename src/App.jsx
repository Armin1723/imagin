import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Community, Navbar, CreatePost, NavbarBottom, Profile } from './components'
import { Login, Signup } from './pages'

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-[100vh]">
        { isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn}/>}
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Community' element={<Community setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/Create' element={<CreatePost setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='user/:id' element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
        { isLoggedIn && <NavbarBottom setIsLoggedIn={setIsLoggedIn}/>}
      </div>
    </BrowserRouter>
  )
}
export default App
