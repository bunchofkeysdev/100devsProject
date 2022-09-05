const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
<<<<<<< HEAD
    required: true,
  },
});
=======
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
>>>>>>> master

module.exports = mongoose.model('Card', CardSchema);
