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


const PORT = 5000
app.listen(PORT, ()=>console.log('HI'))