import React from 'react'
import { NavLink } from 'react-router-dom'
import iconoPokemon from './imgs/iconoPokemon.jpg'

export const Navdar = () => {

  const setActiveClass = ({ isActive }) => (isActive ? "seleccionado" : "noSeleccionado");

  return (
  <div className='Navdar'>
    <div className='startNav'>
      <img className='imgIcon' src={iconoPokemon} alt="icono de ubicacion pokemon" />
    </div>
    <div className='endNav'>
    <NavLink className={ setActiveClass } to="/">
      Home
    </NavLink>
    <NavLink className={ setActiveClass } to="/pokemones">
      Pokemones
    </NavLink>
    </div>

  </div>

)
}