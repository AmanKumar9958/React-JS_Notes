import React from "react";
import userContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {   // children is nothing but the App component in this case which is wrapped by the userContextProvider component..
    const [user, setUser] = useState(null);
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;

