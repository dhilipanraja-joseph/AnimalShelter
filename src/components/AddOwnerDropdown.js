import React ,{ Component } from 'react'
import ClientStore from '../stores/ClientStore'

export default class AddOwnerDropdown extends Component{
  constructor(){
    super();
    this.state={
      clients : ClientStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }
  addOwner(ids){
    let id=ids.split(':');
    console.log('client:',id[0]);
    console.log('pet:',id[1]);
  }
  componentDidMount(){
    ClientStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ClientStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ clients : ClientStore.getAll() });
  }
  render(){
    let pet = this.props;
    //console.log(_id);
    let clientList = this.state.clients.map((client,i,pet)=>{
      //console.log(pet[i]._id);
      let btnVal=client._id+":"+pet[i]._id;
      //console.log(client._id+":"+pet[i]._id);
      return (
        <li key={client._id} onClick={this.addOwner.bind(null,btnVal)}>
          <a><span>{client.name} - {client.email}</span></a>
        </li>
      )
    });
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Add To Owner |<span className="caret"></span>|
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          {clientList}
        </ul>
      </div>

    )
  }
}
