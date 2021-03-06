//import AppDispatcher from '../AppDispatcher'
import API from '../API'

const PetActions = {
  addPet : API.addPet,
  getAll : API.getAll,
  deletePet:API.deletePet,
  getAdopted:API.getAdopted,
  addOwner:API.addOwner,
  unAdopt:API.unAdopt,
  getPetType:API.getPetType
}

export default PetActions
