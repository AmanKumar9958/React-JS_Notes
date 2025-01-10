import React from 'react'

const UserName = (props) => {
    return (
        <>
            <div className='w-48 h-fit py-2 bg-slate-700 text-white rounded-lg flex flex-col gap-2 justify-center items-center absolute left-1/3 top-1/3'>
                <h2 className='bg-slate-300 text-black p-2 rounded-lg font-bold'>Username: {props.username}</h2>
                <h2 className='bg-slate-300 text-black p-2 rounded-lg font-bold'>City: {props.city}</h2>
                <h2 className='bg-slate-300 text-black p-2 rounded-lg font-bold'>Course: {props.course}</h2>
            </div>
        </>
    )
}

export default UserName