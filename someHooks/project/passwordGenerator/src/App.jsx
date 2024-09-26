import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)    // useRef Hook
  const passwordGenerator = useCallback(() => {
    let password = ""
    let string = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      string += "0123456789"
    }
    if(charAllowed){
      string += "!@#$%^&*(){}[]~':"
    }
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * string.length + 1)
      password += string.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
    const copyBtn = document.getElementById('copyBtn')
      copyBtn.innerText = "Copied"
      setTimeout(() => {
        copyBtn.innerText = "Copy"
      }, 2000)
    
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-orange-400 bg-gray-700 py-2 px-2 mt-20'>
        <h1 className='text-white text-center mb-2 font-bold'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" placeholder='Password' readOnly className='w-full outline-none py-1 px-3' value={password} ref={passwordRef}/>
          <button className='bg-blue-600 font-bold px-2 outline-none text-white py-0.5 shrink-0 transition-all' onClick={copyPasswordToClipboard} id='copyBtn'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          {/* range */}
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          {/* number check box */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} className='cursor-pointer'/>
            <label>Numbers</label>
          </div>
          {/* character check box */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
              setCharAllowed((prev) => !prev)
            }} className='cursor-pointer'/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
