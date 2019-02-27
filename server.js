const express = require('express'); //Uses Express Framework
const mongoose = require('mongoose')//Uses Mongoose to connect to MongoDB
const bodyParser = require('body-parser')
const passport =require('passport')


const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI

mongoose.connect(db, {useNewUrlParser:true})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err)) 

//pasport middleware
app.use(passport.initialize())

//Pasport config
require('./config/passport')(passport);

app.use('/api/users', users)  //Route to Users 
app.use('/api/profile', profile) //Route to Profile
app.use('/api/posts', posts) //Route to Posts

//Assigning a Port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`) )
