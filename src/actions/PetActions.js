//import AppDispatcher from '../AppDispatcher'
import API from '../API'

const PetActions = {
  addPet : API.addPet,
  getAll : API.getAll,
  deletePet:API.deletePet
}

export default PetActions
