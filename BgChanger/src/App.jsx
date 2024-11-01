import React from 'react'
import { useState } from 'react'
import './index.css'
function BgChanger() {
  const [color, setColor] = useState("lavender");
  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='flex justify-center items-center h-screen'>
      <h1 className='border-red-600 border-2 p-4 rounded-2xl font-bold'>Color: {color}</h1>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white border-2 border-black px-2 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("pink")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("yellow")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("lime")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "lime"}}>Lime</button>
          <button onClick={() => setColor("brown")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "brown"}}>Brown</button>
          <button onClick={() => setColor("Orange")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("Olive")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("Purple")} className='border-2 border-black p-2 rounded-3xl w-20 font-bold' style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger