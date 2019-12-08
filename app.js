const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4001

app.use(bodyParser.json())
require('./src/routes')(app)

app.listen(port, (err, res) => {
    if (err) {
        console.log(`Err while listening on port: ${port}`)
    } else {
        console.log(`Server is Up, listening on port: ${port}`)
    }
});

module.exports = app