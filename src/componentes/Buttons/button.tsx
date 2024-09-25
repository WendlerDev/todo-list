import styles from './ButtonModule.css'
import AddIcon from '../../assets/add.svg?react'

type Props = {
    onClick: () => void
}

export const Button = ({ onClick }: Props) => {

    return (
        <div className={styles.container}>
            <button>
                Create Task <AddIcon />
            </button>
        </div>
    )
}