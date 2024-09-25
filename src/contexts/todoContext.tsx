import { createContext, ReactNode, useReducer } from "react";
import { TodoAction, TodoState } from "../@types/TodoReducer";
import { initialState, TodoReducer } from "./reducers/todoReducer";

type Props = {
    children?: ReactNode
}

type ContextType = {
    state: TodoState,
    dispatch: React.Dispatch<TodoAction>
}

export const TodoContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

export const TodoContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}