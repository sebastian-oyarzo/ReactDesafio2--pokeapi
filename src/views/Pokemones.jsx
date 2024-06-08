import axios from "axios"
import { useEffect , useState} from "react"
import { useNavigate } from "react-router"

export const Pokemones = () => {

// referente a los nombres que aparecen en el select :
  const [Nombres, setNombres] = useState([])

  const PokemonsName = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')

    const names = response.data.results.map((nombre) => {
      const arreglo = {
        nombre : nombre.name
      }
      return arreglo
    })
    setNombres(names)
  }

  useEffect(() => {
    PokemonsName()
  } , [])

// referente al click para mostrar el pokemon seleccionado:
    const navigate = useNavigate()
    const [SelectedPokemon, setSelectedPokemon] = useState('')

  const handleChange = (e) => {
    setSelectedPokemon(e.target.value)
  }

   const handleClick = () => {
    navigate('/pokemones/' + SelectedPokemon)
   }

  return (
    <div className="Main">
      <h1>Selecciona un Pokemon</h1>
      <select className="select" name="Pokemones" id="pokemonesId" onChange={handleChange}  >
      <option key='inicio' value="Seleccionar pokemon">Pokemones</option>
        {
          Nombres.length ? Nombres.map((pokemon , key) => (
              <option key={key} value={pokemon.nombre} >{pokemon.nombre}</option>
          ))
          :
              <option key='no hay' value="Seleccionar pokemon2">Pokemones</option>
        }
          </select>

      <button onClick={handleClick} >ver detalle</button>
    </div>
  )
}