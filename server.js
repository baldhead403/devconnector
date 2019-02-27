const express = require('express'); //Uses Express Framework
const mongoose = require('mongoose')//Uses Mongoose to connect to MongoDB



const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();

//DB config
const db = require('./config/keys').mongoURI

mongoose.connect(db, {useNewUrlParser:true})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err)) 

app.get('/', (req, res) => res.send('Hello!'))

app.use('/api/users', users)  //Route to Users 
app.use('/api/profile', profile) //Route to Profile
app.use('/api/posts', posts) //Route to Posts

//Assigning a Port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`) )
