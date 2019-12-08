'use strict'

const router = require('express').Router()
const passport = require('passport')
const passportConf = require('../../config/passport')

router.post('/oauth', passport.authenticate('googleToken', {session: false}), function (req, res) {
    // here req.user will have all necessary information
    res.send({response: (req.user)})
})

module.exports = router