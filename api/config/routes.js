//create the router
var router = require('express').Router();

//require controllers
var posesController = require('../controllers/poses');

//controller methods to urls/paths
router.route('/poses')
  // .get(shoesController.index)
  .post(posesController.create);

// router.route('/shoes/:id')
//   .get(shoesController.show);
//   .delete(shoesController.delete);
//   .put(shoesController.update);

//export the router
module.exports = router;