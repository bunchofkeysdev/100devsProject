const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/card');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, cardsController.getCards);

router.post('/createCard', cardsController.createCards);

router.put('/markComplete', cardsController.markComplete);

router.put('/markIncomplete', cardsController.markIncomplete);

router.delete('/deleteCard', cardsController.deleteCards);

module.exports = router;
