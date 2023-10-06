import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, Community, Navbar, CreatePost } from './components'

const App = () => {

  const [ accent,setAccent ] = useState('blue');
  const [ mode,setMode ] = useState('login');
  
  return (
    <BrowserRouter>
      <Navbar mode={mode}/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Community' element={<Community />} />
        <Route path='/Create' element={<CreatePost />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>   
  )
}

export default App
