const mongoose = require('mongoose')
const {Schema, model} = mongoose

const ChirpSchema = new Schema({
  content: String,
  image: String,
}, {
  timestamps: true
});

const ChirpModel = model('Chirp', ChirpSchema);

module.exports = ChirpModel;