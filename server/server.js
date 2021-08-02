require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const http = require('http').Server(app)
const io = require('socket.io')(http, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		allowedHeaders: ["my-custom-header"],
		credentials: true
	}
})

//Import Routes
const authRoute = require('./routes/auth')
const gameRouter = require('./routes/game');

//Connect to DB
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, mongooseOptions, () => {
	console.log('Server connected to the database')
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


//Socket
io.on("connection", (socket) => {


	socket.on("message", (data) => {
		socket.broadcast.emit("message", data)
	})

	socket.on("someoneConnected", (data) => {
		socket.broadcast.emit("message", { message: `${data} Connected! Say Hi`, from: "AI" })
	})

	socket.on("disconnected", (data) => {
		socket.broadcast.emit("message", { message: `${data} Left the chat! `, from: "AI" })
	})

});



//Port
const PORT = 3001 || process.env.PORT
http.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`))