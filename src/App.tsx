import { useSaveTodo } from "./hooks/useSaveTodo";
import styles from './app.module.css'
import { Header } from "./componentes/header/header";
import { TodoList } from "./componentes/todoList/todoList";


const App = () => {
  // Monitoring all the changes in TODO and save in localStorage
  useSaveTodo()

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
