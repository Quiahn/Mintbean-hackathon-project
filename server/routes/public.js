const router = require('express').Router()
const verify = require('./verifToken')
const User = require('../model/User')


router.get('/leaderboard/:limit', async (req, res) => {
    let i = parseInt(req.params.limit)
    if (i) {
        const user = await User.find().sort({ gamesWon: 0 }).limit(i)
        const responseModel = user.map(data => {
            return {
                gamesWon: data.gamesWon,
                gamesLost: data.gamesLost,
                gamesPlayed: data.gamesPlayed,
                cardsDrawn: data.cardsDrawn,
                username: data.username
            }
        });
        res.send(responseModel)
    } else {
        res.send({ error: "Limit is 0 or missing" })
    }


})


module.exports = router