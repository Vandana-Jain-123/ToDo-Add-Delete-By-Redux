import { ADD_TODO, DELETE_TODO } from "./action.js";

export const addTodo = (payload) => {
    return {
        payload: payload,
        type: ADD_TODO
    }
}
export const deleteTodo = (index) => {
    return {
        payload: index,
        type: DELETE_TODO
    }
}
