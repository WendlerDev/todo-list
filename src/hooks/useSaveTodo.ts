import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../contexts/todoContext"
import { AES, enc } from "crypto-js"
import { Todo } from "../@types/todo"

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string
const LOCAL_STORAGE_KEY = 'TODO_DATA'

export const useSaveTodo = () => {
    const [savedInitialData, setSavedInitialData] = useState(false)

    const { state, dispatch } = useContext(TodoContext)

    const handleChangeTodo = () => {
        if (!savedInitialData) return;

        const value = AES.encrypt(JSON.stringify(state), SECRET_KEY)

        localStorage.setItem(LOCAL_STORAGE_KEY, value.toString())
    }

    // Getting todo initial
    useEffect(() => {
        try {
            const todoData = localStorage.getItem(LOCAL_STORAGE_KEY)

            if (todoData) {
                const bytes = AES.decrypt(todoData, SECRET_KEY)
                const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8))

                dispatch({type: 'ADD', payload: decryptedData})
            }
        } catch {
            alert('Unable to recover the saved tasks')
            
        }
        setSavedInitialData(true)

    }, [])

    // Monitoring all the changes in TODO
    useEffect(() => { handleChangeTodo() }, [state])
}