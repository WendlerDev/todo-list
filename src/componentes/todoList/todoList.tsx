import { useContext } from 'react'
import styles from './todoList.module.css'
import { TodoContext } from '../../contexts/todoContext'
import EmptyIcon from '../../assets/clipboard.svg?react'
import { TodoItem } from '../todoItem/todoItem'

export const TodoList = () => {
    const { state: todos } = useContext(TodoContext)

    return (
        <div className={styles.container}>
            {todos.length > 0 &&
                <div className={styles.infoTaskContainer}>
                    <span className={styles.infoDoneTask}>Tasks Done</span>
                    <div className={styles.infoCountDoneTasks}>
                        {todos.filter(item => item.isDone).length} of {todos.length}
                    </div>
                </div>
            }
            {todos.length < 1 &&
                <div className={styles.emptyContentContainer}>
                    <EmptyIcon />
                    <p className={styles.emptyLabel}>
                        <strong>You don't have any added task</strong>
                        <br />
                        Create tasks and organize your ToDo`s
                    </p>
                </div>
            }
            <div className={styles.taskContainer}>
                {todos.map((data, key)=> (
                    <TodoItem 
                    key={key}
                    data={data}
                    dataIndex={key}/>
                ))  }
            </div>
        </div>
    )
}