import React,{ Component } from 'react'
import GetPetsStore from '../stores/GetPetsStore'
import PetActions from '../actions/PetActions'

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
  getAllPet(e){
    e.preventDefault();
    PetActions.getAll();
  }
  render (){
    let petRow = this.state.pets.map(pet=>{
      return (
        <tr key={pet._id}>
          <td>{pet.name}</td>
          <td>{pet.type}</td>
          <td>{pet.age}</td>
        </tr>
      )
    });
    return (
      <div>
      <button onClick={this.getAllPet}>ShowPets</button>
      <table className="table">
      <thead>
      <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Age</th>
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
