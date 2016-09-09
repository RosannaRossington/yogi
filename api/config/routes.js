//create the router
//because we need to setup some middleware to check for a secure route with a valid jwt token before the route can be used
var router  = require('express').Router();
var jwt     = require('jsonwebtoken');
var secret  = require('../config/tokens').secret;

//require controllers
var posesController = require('../controllers/poses');
var usersController = require('../controllers/users');
var authController  = require('../controllers/authentications');

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if(err || !payload) return res.status(401).json({ message: "Unauthorized" });

    req.user = payload;
    next();
  });
}

//controller methods to urls/paths

router.route('/users')
  .all(secureRoute)
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .patch(usersController.update)
  .delete(usersController.delete);

router.post('/register', authController.register);
router.post('/login', authController.login);

// router.route('/poses')
//   // .get(shoesController.index)
//   .post(posesController.create);

module.exports = router;