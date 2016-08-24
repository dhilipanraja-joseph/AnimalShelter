import React , { Component } from 'react'
import AddPetStore from '../stores/AddPetStore'

export default class AddedPet extends Component{
  constructor(){
    super();
    this.state={
      pet : AddPetStore.getAddedPet(),
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    AddPetStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    AddPetStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ pet : AddPetStore.getAddedPet()});
  }
  render(){
    let { name } = this.state.pet;
    if (!name){
      return (
        <div>
        </div>
      )
    }else{

      return (
        <div>{name} Added to the database</div>
      )
    }
  }
}
