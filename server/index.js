const express = require('express')
const cors = require('cors')
const app = express()
const User = require('./models/User')
const mongoose = require('mongoose')

require('dotenv').config()
const mongoURI = process.env.MONGO_CRITTER_URI;

app.use(cors())
app.use(express.json())

mongoose.connect(mongoURI);

app.post('/register', async (req,res) => {
  const {username, password} = req.body;
  try {
    const userDoc = await User.create({username, password})
    res.json(userDoc)
  } catch(e) {
    res.status(400).json(e.message)
  }
})

app.listen(4000, () => {
  console.log('Server is running on port 4000...')
});