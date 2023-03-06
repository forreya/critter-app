const mongoose = require('mongoose')
const {Schema, model} = mongoose

const ChirpSchema = new Schema({
  content: String,
  image: String,
  poster: {type: Schema.Types.ObjectId, ref:'User'}
}, {
  timestamps: true
});

const ChirpModel = model('Chirp', ChirpSchema);

module.exports = ChirpModel;