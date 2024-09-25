import { ChangeEvent } from 'react'
import styles from './inputModule.css'

type Props = {
    value: string,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, onChange}: Props) => {
    return (
        <div className={styles.container}>
            <input
            placeholder='Insert a new Task'
            value={value}
            onChange={onChange}
            >
            </input>
        </div>
    )
}