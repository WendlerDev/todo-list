import { useSaveTodo } from "./hooks/useSaveTodo";


const App = () => {
  // Monitoring all the changes in TODO and save in localStorage
  useSaveTodo()
  
  return (
    <div>

    </div>
  )
}

export default App
