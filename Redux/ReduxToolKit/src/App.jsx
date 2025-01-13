import React from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'
const App = () => {
  return (
    <>
      <h1>Add To-Do</h1>
      <AddToDo />
      <ToDo />
    </>
  )
}

export default App