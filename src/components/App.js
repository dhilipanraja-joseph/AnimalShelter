import React, { Component } from 'react';
import NavLink from './NavLink'


export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Animal Shelter</h1>
        <hr/>
        <NavLink to="/">| Home |</NavLink>
        <NavLink to="/animalform">| AddPets |</NavLink>
        <NavLink to="/showPets">| ShowPets |</NavLink>
        <NavLink to="/clientform">| AddClients |</NavLink>
        <NavLink to="/showClients">| ShowClients |</NavLink>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}
