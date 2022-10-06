const express = require('express')

// Creating an express app. 
const app = express()

// routes request and response

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to thee app'})
})

// listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000')
})