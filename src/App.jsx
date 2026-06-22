import { forwardRef } from "react"
import "./App.css" 
import { Header } from "./components/Header"
import { Inicio } from "./components/Inicio"
import { Nosotros } from "./components/Nosotros"
import { Servicios } from "./components/Servicios"
import { AntesyDespues } from "./components/AntesyDespues"

function App() {
  return (
  <>
    <Header/>
    <Inicio/>
    <Nosotros/>
    <Servicios/>
    <AntesyDespues/>
  </>)
}

export default App