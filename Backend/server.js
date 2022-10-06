require('dotenv').config()

const express = require('express')

// Creating an express app. 
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes request and response
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to thee app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

process.env