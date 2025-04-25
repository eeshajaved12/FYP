import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NAVBAR from './component/layout/NAVBAR.jsx'
import FOOTER from './component/layout/FOOTER.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  
    <NAVBAR/>
    <App />
    <FOOTER/>

  </StrictMode>,
)
