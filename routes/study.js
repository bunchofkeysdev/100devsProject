const express = require('express')
const router = express.Router()
const studyController = require('../controllers/study')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, studyController.getStudy)

// router.post('/createTodo', todosController.createTodo)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router