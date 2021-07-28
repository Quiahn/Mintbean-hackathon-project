const express = require("express");
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
// Variables
const uri = "mongodb+srv://cluster0.q9qwv.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const app = express();

app.use(cors())
//TODO: READ AND LEARN WHAT THIS SHIT IS
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

MongoClient.connect(uri, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database')
		const collection = client.db('shopping-list').collection('user')

		//Creates user
		app.post('/create-user', (req, res) => {
			console.log(req.body)

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
	.catch(err => {
		console.log('ERROR')
	})

app.listen(3001)