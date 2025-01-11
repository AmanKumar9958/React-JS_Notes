import React from 'react'
import './nav.css'
const Nav = () => {
    return (
        <nav className='flex justify-between border-2 bg-emerald-500 px-3 py-2 rounded-xl w-11/12 h-fit mt-2 m-auto'>
            <h2 className='font-bold text-xl cursor-pointer logo'>Logo</h2>
            <div className='flex items-center gap-5'>
                <h4 className='cursor-pointer text-lg links'>Change</h4>
                <h4 className='cursor-pointer text-lg links'>About</h4>
                <h4 className='cursor-pointer text-lg links'>Services</h4>
                <h4 className='cursor-pointer text-lg links'>Theme</h4>
                <h4 className='cursor-pointer text-lg links'>Login</h4>
            </div>
        </nav>
    )
}

export default Nav