const express = require('express')
const router = express.Router()
const { createExercise, getExercises } = require('../controllers/exerciseController')

router.post('/', createExercise)
router.get('/', getExercises)

module.exports = router
