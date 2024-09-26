import { useContext, useState } from "react"
import { TodoContext } from "../../contexts/todoContext"
import styles from './header.module.css'
import { Input } from "../input/Input"
import { Button } from "../buttons/button"

export const Header = () => {
    const [inputValue, setInputValue] = useState('')

    const { dispatch } = useContext(TodoContext)

    const handleInput = () => {
        if (!inputValue) {
            alert('Type a new task')
            return;
        }
        dispatch({ type: 'ADD', payload: { title: inputValue, isDone: false } })
        setInputValue('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.brandContainer}>
            <img src="/wdev3.svg" alt="Wendler DEV ToDo List"></img>
            </div>
            <div className={styles.newTaskContainer}>
                <div className={styles.newTaskInput}>
                    <Input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                </div>
                <Button
                    onClick={handleInput} />
            </div>
        </div >
    )
}