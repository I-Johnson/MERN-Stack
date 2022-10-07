const express = require('express')
const Workout = require('../models/workoutModel')

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
router.post('/', async(req, res) => {
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
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