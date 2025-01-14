import React from 'react'
import './App.css'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h2>Today we will learn ENV & AppWrite</h2>
    </>
  )
}

export default App