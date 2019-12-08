'use strict'

const router = require('express').Router()

router.get('/health-check', (req, res) => {
    return res.send({
        msg: 'Service Health Check Passed'
    })
})

module.exports = router