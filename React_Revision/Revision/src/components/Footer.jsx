import React, { useContext } from 'react'
import { DataContext } from '../context/userContext'

const Footer = () => {
    const data = useContext(DataContext);
    return (
        <footer className="bg-indigo-600 w-full py-4 border-t-2">
            <h2 className="text-white text-center">This is my Footer</h2>
            <h2 className='text-black text-center bg-green-400 w-fit m-auto p-3 rounded-2xl'>User name is fetched by using Context API: <span className='font-bold'>{data.city}</span></h2>
        </footer>
    )
}

export default Footer