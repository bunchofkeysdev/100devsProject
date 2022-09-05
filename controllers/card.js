const Card = require('../models/Card');

module.exports = {
  getCards: async (req, res) => {
    console.log(req.user);
    try {
      const cardItems = await Card.find({ userId: req.user.id });
      res.render('cards.ejs', { cards: cardItems, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createCards: async (req, res) => {
    try {
      await Card.create({
        front: req.body.frontOfCard,
        back: req.body.backOfCard,
        completed: false,
        userId: req.user.id,
      });
      console.log('Card has been added!');
      res.redirect('/cards');
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Card.findOneAndUpdate(
        { _id: req.body.cardIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log('Marked Complete');
      res.json('Marked Complete');
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Card.findOneAndUpdate(
        { _id: req.body.cardIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log('Marked Incomplete');
      res.json('Marked Incomplete');
    } catch (err) {
      console.log(err);
    }
  },
  deleteCards: async (req, res) => {
    console.log(req.body.cardIdFromJSFile);
    try {
      await Card.findOneAndDelete({ _id: req.body.cardIdFromJSFile });
      console.log('Deleted card');
      res.json('Deleted It');
    } catch (err) {
      console.log(err);
    }
  },
};
