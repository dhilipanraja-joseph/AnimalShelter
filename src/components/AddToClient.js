import React , { Component } from 'react'
import ClientStore from '../stores/ClientStore'
import PetActions from '../actions/PetActions'
import NavLink from './NavLink'

export default class AddToClient extends Component{
  constructor(){
    super();
    this.state={
      allClients : ClientStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }
  selectOwner(pet,client){
    //console.log(pet,client);
    PetActions.addOwner(pet,client);
  }
  componentDidMount(){
    ClientStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ClientStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ allClients : ClientStore.getAll() });
  }
  render(){
    //console.log(this.props.location.query.petId);
    let petId = this.props.location.query.petId;
    let clientList = this.state.allClients.map(client=>{
      return (
        <tr>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td><NavLink onClick={this.selectOwner.bind(null,petId,client._id)} to="/adopted"><button>Select</button></NavLink></td>
        </tr>
      )
    });
    //let { name , email , _id } = this.state.
    return (
      <div>
        <div><h3>Select Client</h3></div>
        <table className="table">
          <tbody>
            {clientList}
          </tbody>
        </table>
      </div>
    )
  }
}
