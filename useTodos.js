import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState =[];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init );
    //const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos]);    

    const handleNewTodo = ( todo ) => {
        console.log("Agregar el todo:", { ...todo });
        // acción para enviar al reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //Enviando al reducer
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
