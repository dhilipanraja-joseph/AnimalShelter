import React , {Component} from 'react'
import GetPetsStore from '../stores/GetPetsStore'
import PetActions from '../actions/PetActions'

export default class AdoptedPets extends Component{
  constructor(){
    PetActions.getAdopted();
    super();
    this.refreshPetlist();
    this.state={
      pets : GetPetsStore.getAdoptedPets()
    }
    this._onChange = this._onChange.bind(this);
  }
  refreshPetlist(){
    PetActions.getAdopted();
  }
  unadopt(id){
    PetActions.unAdopt(id);
    PetActions.getAdopted();
    //PetActions.getAdopted();
    //this.refreshPetlist();

  }
  deletePet(id){
    PetActions.deletePet(id);
    PetActions.getAdopted();

  }
  componentDidMount(){
    GetPetsStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    GetPetsStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ pets : GetPetsStore.getAdoptedPets() });
  }
  render(){
    let petRow = this.state.pets.map(pet=>{
      return (
        <tr key={pet._id}>
          <td><img src={pet.img} width="150px" alt="NO IMAGE"/></td>
          <td>{pet.name}</td>
          <td>{pet.type}</td>
          <td>{pet.owner.name}  ( {pet.owner.email} )</td>
          <td><button onClick={this.deletePet.bind(null,pet._id)}>Delete</button>
              <button onClick={this.unadopt.bind(null,pet._id)}>UnAdopt</button>
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
              <th>Owner</th>
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
