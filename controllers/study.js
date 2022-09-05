<<<<<<< HEAD
const Card = require('../models/Card');

module.exports = {
  getStudy: async (req, res) => {
    console.log(req.user);
    try {
      const cardItems = await Card.find({ userId: req.user.id });
      res.render('study.ejs', {
        cards: cardItems[Math.floor(Math.random() * cardItems.length)],
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  // createTodo: async (req, res) => {
  //     try {
  //         await Card.create({ front: req.body.frontOfCard, back: req.body.backOfCard, userId: req.user.id })
  //         console.log('Card has been added!')
  //         res.redirect('/todos')
  //     } catch (err) {
  //         console.log(err)
  //     }
  // },
  // markComplete: async (req, res)=>{
  //     try{
  //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
  //             completed: true
  //         })
  //         console.log('Marked Complete')
  //         res.json('Marked Complete')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  // markIncomplete: async (req, res)=>{
  //     try{
  //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
  //             completed: false
  //         })
  //         console.log('Marked Incomplete')
  //         res.json('Marked Incomplete')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  //     deleteTodo: async (req, res) => {
  //         console.log(req.body.todoIdFromJSFile)
  //         try {
  //             await Card.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
  //             console.log('Deleted Todo')
  //             res.json('Deleted It')
  //         } catch (err) {
  //             console.log(err)
  //         }
  //     }
};
=======
const Card = require('../models/Card')

module.exports = {
    getStudy: async (req, res) => {
        console.log(req.user)
        try {
            const cardItems = await Card.find({ userId: req.user.id })
            res.render('study.ejs', { cards: cardItems[Math.floor(Math.random() * cardItems.length)], user: req.user })
        } catch (err) {
            console.log(err)
        }
    }
    // createTodo: async (req, res) => {
    //     try {
    //         await Card.create({ front: req.body.frontOfCard, back: req.body.backOfCard, userId: req.user.id })
    //         console.log('Card has been added!')
    //         res.redirect('/todos')
    //     } catch (err) {
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    //     deleteTodo: async (req, res) => {
    //         console.log(req.body.todoIdFromJSFile)
    //         try {
    //             await Card.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
    //             console.log('Deleted Todo')
    //             res.json('Deleted It')
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
}    
>>>>>>> master
