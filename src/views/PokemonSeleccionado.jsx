import { useParams } from "react-router"
import axios from "axios"
import { useState , useEffect } from "react"

export const PokemonSeleccionado = () => {

// referente a la llamada de la api para acceder a los datos del pokemon

const [Data, setData] = useState([])
const [UrlImagen, setUrlImagen] = useState('')
const [Tipe, setTipe] = useState('')

const PokemonData = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ id)
    setUrlImagen(response.data.sprites.other.dream_world.front_default)
    setTipe(response.data.types[0].type.name + ' ' + (response.data.types[1] == undefined ? '' : response.data.types[1].type.name)  )
    const dataFiltered = response.data.stats.map((poke) => {
      const arreglo = {
        statsName : poke.stat.name ,
        statsNumber : poke.base_stat
      }
      return arreglo
    })
    setData(dataFiltered)
  }

  useEffect(() => {
    PokemonData()
  } , [])

    const {id} = useParams()

  return (
    <div className="pokemonSeleccionado">

        <img className="imgPoke" src={UrlImagen} alt="imagen" />
        <div>
            <h3 className="title">{id} </h3>
            <div>
            {
                Data.length ?  Data.map((datos , key) => (
                    <p key={key} className="stats">{datos.statsName} : {datos.statsNumber} </p>

                ))

                :
                <p className="cargando">cargando...</p>
            }
            <p>tipo : {Tipe} </p>
            </div>
        </div>
    </div>
  )
}
