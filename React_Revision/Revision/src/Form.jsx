import React, { useState } from 'react'
import './App.css'
const Form = () => {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");  {/*making input filed empty..*/}

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        setName('');    {/*making input filed empty..*/}
    }
    return (
        <>
        <h2 className='font-bold bg-slate-600 p-4 rounded-2xl text-white'>Form Handling</h2> <br></br>
        <form onSubmit={submitHandler}>
            <input type="text" name="name" id="name" placeholder='Enter you name..' 
            className='border-2 border-slate-700 px-2 py-1 rounded-sm'
            value={name}    // binding the input value to the state..
            onChange={(e) => {
                setName(e.target.value) // storing the name in the state..
            }}
            /> <br></br>
            <button className='bg-gray-600 p-2 text-white font-bold mt-4 rounded-lg'>Submit</button>
        </form>
        <div>
            <h3>Name: {submittedName}</h3>  {/*displaying the inputted name..*/}
        </div>
        </>
    )
}

export default Form