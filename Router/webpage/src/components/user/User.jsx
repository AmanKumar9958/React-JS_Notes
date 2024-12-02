import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userName} = useParams();
    return (
        <div className='min-h-[700px] relative flex items-top justify-center bg-white sm:items-center sm:pt-0'>
            <h2 className='bg-green-400 w-4/5 text-center font-bold text-2xl py-10 rounded-3xl hover:bg-orange-700'>Hello, {userName}</h2>
        </div>
    )
}

export default User