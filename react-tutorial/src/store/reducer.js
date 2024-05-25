import { INCREMENT } from "./types"

const initState = {
    count: 0,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
    
        default:
            return state
    }
}
