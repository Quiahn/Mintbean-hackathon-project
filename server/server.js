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
const publicRouter = require('./routes/public');

//Model
const User = require('./model/User')

//Connect to DB
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
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
app.use('/api/public', publicRouter)

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

	socket.on("disconnected", (data) => {
		socket.broadcast.emit("message", { message: `${data} Left the chat! `, from: "AI" })
	})

	socket.on("game-started", async (data, error) => {
		const user = await User.findByIdAndUpdate({ _id: data.id }, { gamesPlayed: (data.gamesPlayed + 1) })
	})

	/*
	{
  current: {
	drawsCount: 62,
	gameEnd: 2,
	data: {
	  username: '123123123',
	  id: '6108439ac905dc1f700fb4e8',
	  cardsDrawn: 0,
	  gamesPlayed: 103,
	  gamesWon: 0,
	  gamesLost: 0,
	  date: '2021-08-02T19:12:26.136Z'
	}
  }
}

	*/
	socket.on("game-ended", async (result) => {
		if (result) {
			if (result.gameEnd === 2) {
				await User.findByIdAndUpdate({ _id: result.data.id }, {
					cardsDrawn: (result.data.cardsDrawn + result.drawsCount),
					gamesWon: (result.data.gamesWon + 1)
				})
			}
			else if (result.gameEnd === 1) {
				await User.findByIdAndUpdate({ _id: result.data.id }, {
					cardsDrawn: (result.data.cardsDrawn + result.drawsCount),
					gamesLost: (result.data.gamesLost + 1)
				})
			}
		}
	})
})




//Port
const PORT = 3001 || process.env.PORT
http.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`))