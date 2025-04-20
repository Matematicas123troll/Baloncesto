const Exercise = require('../models/Exercise')

// Crear nuevo ejercicio
exports.createExercise = async (req, res) => {
  try {
    const newExercise = new Exercise(req.body)
    const saved = await newExercise.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Obtener todos los ejercicios
exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find()
    res.status(200).json(exercises)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
