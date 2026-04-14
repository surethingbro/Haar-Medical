import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'


/*entrar primero a la carpeta de haar medical para posteriormente
 hacer el npm run dev, (cd HAAR_MEDICAL*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
