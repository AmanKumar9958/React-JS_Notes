import React, { useEffect, useState } from 'react'

function GitHub() {
    // we want to update the followers on loading of component..
    const [data, setData] = useState([]);
    // we want an api call to fetch GitHub data..
    useEffect(() => {
        fetch('https://api.github.com/users/AmanKumar9958')
        .then(response => response.json())
        .then(data => setData(data))
    })
    return (
        <div className='min-h-[700px] relative flex items-top justify-center bg-white sm:items-center sm:pt-0 flex-col gap-12'>
            <img src={data.avatar_url} alt="GitHub_Profile_Picture" className='rounded-full w-1/4'/>
            <h2 className='bg-green-400 w-1/4 text-center font-bold text-2xl py-10 rounded-3xl hover:bg-orange-700'>Followers: {data.followers}</h2>
            <h2 className='bg-green-400 w-1/4 text-center font-bold text-2xl py-10 rounded-3xl hover:bg-orange-700'>Repositories: {data.public_repos}</h2>
        </div>
    )
}

export default GitHub