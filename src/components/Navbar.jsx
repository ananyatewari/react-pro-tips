import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export default function Navbar() {
  return (
    <>
    <nav>
        <Link to={"/"}>Kalvium❤️</Link>
        <div>
            <Link to={"/contacts"} className='nav'>Contacts</Link>
            <Link to={"/register"} className='nav'>Registration form</Link>
        </div>
    </nav>
    </>
  )
}
