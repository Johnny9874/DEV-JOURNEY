import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Alex from './alex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Alex />
  </StrictMode>,
)
