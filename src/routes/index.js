'use strict'

const healthCheck = require('./health-check')
const googleSignIn = require('./google-sign-in')

module.exports = function (app) {
    app.use('/', healthCheck)
    app.use('/google', googleSignIn)
}