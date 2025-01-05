import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)
    if(!user){
        return(
            <h1>Please login first</h1>
        )
    }
    else{
        return(
            <div>
                <h1>Profile</h1>
                <h2>Welcome {user.usernames}</h2>
            </div>
        )
    }
}

export default Profile