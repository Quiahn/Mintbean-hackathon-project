require('dotenv').config()
const express = require("express");
const cors = require('cors')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient
const session = require("express-session")
const jwt = require('jsonwebtoken')


// Variables
const app = express();
const uri = process.env.DB_URI


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

const responseFormt = {
	error: '',
	success: ''
}

MongoClient.connect(uri, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database')
		const collection = client.db('Hackathon').collection('user')

		//Creates user
		app.post('/create-user', async (req, res) => {
			console.log("Create User: ", req.body)
			const password = req.body.password
			try {
				const hashedPassword = bcrypt.hash(password, 8, (err, hash) => {
					console.log(hash);
					collection.insertOne({
						"username": req.body.username,
						"password": hash
					})
				})

			} catch (error) {

			}
		})

		//Checks if username already exists
		app.post('/user-exists', async (req, res) => {
			try {
				const existingUser = collection.findOne({ "username": req.body.username }, (err, user) => {
					if (err) {
						console.log("user-exists Error: ", err);
						res.send(err)
					}
					if (user) {
						console.log("username is already taken", req.body.username);
						res.send("taken")
					} else {
						console.log("Username is not taken: ", req.body.username);
						res.send("not-taken")
					}
				})
			} catch (error) {
				console.log(error);
			}
		})

		//Login
		app.post('/login-user', (req, res) => {
			const username = req.body.username
			const password = req.body.password
			try {
				const existingUser = collection.findOne({ "username": username }, (err, user) => {
					if (err) {
						console.log("Login Error: ", err);
						res.send({ ...responseFormt, error: err })
					}
					if (user && user.username === username) {
						console.log(user);

						bcrypt.compare(password, user.password, (error, response) => {
							if (response) {

								const id = user._id
								const token = jwt.sign({ id }, process.env.SESSION_SECRET, {
									expiresIn: 3000
								})

								res.send({
									...responseFormt,
									success: true,
									auth: true,
									token: token,
									username: user.username,
									id: user._id
								})
							} else {
								res.send({ ...responseFormt, error: "Wrong Password!" })
							}
						})

					} else {
						console.log();
						res.send({ ...responseFormt, error: "Wrong Username!" })
					}
				})
			} catch (error) {
				console.log(error);
			}
		})

		app.listen(3001)
	})