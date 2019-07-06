    
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');

const mongoose = require('mongoose');
const Survey = mongoose.model ('surveys')



const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/surveyTemplate')



module.exports = (app)=>{
   
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
      });


      app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
    
        _.chain(req.body)
          .map(({ email, url }) => {
            const match = p.test(new URL(url).pathname);
            if (match) {
              return { email, surveyId: match.surveyId, choice: match.choice };
            }
          })
          .compact()
          .uniqBy('email', 'surveyId')
          .each(({ surveyId, email, choice }) => {
            Survey.updateOne(
              {
                _id: surveyId,
                recipients: {
                  $elemMatch: { email: email, responded: false }
                }
              },
              {
                $inc: { [choice]: 1 },
                $set: { 'recipients.$.responded': true },
                lastResponded: new Date()
              }
            ).exec();
          })
          .value();
    
        res.send({});
      });
   
   
    app.post('/api/surveys', async (req,res)=>{

        //destructure info from req body
        const {title, subject, body, recipients} = req.body;

        //create a new Survey instance
        const survey = new Survey ({
            title,
            subject,
            body,
            recipients : recipients.split(',').map(email=>({email : email.trim() })) , //should be an array of recipient objects
            _user : req.user.id
        })

            //create the mailer and send it
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
            await mailer.send();
            console.log('MAIL SENT FROM SERVER');
            
            await survey.save();   //save the survey in DB after mail has been sent successfully
            req.user.credits -= 1;
            const user = await req.user.save();  //deduct user credits and save in DB

            console.log('MAIL SENT FROM SERVER DONEE');
            res.send(user);  //send the updated user info as API response
        }
        catch(err){
            res.status(422).send(err);
        }
        


    })
}