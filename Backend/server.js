require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// Creating an express app. 
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes request and response
app.use('/api/workouts/', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

process.env