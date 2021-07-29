require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth')
const gameRouter = require('./routes/game')


//Connect to DB
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, mongooseOptions, () => {
	console.log('connected to db!')
})


//Middleware
app.use(cors({ exposedHeaders: 'auth-token' }))
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))


//Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/game', gameRouter)


app.listen(3001, () => console.log('Server is up and running'))