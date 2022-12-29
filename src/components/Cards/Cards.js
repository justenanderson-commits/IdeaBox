import React from 'react'
import Ideas from '../Ideas/Ideas'
import './Cards.css'

const Cards = ({ title, description, id, deleteIdea }) => {
  return ( 
    <div className="cards" id={ id }>
      <h3>{ title }</h3>
      <p>{ description }</p> 
      <button onClick={ () => deleteIdea(id) }>🗑</button>
    </div>
   )
}
 
export default Cards