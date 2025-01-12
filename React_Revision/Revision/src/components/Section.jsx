import React, { useContext } from 'react'
import { DataContext } from '../context/userContext'

const Section = () => {
    const data = useContext(DataContext)
    return (
        <>
            <div className='h-60 w-11/12 bg-gray-500 mt-5 mb-5 m-auto rounded-xl pt-5'>
                <h2 className='text-2xl text-center'>This is <span className='font-bold text-red-500'>Hero Section</span></h2>
                <p className='text-center text-gray-100'>In this section we will get the data from the <span className='text-yellow-400 font-bold text-lg'>User Context file</span></p>
                <p className='text-yellow-400 text-center w-fit m-auto mt-4 bg-slate-600 p-4 rounded-2xl'>Fetched Data: <span className='text-lg font-bold'>{data.userName}</span></p>
            </div>
        </>
    )
}

export default Section