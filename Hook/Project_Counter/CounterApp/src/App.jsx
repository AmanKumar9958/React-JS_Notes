import { useState } from 'react'

function App() {
  const userName = 'Aman Kumar'
  let counter = 15

  const addValue = () => {
    counter += 1
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
