import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'



function PasswordGenerator() {
  const [length, setLength] = useState(8);  // default length of the password
  const [numAllowed, setNumAllowed] = useState(false);    // by default numbers are not allowed
  const [charAllowed, setCharAllowed] = useState(false);  // by default characters are not allowed
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);  // to keep the track if password is copied or not

  // password generator function  
  // in callback we have to pass the function name (on which we are working) and all the dependencies in an array format.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      string += "0123456789"    // adding numbers to the string
    }
    if(charAllowed){
      string += "!@#$%^&*-_"    // adding character to the string
    }
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char) // we have created above \\
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])
  
  
  // reference hook
  const passwordRef = useRef(null)
  // password copy function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    // passwordRef.current.selectionRange(0, 5) // we can set its selection range
    window.navigator.clipboard.writeText(password);
    // changing the text of copy button \\
    setCopied(true) // change text -> "copied!"
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]) // we have passed only one dependency because copy is dependent on only 1 dependency

  useEffect(() => {
    passwordGenerator() 
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-yellow-300 bg-gray-800'>
      <h1 className='text-white text-center mb-2 font-bold text-lg'>Password Generator</h1>
      {/* Password Container */}
      <div className='rounded-lg overflow-hidden mb-4 flex shadow justify-center'>
        <input type="text" value={password} placeholder='Password' className='bg-white outline-none w-3/4 py-1 px-3 text-orange-600 font-semibold rounded-l-xl' readOnly ref={passwordRef}/>
        <button className='ml-3 bg-blue-700 outline-none shrink-0 px-2 font-bold hover:bg-orange-600 transition duration-300 rounded-r-xl' onClick={copyPasswordToClipboard}>{copied? "Copied!" : "Copy"}</button>
      </div>
      <div className='flex gap-x-4 flex-wrap'>
        {/* Length range */}
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={40} value={length} onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        {/* Numbers checkbox */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numAllowed} onChange={() => {setNumAllowed((prev) => !prev)}}/>
          <label>Numbers Allowed</label>
        </div>
        {/* Character checkbox */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label>Characters Allowed</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default PasswordGenerator