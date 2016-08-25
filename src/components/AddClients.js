import React , { Component } from 'react'
import ClientActions from '../actions/ClientActions'
import AddedClient from './AddedClient'

export default class AddClients extends Component{
  constructor(){
    super();
    this.state={
      name : '',
      email: ''
    }
    this.addClient = this.addClient.bind(this);
  }
  addClient(e){
    e.preventDefault();
    ClientActions.addClient(this.state);
    this.setState({ name: '',email:''});
    // let {name , email} = this.state;
    //console.log("Adding Client:",this.state);
  }
  render(){
    let { name , email } = this.state;
    return (
      <div>
        <form onSubmit={this.addClient}>
          <input type="text" value={name} onChange={e=>this.setState({name : e.target.value})} placeholder="Name"/><br/>
          <input type="text" value={email} onChange={e=>this.setState({email : e.target.value})} placeholder="Email"/><br/>
          <button type="submit">Add Client</button>
        </form>
        <AddedClient/>
      </div>
    )
  }
}
