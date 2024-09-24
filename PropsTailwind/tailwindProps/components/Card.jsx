import React from 'react'

function Card({username, header="Bhai-Bhai"}){    
    return (
        <div className='relative h-[500px] w-[200px] bg-green-400 p-4'>
            <h5>{header}</h5>
            <h3 className='text-black font-extrabold'>{username}</h3>
        </div>
    )
}

export default Card


