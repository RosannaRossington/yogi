//create the router
var router = require('express').Router();

//require controllers
var shoesController = require('../controllers/shoes');

//controller methods to urls/paths
router.route('/shoes')
  .get(shoesController.index)
  .post(shoesController.create);

router.route('/shoes/:id')
  .get(shoesController.show);
  .delete(shoesController.delete);
  .put(shoesController.update);

//export the router
module.exports = router;