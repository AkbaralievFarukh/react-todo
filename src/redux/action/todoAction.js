import axios from "axios"

export const getTodos = () => {
    return (dispatch) => {
        axios(`https://6564248aceac41c0761d7f0e.mockapi.io/todo`)
            .then(({data}) => {
                dispatch({type: 'GET_TODOS', payload: data})
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(`https://6564248aceac41c0761d7f0e.mockapi.io/todo`, todo)
           .then(({data}) => {
                dispatch({type: 'ADD_TODO', payload: data})
            })
    }
}

export const deleteTodo = (todo) => {
    return (dispatch) => {
        axios.delete(`https://6564248aceac41c0761d7f0e.mockapi.io/todo/${todo.id}`)
           .then(({data}) => {
                dispatch({type: 'DELETE_TODO', payload: data})
            })
    }
}