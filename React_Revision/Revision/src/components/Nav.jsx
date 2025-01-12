import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <nav className='flex justify-between border-2 bg-emerald-500 px-3 py-2 rounded-xl w-11/12 h-fit mt-2 m-auto mb-5'>
            <Link to='/' className='font-bold text-xl cursor-pointer logo'>Logo</Link>
            <div className='flex items-center gap-5'>
                <NavLink to='/' className={({isActive}) => isActive ? 'cursor-pointer text-lg links font-bold text-red-600' : 'cursor-pointer text-lg font-bold' } >Home</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'cursor-pointer text-lg links font-bold text-red-600' : 'cursor-pointer text-lg font-bold' } >About</NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive ? 'cursor-pointer text-lg links font-bold text-red-600' : 'cursor-pointer text-lg font-bold' } >Contact</NavLink>
                <NavLink to='/projects' className={({isActive}) => isActive ? 'cursor-pointer text-lg links font-bold text-red-600' : 'cursor-pointer text-lg font-bold' }>Projects</NavLink>
            </div>
        </nav>
    )
}

export default Nav