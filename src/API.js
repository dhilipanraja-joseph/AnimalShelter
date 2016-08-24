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
  }
}
export default API
