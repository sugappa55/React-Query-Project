import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-600 text-white text-lg font-bold flex justify-evenly items-center '>
            <div><Link to={"/board"}>Board</Link></div>
            <div><Link to={"/infinite"}>Infinite Scroll</Link></div>
    </div>
  )
}

export default Navbar