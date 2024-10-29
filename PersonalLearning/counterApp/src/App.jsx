import React from 'react'
import { useState } from 'react'
import './index.css'
function CounterApp() {
  const[count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if(count > 0){
      setCount(count - 1);
    }
    else{
      alert("Can't go below 0!!")
    }
    
  }
  return (
    <div className="h-screen w-screen bg-green-400 flex items-center justify-center">
      {/* main */}
      <div className='flex items-center justify-center flex-col gap-2 bg-white border-4 border-black p-2 rounded-xl'>
        <h1 className='text-red-700 text-3xl font-bold'>Counter App</h1>
        <h2 className='text-blue-600 font-semibold text-2xl'>Count: {count}</h2>
        <div className='flex gap-7'>
          <button className='cursor-pointer border-2 border-slate-700 w-10 rounded-md bg-slate-500 text-white font-bold'  onClick={increaseCount}>++</button>
          <button className='cursor-pointer border-2 border-slate-700 w-10 rounded-md bg-slate-500 text-white font-bold'  onClick={decreaseCount}>--</button>
        </div>
      </div>
    </div>
  )
}

export default CounterApp
