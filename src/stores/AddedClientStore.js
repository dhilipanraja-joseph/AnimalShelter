import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _addedClient={};

class AddedClientStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{
      switch (action.type){
        case 'ADDED_CLIENT' : _addedClient = action.client;
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

  getAddedClient(){
    return _addedClient;
  }
}

export default new AddedClientStore()
