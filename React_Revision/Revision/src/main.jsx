import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import Nav from './components/Nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Nav /> */}
    <App />
    {/* <Form /> */}
  </StrictMode>,
)
