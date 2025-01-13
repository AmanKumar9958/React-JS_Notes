import React from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'
const App = () => {
  return (
    <>
      <h1 className='font-bold bg-gray-400 w-fit m-auto p-4 rounded-2xl text-xl'>Add To-Do</h1>
      <AddToDo />
      <ToDo />
    </>
  )
}

export default App