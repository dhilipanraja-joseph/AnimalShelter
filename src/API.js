import AppDispatcher from './AppDispatcher'
import axios from 'axios'

const API = {
  addPet(pet){
    axios.post('/api/animals',pet)
          .then(res=>res.data)
          .then(pet=>{
            AppDispatcher.dispatch({
              type : 'ADDED_PET',
              pet
            })
          })
          .catch(err=>console.log(err))
  },
  deletePet(id){
    axios.delete(`/api/animals/${id}`)
          .catch(err=>console.log(err))
  },
  getAll(){
    axios.get('/api/animals')
          .then(res=>res.data)
          .then(pets=>{
            //console.log(pets);
            AppDispatcher.dispatch({
              type : 'GOT_ALL_PETS',
              pets
            })
          })
          .catch(err=>console.log(err))
  },
  getAdopted(){
    axios.get('/api/animals/populate')
          .then(res=>res.data)
          .then(pets=>{
            //console.log(pets);
            AppDispatcher.dispatch({
              type : 'ALL_ADOPTED_PETS',
              pets
            })
          })
          .catch(err=>console.log(err))
  },
  addOwner(pet,client){
    axios.put(`/api/animals/${pet}/addOwner/${client}`)
          .catch(err=>console.log(err))  
  },
  deleteClient(id){
    axios.delete(`/api/people/${id}`)
          .catch(err=>console.log(err))
  },
  addClient(person){
    axios.post('/api/people',person)
          .then(res=>res.data)
          .then(client=>{
            AppDispatcher.dispatch({
              type : 'ADDED_CLIENT',
              client
            })
          })
          .catch(err=>console.log(err))
  },
  getAllClients(){
    axios.get('/api/people')
          .then(res=>res.data)
          .then(clients=>{
            AppDispatcher.dispatch({
              type : 'ALL_CLIENTS',
              clients
            })
          })
          .catch(err=>console.log(err))
  }
}
export default API
