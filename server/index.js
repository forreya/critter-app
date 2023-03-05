const express = require('express')
const cors = require('cors')
const app = express()
const User = require('./models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

require('dotenv').config()
const mongoURI = process.env.MONGO_CRITTER_URI;
const secretKey = process.env.SECRET_KEY;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())

mongoose.connect(mongoURI);

const salt = bcrypt.genSaltSync(4);

app.post('/register', async (req,res) => {
  const {username, password} = req.body;
  try {
    const userDoc = await User.create({
      username, 
      password: bcrypt.hashSync(password, salt)
    })
    res.json(userDoc)
  } catch(e) {
    res.status(400).json(e.message)
  }
})

app.post('/login', async (req,res) => {
  const {username, password} = req.body;
  const userDoc = await User.findOne({username});
  const doesPassMatch = bcrypt.compareSync(password, userDoc.password)
  if (doesPassMatch) {
    jwt.sign({username, id:userDoc._id}, secretKey, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json('Token created.')
    })
  } else {
    res.status(400).json('Incorrect Credentials.')
  }
})

app.listen(4000, () => {
  console.log('Server is running on port 4000...')
});