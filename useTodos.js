import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";



    const init = () => {
        // Traer los datos del local storage  
        return JSON.parse(localStorage.getItem('todos')) ||  [];
    }




export const useTodos = (initialState = [] ) => {

    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

             

        useEffect(() => {
        
            localStorage.setItem('todos', JSON.stringify(todos));
        
        }, [todos])
    

        const handleNewTodo = (todo) =>{
            // Estamos creando el objeto 
            const action ={
                type: '[TODO] Add Todo',
                payload: todo
            }
            // Asi lo Mandamos al useReducer. Mediante el Dispatch (TodoReducer)
            dispatch( action );
        
        }
    

        const handleDeleteTodo = (id) =>{
            
                dispatch({
                    type: '[TODO] Delete Todo',
                    payload: id
                })
            }


        const handleToggleTodo = (id) =>{
            
                dispatch({
                    type: '[TODO] Toggle Todo',
                    payload: id
                })
            }


       


  

    return {
        ...todos,
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount:todos.length,
        pendingTodosCount: todos.filter(todo =>!todo.done).length,
    }
    
  
}
