import { createSlice, nanoid } from '@reduxjs/toolkit'  // nanoid is used for generating the unique ids..

const initialState = {
    todos: [{id: 1, text: "Running"}]
}

export const toDoSLice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addToDo: (state, action) => {       // state: gives access of state like updating toDos || action: gives the whatever data is passing..
            const toDo = {
                id: nanoid(),   // for generating unique ids..
                text: action.payload    // for getting text..
            }
            state.todos.push(toDo);     // adding the to in the state for updating the UI..
        },     
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((eachToDo) => eachToDo.id !== action.payload)    // it will filter and gives the matched toDos only..
        },
        updateToDo: (state, action) => {
            const id = action.payload;
            const text = action.payload;
            const toDo = state.todos.find((eachToDo) => eachToDo.id === id);    // finding the todo to update..
            if(toDo){
                toDo.text = text;   // updating the text of founded toDo..
            }
        }
    }
})

export const {addToDo, removeToDo, updateToDo} = toDoSLice.actions  // exporting each reducer will help in our component..

export default toDoSLice.reducer    // for getting aware our store..