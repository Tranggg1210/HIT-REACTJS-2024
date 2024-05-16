import { SET_TODO_INPUT } from "../constants/storeConstants";

const initState = {
    todoInput:'',
    todos: []
}

const reducer = (state, action) => {
    switch(action.type)
    {
        case SET_TODO_INPUT: 
            return {
                ...state,
                todoInput: action.payload
            }
        default: {
            throw new Error('Error')
        }
    }
}

export {initState};
export default reducer;
