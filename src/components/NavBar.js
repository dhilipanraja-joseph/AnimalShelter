import React, { Component } from 'react';
import NavLink from './NavLink'
import PetActions from '../actions/PetActions'
import ClientActions from '../actions/ClientActions'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to='/'>Animal Shelter</NavLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/animalform">AddPets</NavLink></li>
              <li><NavLink onClick={PetActions.getAll()} to="/showPets">ShowPets</NavLink></li>
              <li><NavLink onClick={PetActions.getAdopted()} to="/adopted">AdoptedPets</NavLink></li>
              <li><NavLink to="/clientform">AddClients</NavLink></li>
              <li><NavLink onClick={ClientActions.getAllClients()} to="/showClients">ShowClients</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
