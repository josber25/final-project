import logo from './logo.svg';
import './App.css';

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/${pokemonId}')
  .then(res -> res.json())
  .then(data => {
    setPokemon(data)
    setLoading(false)
    setError(false)
  })
  .catch(err => {
    setLoading(false)
    setError(true)
  })
}
)

import React, { Component, useEffect} from 'react';

class card extends Component {
  render() {
  <div className='title'>
    <h2>name</h2>
    <image></image>
  </div>
  <div className='description'>
    <p>type</p>
    <ul>
      <li>habilitie 1</li>
      <li>habilitie 2</li>
      <li>habilitie 3</li>
    </ul>
  </div>
  }
}
export default card;