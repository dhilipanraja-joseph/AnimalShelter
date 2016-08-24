const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name : {type: String, required:true},
  type : {type: String, required:true},
  age : {type: Number,required : true ,min:0},
  owner : { type: mongoose.Schema.Types.ObjectId, ref : 'Person'}
});

const Animal = mongoose.model('Animal',animalSchema);

module.exports = Animal;
