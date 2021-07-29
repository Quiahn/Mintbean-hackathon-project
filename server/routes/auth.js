const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation')


//REGISTER
router.post('/register', async (req, res) => {

    //Validate Data
    const registerValidate = registerValidation(req.body)
    if (registerValidate.error) return res.status(400).send(registerValidate.error.details[0].message)

    //Check if username is already in the database
    const usernameExist = await User.findOne({ username: req.body.username })
    if (usernameExist) return res.status(400).send("Username already exists")

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Create New User
    const user = new User({
        username: req.body.username,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        res.status(201).send({ id: user._id, username: user.username })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})


//LOGIN
router.post('/login', async (req, res) => {

    //Validate Data
    const loginValidate = loginValidation(req.body)
    if (loginValidate.error) return res.status(400).send(loginValidate.error.details[0].message)

    //Check if username exists
    const userExist = await User.findOne({ username: req.body.username })
    if (!userExist) return res.status(400).send("Username does not exists")

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, userExist.password)
    if (!validPass) return res.status(400).send("Invalid password")

    //Create and assign a token
    const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send("logged in")

})


//USERNAME EXISTS
router.post('/username-availability', async (req, res) => {
    //Check if username exists
    const userExist = await User.findOne({ username: req.body.username })
    if (!userExist) {
        return res.send({
            userExist: false
        })
    }

    res.send({
        userExist: true
    })
})

module.exports = router