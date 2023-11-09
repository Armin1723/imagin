import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Community, Navbar, CreatePost, NavbarBottom } from './components'
import { Login, Signup } from './pages'

const App = () => {
  const [ isLoggedIn, setILoggedIn ] = useState(false)
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-[100vh]">
        { isLoggedIn && <Navbar setIsLoggedIn={setILoggedIn}/>}
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setILoggedIn}/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Community' element={<Community setIsLoggedIn={setILoggedIn}/>} />
          <Route path='/Create' element={<CreatePost setIsLoggedIn={setILoggedIn}/>} />
        </Routes>
        { isLoggedIn && <NavbarBottom setIsLoggedIn={setILoggedIn}/>}
      </div>
    </BrowserRouter>

  )
}

export default App
