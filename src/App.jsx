import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import "./App.css"
import Contacts from './components/pages/Contacts'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </>
  )
}

export default App