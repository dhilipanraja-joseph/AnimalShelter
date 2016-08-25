import React, { Component } from 'react';
import NavLink from './NavLink'
import PetActions from '../actions/PetActions'
import ClientActions from '../actions/ClientActions'




export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Animal Shelter</h1>
        <hr/>
        <NavLink to="/">| Home |</NavLink>
        <NavLink to="/animalform">| AddPets |</NavLink>
        <NavLink onClick={PetActions.getAll()} to="/showPets">| ShowPets |</NavLink>
        <NavLink to="/clientform">| AddClients |</NavLink>
        <NavLink onClick={ClientActions.getAllClients()} to="/showClients">| ShowClients |</NavLink>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}
