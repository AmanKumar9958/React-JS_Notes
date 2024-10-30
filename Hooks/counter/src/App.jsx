import React from 'react'
import { useState } from 'react'
function Counter() {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1)
  }
  const remove = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      alert("-ve Values are NOT allowed!!")
    }
  }
  return (
    <div>
      <h2>Counter App</h2>
      Counter: {counter}
      <br />
      <button onClick={add}>Add Value</button>
      <button onClick={remove}>Remove Value</button>
    </div>
  )
}

export default Counter