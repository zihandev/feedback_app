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
        res.redirect(`/forms`);
      })

    
      app.get('/auth/facebook', passport.authenticate('facebook'));
    
      app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook'),
        (req, res) => {
          res.redirect('/forms');
        }
      );


      app.get('/api/current_user',  (req,res)=>{
       // console.log('Current User fetched is' + req.user);
          res.send(req.user);
      })


}