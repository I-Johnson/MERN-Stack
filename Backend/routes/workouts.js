const express = require('express')

//creating instance for router
const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// Post a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})


module.exports = router