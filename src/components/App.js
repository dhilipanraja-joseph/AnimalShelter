import React, { Component } from 'react';
import NavLink from './NavLink'
import PetActions from '../actions/PetActions'
import ClientActions from '../actions/ClientActions'
import NavBar from './NavBar'



export default class App extends Component {

  render() {
    return (
      <div>
        {/* <h1>Animal Shelter</h1> */}
        {/* <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
          </div>
        </nav>
        <NavLink to="/"><h3>Animal Shelter</h3></NavLink>
        <NavLink to="/animalform">| AddPets |</NavLink>
        <NavLink onClick={PetActions.getAll()} to="/showPets">| ShowPets |</NavLink>
        <NavLink onClick={PetActions.getAdopted()} to="/adopted">| AdoptedPets |</NavLink>
        <NavLink to="/clientform">| AddClients |</NavLink>
        <NavLink onClick={ClientActions.getAllClients()} to="/showClients">| ShowClients |</NavLink>
        <hr/> */}
        <NavBar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
