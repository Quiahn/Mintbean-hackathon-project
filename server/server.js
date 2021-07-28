require('dotenv').config()
const express = require("express");
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
// Variables
const app = express();
const uri = process.env.DB_URI


app.use(cors())
//TODO: READ AND LEARN WHAT THIS SHIT IS
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

MongoClient.connect(uri, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database')
		const collection = client.db('Hackathon').collection('user')

		//Creates user
		app.post('/create-user', (req, res) => {
			console.log(req.body)

            const regex = / (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

			const username = req.body.username
			const password = req.body.password

			collection.insertOne({
				"username": username,
				"password": password
			})
            
		})

		//Login

		//Create Shopping List
		//Delete Shopping List
		//...
	})
	.catch(console.error)

app.listen(3001)