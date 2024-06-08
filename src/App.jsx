import './App.css'
import { Navdar } from './components/Navdar'
import { Route , Routes } from 'react-router'
import { Home } from './views/Home'
import { Pokemones } from './views/Pokemones'
import { PokemonSeleccionado } from './views/PokemonSeleccionado'

function App() {


  return (
    <>
      <Navdar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemones' element={<Pokemones />}/>
        <Route path='/pokemones/:id' element={<PokemonSeleccionado />}/>
      </Routes>
    </>
  )
}

export default App
