import './App.css'
import { Navdar } from './components/Navdar'
import { Route , Routes } from 'react-router'
import { Home } from './views/Home'
import { Pokemones } from './views/Pokemones'

function App() {


  return (
    <>
      <Navdar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemones' element={<Pokemones />}/>
      </Routes>
    </>
  )
}

export default App
