import React from 'react'
import { createContext } from 'react';

export const DataContext = createContext();

const UserContext = ({children}) => {
    const userData = {
        userName: "Aman Kumar",
        city: "Delhi",
    }

    return (
        <>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default UserContext