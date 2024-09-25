import { Todo } from "./todo"

export type TodoState = Todo[]

type TodoOptionalProps = {
    [key in keyof Todo]?: Todo[key]
}

//actions
type AddTodo = {
    type: 'ADD'
    payload: Todo | Todo[]
}

type ChangeTodo = {
    type: 'CHANGE'
    payload: TodoOptionalProps & {index: number}
}

type DeleteTodo = {
    type: 'DELETE'
    payload: {index: number}
}

export type TodoAction = AddTodo | ChangeTodo | DeleteTodo