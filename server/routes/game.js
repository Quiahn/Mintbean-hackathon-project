const router = require('express').Router()
const verify = require('./verifToken')
const User = require('../model/User')


router.get('/start', verify, async (req, res) => {
    const userId = req.user._id
    const user = await User.findOne({ _id: userId })
    if (user) {
        const username = user.username
        res.send({ username: username, id: userId, cardsDrawn: user.cardsDrawn, gamesPlayed: user.gamesPlayed, gamesWon: user.gamesWon, gamesLost: user.gamesLost, date: user.date })
    }

})


module.exports = router