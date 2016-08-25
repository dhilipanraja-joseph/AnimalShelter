import React ,{Component} from 'react'
import PetActions from '../actions/PetActions'
import AddedPet from './AddedPet'

export default class AnimalForm extends Component {
    constructor(){
      super();
      this.state={
        name : '',
        type : '',
        age : '',
        img : ''
      }
      this.addPets = this.addPets.bind(this);
    }
    resetForm(){
      this.setState({ name : '',type:'',age:'',img:''});
    }
    addPets(e){
        e.preventDefault();
        PetActions.addPet(this.state);
        this.resetForm();
        //console.log('adding pet:',name,type,age);
    }
    render(){
      let { name , type , age ,img} = this.state;
      return (
        <div>
          <form onSubmit={this.addPets}>
            <input type="text" value={name} onChange={e=>this.setState({name : e.target.value })} placeholder="Name"/><br/>
            <input type="text" value={type} onChange={e=>this.setState({type : e.target.value })} placeholder="Type"/><br/>
            <input type="number" value={age} onChange={e=>this.setState({age : e.target.value })} placeholder="Age"/><br/>
            <input type="text" value={img} onChange={e=>this.setState({img : e.target.value })} placeholder="ImgURL"/><br/>
            <button type="submit">Add Pet</button>
          </form>
          <AddedPet/>
        </div>
      )
    }
}
