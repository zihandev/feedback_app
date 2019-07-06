const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
    console.log(user.id);
    done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null,user);
    })
})


passport.use(
    new GoogleStrategy(
        {
            clientID : '861787216562-b3umt4mg19ac8ockee46svrc43nmpcig.apps.googleusercontent.com',
            clientSecret : 'HdVFsocGE7x-CNe279Fi1V9O',
            callbackURL : '/auth/google/callback' ,
            proxy : true
        },
         async (accessToken, refreshToken, profile, done)=> {
         const existingUser = await User.findOne({googleId : profile.id});
        
            if(existingUser){
                console.log('User is already here')
                return done(null, existingUser);
            }

            //create new user in DB if no user found
            const user = await new User({googleId : profile.id, name : profile.displayName}).save();
            console.log(user);
            done(null,user);

          }
    )
)