const passport = require ('passport');

module.exports = app => {
    app.get(
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );
  
    app.get(
      '/auth/google/callback',
      passport.authenticate('google'),
      (req, res) => {
        res.redirect(`/logged`);
      })

      app.get('/api/current_user',  (req,res)=>{
       // console.log('Current User fetched is' + req.user);
          res.send(req.user);
      })


}