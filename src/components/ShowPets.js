import React,{ Component } from 'react'
import GetPetsStore from '../stores/GetPetsStore'
import PetActions from '../actions/PetActions'
import AddToClient from './AddToClient'
import NavLink from './NavLink'


export default class ShowPets extends Component{
  constructor(){
    super();
    this.state = {
      pets : GetPetsStore.getAllPets(),
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    GetPetsStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    GetPetsStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ pets : GetPetsStore.getAllPets() });
  }
  addto(id){
    console.log(id);
  }
  sorttype(type){
    console.log(type);
  }
  deletePet(id){
    //e.preventDefault();
    //console.log(id);
    PetActions.deletePet(id);
    PetActions.getAll();
  }
  render (){
    let petRow = this.state.pets.map(pet=>{
      return (
        <tr key={pet._id}>
          <td><img src={pet.img} width="150px" alt="NO IMAGE"/></td>
          <td>{pet.name}</td>
          <td><NavLink onClick={this.sorttype.bind(null,pet.type)} to="/type">{pet.type}</NavLink></td>
          <td>{pet.age}</td>
          <td><button onClick={this.deletePet.bind(null,pet._id)}>Delete</button>
              <NavLink to={{pathname : "/addtoClient", query: {petId : pet._id} }}><button>AddToClient</button></NavLink>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Age</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {petRow}
          </tbody>
        </table>

      </div>
    )
  }
}
