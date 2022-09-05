<<<<<<< HEAD
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const cardRoutes = require('./routes/cards');

require('dotenv').config({ path: './config/.env' });
=======
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const studyRoutes = require('./routes/study')

require('dotenv').config({ path: './config/.env' })
>>>>>>> master

// Passport config
require('./config/passport')(passport);

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
<<<<<<< HEAD
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', mainRoutes);
app.use('/cards', cardRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!');
});
=======
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
app.use('/study', studyRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!')
})    
>>>>>>> master
