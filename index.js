const express = require('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey')
require('./services/passport');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://trying:Vj1GU4y9kozSbsPn@feedback-5kb8t.mongodb.net/test?retryWrites=true&w=majority');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
     keys: ['jsdhodj23432efgsSDSA']
  })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoute')(app);
require('./routes/billingRoute')(app);
require('./routes/surveyRoute')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('HI'))