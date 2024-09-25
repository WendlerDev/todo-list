import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.module.css'
import { TodoContextProvider } from './contexts/todoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>,
)
