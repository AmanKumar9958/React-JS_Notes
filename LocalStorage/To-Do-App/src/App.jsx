import React, { useEffect, useState } from 'react';
import { ToDoProvider } from './context';
import './App.css';
import TodoForm from './component/ToDoForm';
import TodoItem from './component/ToDoItem';

function App() {
  const [todo, setTodo] = useState([]); // State to store the todos

  // add a new todo..
  const addToDo = (title) => {
    setTodo((oldToDo) => [{ id: Math.floor(Math.random() * 1000), title }, ...oldToDo]); // Add the new todo to the list
  };

  // delete a todo..
  const deleteToDo = (id) => {
    setTodo((oldToDo) => oldToDo.filter((eachOldToDo) => eachOldToDo.id !== id)); // Filter out the todo to be deleted
  };

  // edit a todo..
  const editToDo = (id, title) => {
    setTodo((oldToDo) =>
      oldToDo.map((eachOldToDo) => {
        if (eachOldToDo.id === id) {
          return { ...eachOldToDo, title }; // Update the title of the todo
        } else {
          return eachOldToDo; // Return the todo as it is
        }
      })
    );
  };

  // toggle the complete status of a todo..
  const toggleComplete = (id) => {
    setTodo((oldToDo) =>
      oldToDo.map((eachOldToDo) => {
        if (eachOldToDo.id === id) {
          return { ...eachOldToDo, completed: !eachOldToDo.completed }; // Toggle the complete status of the todo
        } else {
          return eachOldToDo; // Return the todo as it is
        }
      })
    );
  };


  // saving to-dos in the local storage..
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem('toDos')); // Get the todos from the local storage

    if(storedToDos && storedToDos.length > 0){
      setTodo(storedToDos); // Set the todos to the state if there are any todos in the local storage
    }
  })

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(todo))
  }, [])


  return (
    <ToDoProvider value={{ todo, addToDo, editToDo, deleteToDo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* To do form */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todo.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} key={todo.id}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;