import { ChangeEvent, useContext } from 'react'
import styles from './todoItem.module.css'
import { TodoContext } from '../../contexts/todoContext'
import TrashIcon from '../../assets/trash.svg?react'


export const TodoItem = ({ data, dataIndex }: Props) => {
    const { dispatch } = useContext(TodoContext)

    const handleIsDone = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'CHANGE', payload: { index: dataIndex, isDone: ev.target.checked } })
    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: { index: dataIndex } })
    }
    return (
        <div className={styles.container}>
            <div className={styles.isDoneContainer}>
                <input
                    type='checkbox'
                    className={styles.isDoneInput}
                    checked={data.isDone}
                    onChange={handleIsDone}></input>
            </div>
            <div className={`${styles.titleContainer} ${data.isDone ? styles.isDoneOnly: ''} `}>
                {data.title}
            </div>

            <div className={styles.deleteContainer}>
                <button
                onClick={handleDelete}
                className={styles.deleteBtn}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    )
}