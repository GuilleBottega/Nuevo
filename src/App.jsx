
import { useEffect, useState } from 'react'
import './App.css'
import Bienvenida from './Components/Bienvenida'
import { ComponenteContenedor } from './Components/ComponenteContenedor'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import CambioNombre from './Components/CambioNombre/CambioNombre'

function App() {
  const [modoOscuro, setModoOscuro] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    document.documentElement.dataset.theme = modoOscuro ? 'dark' : 'light'
  }, [modoOscuro])

  return (
    <>
      <Header
        modoOscuro={modoOscuro}
        onCambiarModo={() => setModoOscuro((modoActual) => !modoActual)}
      />
      <Bienvenida />
      <ComponenteContenedor />
      <CambioNombre />
      <Footer />
    </>
  )
}

export default App
