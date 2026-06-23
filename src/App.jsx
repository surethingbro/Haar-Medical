import { forwardRef } from "react"
import "./App.css" 
import { Header } from "./components/Header"
import { Inicio } from "./components/Inicio"
import { Nosotros } from "./components/Nosotros"
import { Servicios } from "./components/Servicios"
import { AntesyDespues } from "./components/AntesyDespues"
import { Footer } from "./components/Footer"

function App() {
  return (
  <>
    <Header/>
    <Inicio/>
    <Nosotros/>
    <Servicios/>
    <AntesyDespues/>
    <Footer/>
  </>)
}

export default App