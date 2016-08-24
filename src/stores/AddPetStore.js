import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _addedPet = {};

class AddPetStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{
      switch (action.type){
        case 'ADDED_PET' :  _addedPet = action.pet;
                            this.emit('CHANGE');
                            break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getAddedPet(){
    return _addedPet;
  }
}

export default new AddPetStore()
