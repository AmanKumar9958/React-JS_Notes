import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card.jsx'
function App(){
  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind CSS Test</h1> */}
      <Card username="Aman Kumar" header="Elder Brother"/>
      <Card username="Gopal Kumar" header="Younger Brother"/>
      <Card username="Gopal Kumar"/>
    </>
  )
}

export default App
