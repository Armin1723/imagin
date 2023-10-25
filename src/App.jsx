import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Community, Navbar, CreatePost, NavbarBottom } from './components'
import { Login, Signup } from './pages'

const App = () => {
  const [ isLoggedIn, setILoggedIn ] = useState(false)
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-[100dvh]">
        { isLoggedIn && <Navbar/>}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/Create' element={<CreatePost />} />
        </Routes>
        { isLoggedIn && <NavbarBottom />}
      </div>
    </BrowserRouter>

  )
}

export default App
