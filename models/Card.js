const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  easy: {
    type: Boolean,
    required: true,
  },
  hard: {
    type: Boolean,
    required: true,
  }

})

module.exports = mongoose.model('Card', CardSchema)
