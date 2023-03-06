const express = require('express')
const cors = require('cors')
const app = express()
const User = require('./models/User')
const Chirp = require('./models/Chirp')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadMiddleware = multer({ dest: './uploads'})
const fs = require('fs')
const ChirpModel = require('./models/Chirp')

require('dotenv').config()
const mongoURI = process.env.MONGO_CRITTER_URI;
const secretKey = process.env.SECRET_KEY;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

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
  if (!userDoc) {
    res.status(400).json("Username doesn't exist.")
  } else {
    const doesPassMatch = bcrypt.compareSync(password, userDoc.password)
    if (doesPassMatch) {
      jwt.sign({username, id:userDoc._id}, secretKey, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          username,
        })
      })
    } else {
      res.status(400).json('Incorrect password.')
    }
  }
})

app.get('/profile', async (req,res) => {
  const {token} = req.cookies
  jwt.verify(token, secretKey, {}, (error, userInfo) => {
    if (error) {
      res.json({userInfo: null})
    } else {
      res.json(userInfo);
    }
  })
})

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('Succesfully logged out.')
})

app.post('/create-chirp', uploadMiddleware.single('image'), async (req, res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.')
  const extension = parts[parts.length - 1]
  const newPath = path + '.' + extension
  fs.renameSync(path, newPath)

  const {token} = req.cookies
  jwt.verify(token, secretKey, {}, async (error, userInfo) => {
    if (error) {
      throw error;
    } else {
      const {content} = req.body;
      const chirpDoc = await ChirpModel.create({
        content,
        image: newPath,
        poster: userInfo.id
      })
      res.json({chirpDoc})
    }
  })
})

app.get('/chirps', async (req,res) => {
  const chirps = await Chirp.find()
    .populate('poster', 'username')
    .sort({createdAt: -1})
    .limit(20)
  res.json(chirps)
})

app.listen(4000, () => {
  console.log('Server is running on port 4000...')
});