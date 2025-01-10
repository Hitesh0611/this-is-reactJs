import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-emerald-700 py-7 px-7 text-white flex item-center justify-between'>
      <h2>hello</h2>
      <div className='text-lg underline  flex gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Product'>product</Link>
      </div>
    </div>
  )
}

export default Header
