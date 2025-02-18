import { ADD_TODO, DELETE_TODO } from "./action"

const initialState = {
    todo: []
}
const reducer = (state = initialState, action) => {

    if (action.type == ADD_TODO) {
        return {
            ...state,
            todo: [...state.todo, action.payload]
        }
    } else if (action.type == DELETE_TODO) {
        return {
            ...state,
            todo: state.todo.filter((e,index) => index !== action.payload)
        }
    }


    else {
        return state
    }

}
export default reducer