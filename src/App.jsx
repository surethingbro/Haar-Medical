import { forwardRef } from "react"
import "./App.css" 
import { Header } from "./components/Header"
import { Inicio } from "./components/Inicio"
import { Nosotros } from "./components/Nosotros"
  
function App() {
  return (
  <>
    <Header/>
    <Inicio/>
  </>)
}

export default App


/*NOTA: PRIMERO ENTRAR A LA CARPETA DE HAAR_MEDICAL
CON cd HAAR_MEDICAL y luego el npm run dev :)*/