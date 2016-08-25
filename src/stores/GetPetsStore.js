import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _pets = [],_apets=[],_spets=[];

class GetPetsStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{
      switch (action.type) {
        case 'GOT_ALL_PETS'     : _pets = action.pets;
                                  this.emit('CHANGE');
                                  break;
        case 'ALL_ADOPTED_PETS' : _apets = action.pets;
                                  this.emit('CHANGE');
                                  break;

        case 'SORTED_PETS'      : _spets = action.pets;
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
  getAllPets(){
    return _pets;
  }
  getAdoptedPets(){
    return _apets;
  }
  getPetsByType(){
    return _spets;
  }
}

export default new GetPetsStore()
