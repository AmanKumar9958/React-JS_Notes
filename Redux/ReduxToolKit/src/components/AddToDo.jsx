import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addToDo} from '../features/ToDo/toDoSlice'

const AddToDo = () => {

    const [input, setInput] = useState('')
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() === ''){
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
            return;
        }
        dispatch(addToDo(input));
        setInput("");
    }

    return (
        <>
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                Add Todo
                </button>
            </form>
            {showMessage && <h3 className='text-gray-100 border-2 border-red-500 w-3/12 m-auto mt-5 transition-all rounded-2xl pt-3 pb-3 bg-red-500 font-bold text-2xl'>Please add any To-Do</h3>}
        </>
        )
    }

export default AddToDo