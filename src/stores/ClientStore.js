import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allClients=[];

class ClientStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action=>{
      switch(action.type){
        case 'ALL_CLIENTS' :  _allClients=action.clients;
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
  getAll(){
    return _allClients;
  }

}

export default new ClientStore()
