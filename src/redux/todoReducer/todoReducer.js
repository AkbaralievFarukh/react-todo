import { ADD_TODO, GET_TODOS, DELETE_TODO } from "../type"

const initalState = {
    todos: []
}

export const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id!== action.payload)}
        default:
            return state
    }
}