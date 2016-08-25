import React , { Component } from 'react'
import AddedClientStore from '../stores/AddedClientStore'

export default class AddedClient extends Component{
  constructor(){
    super();
    this.state={
      person : AddedClientStore.getAddedClient(),
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    AddedClientStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    AddedClientStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ person : AddedClientStore.getAddedClient()});
  }
  render(){
    let { name } = this.state.person;
    if (!name){
      return (
        <div>
        </div>
      )
    }else{

      return (
        <div>Client {name} Added to the database</div>
      )
    }
  }
}
