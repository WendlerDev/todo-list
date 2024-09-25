import { TodoAction, TodoState } from "../../@types/TodoReducer";

export const initialState: TodoState = []

export const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch(action.type) {
        case "ADD":
            { const {payload} = action

            return !Array.isArray(payload) ? [...state, payload]  : payload }

        case "CHANGE":
            { const changeTodo = state.map ((item, key) => {
                if (key == action.payload.index) {
                    item.title = action.payload.title ?? item.title
                    item.isDone = action.payload.isDone ?? item.isDone
                }
                return item
            })
            return changeTodo }

        case "DELETE": {
            const deleteTodo = state.filter((_item, key) => key != action.payload.index)

            return deleteTodo
        }

        default:
            return state
    }
}