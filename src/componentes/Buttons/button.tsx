import styles from './button.module.css'
import AddIcon from '../../assets/add.svg?react'

type Props = {
    onClick: () => void
}

export const Button = ({ onClick }: Props) => {

    return (
        <div className={styles.container}>
            <button
            onClick={onClick}>
                Create Task <AddIcon />
            </button>
        </div>
    )
}