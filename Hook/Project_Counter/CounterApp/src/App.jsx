import React from 'react'
import { useState } from 'react'
function App() {
  let[counter, setCounter] = useState(0);  // counter -> variable name, setCounter -> function that will control, useState() -> any default value or any empty string.

  const userName = 'Aman Kumar'


  // to use this counter in any other place use the variable 'counter'..

  // increasing value..
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }
  // decreasing value..
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Hello {userName}, welcome to the CounterApp Project!!</h1>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}
export default App
