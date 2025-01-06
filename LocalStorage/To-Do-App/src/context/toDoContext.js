import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [
        {
            id: 1,
            title: "Learn React",
            completed: false,
        }
    ],
    addToDo: () => {title},
    editToDo: () => {id, title},
    deleteToDo: () => {id},
    toggleComplete: () => {id},
});

export const useTodo = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;