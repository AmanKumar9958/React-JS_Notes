import React from "react";
import { useState } from "react";

const Card = () => {
    let [user, setUser] = useState("Aman Kumar");
    const changeUser = () => {
    let newUser = prompt("Enter new user name: ");
    setUser(newUser);
    }
    return (
        <div className="bg-slate-700 w-fit m-auto p-4 rounded-lg text-white absolute top-1/4 left-72">
            <h2 className="font-bold">User: {user}</h2>
            <button onClick={changeUser} className="bg-gray-600 rounded-md p-2 text-white font-bold mt-4">Change User</button>
        </div>
    );
};

export default Card;