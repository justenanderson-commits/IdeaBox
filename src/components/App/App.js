import React, { Component } from 'react'
import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [

      ],
      error: ''
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea]})
  }

  deleteIdea = (id) => {
    console.log("Card id: ", id)
    const filterIdeas = this.state.ideas.filter(idea => idea.id != id)
    this.setState({ ideas: filterIdeas })
  }

  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/ideas')
      .then(response => {
        if(!response.ok) {
          throw new Error("That's an error")
        }
        return response.json()
      })
      .then(data => {
        this.setState({ ideas: data })
      })
      .catch(err => { 
        // console.log("Error message: ", err.message)
        this.setState({ error: err.message})
        console.log("Error state: ", this.state.error)
      })
    }

  render() {
    return (
      <main className="app">
        <h1> IdeaBox</h1 >
        {!this.state.ideas.length && <h2>Add some new ideas!</h2>}
        <Form addIdea={ this.addIdea } />
        <Ideas ideas={ this.state.ideas } deleteIdea={ this.deleteIdea } />
      </main>
    )
  }
}

export default App;
