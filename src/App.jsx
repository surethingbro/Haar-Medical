import { forwardRef } from "react"
import "./App.css" 
import { Header } from "./components/Header"
import { Inicio } from "./components/Inicio"
import { Nosotros } from "./components/Nosotros"
import { Servicios } from "./components/Servicios"
import { Test } from "./components/Test"
  
function App() {
  return (
  <>
    <Header/>
    <Inicio/>
    <Nosotros/>
    <Servicios/>
  </>)
}

export default App