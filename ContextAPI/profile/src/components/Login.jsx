import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [usernames, setUsernames] = useState('')
    const [passwords, setPasswords] = useState('')
    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({usernames, passwords})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={usernames} onChange={(e) => setUsernames(e.target.value)} placeholder='Enter username' />
            <input type="text" value={passwords} onChange={(e) => setPasswords(e.target.value)} placeholder='Enter password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login