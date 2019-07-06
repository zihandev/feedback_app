
const stripe = require('stripe')( 'sk_test_rdty4fdFXcXtocnVZSZHfWWU00TWUyVtKz');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) =>{
    app.post('/api/stripe', async (req,res)=>{

        console.log(req.user);

        //create the stripe charge object
        const charge = await stripe.charges.create({
            amount : 500,
            currency : 'usd',
            description: '$5 for 5 credits',
            source : req.body.id
        })

        
        
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);  //send back user info to action creator
    })
};