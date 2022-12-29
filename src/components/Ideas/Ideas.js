import React from 'react'
import './Ideas.css'
import Cards from '../Cards/Cards'

const Ideas = ({ ideas, deleteIdea }) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Cards 
      title={ idea.title }
      description={ idea.description }
      id={ idea.id }
      key={ idea.id }
      deleteIdea={ deleteIdea }
      />
    )
  })

  return (
    <div className="ideas-container">
      { ideaCards }
    </div>
  )
}

export default Ideas