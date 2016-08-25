import React , { Component } from 'react'
import ClientStore from '../stores/ClientStore'
import ClientActions from '../actions/ClientActions'

export default class ShowClients extends Component{
  constructor(){
    super();
    this.state={
      allClients : ClientStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
    this.deleteClient=this.deleteClient.bind(this);
  }
  deleteClient(id){
    //console.log("delete client:",id);
    ClientActions.deleteClient(id);
    ClientActions.getAllClients();
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
    let clientRow = this.state.allClients.map(client=>{
      return (
        <tr key={client._id}>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td><button onClick={this.deleteClient.bind(null,client._id)}>Delete</button></td>
        </tr>
      )
    });
    return (
      <div>
      {/* <button onClick={this.getAllPet}>ShowPets</button> */}
      <table className="table">
      <thead>
      <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Edit</th>
      </tr>
      </thead>
      <tbody>
      {clientRow}
      </tbody>
      </table>
      </div>
    )
  }
}
