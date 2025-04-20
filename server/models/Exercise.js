const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ['fácil', 'medio', 'difícil'] },
  tags: [String],
  videoUrl: String,
  duration: Number, // en minutos
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Exercise', exerciseSchema)
