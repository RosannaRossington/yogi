//require npm modules
var express     = require('express');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

//deployment ready
var port        = process.env.PORT || 3000
var databaseURL = process.env.MONGOLAB_URI || "mongodb://localhost/express-api_new";

var routes      = require("./config/routes")

//create my express app
var app         = express();

//connect to database
mongoose.connect(databaseURL)

//using morgan for logging
app.use(morgan("dev"));

//set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//must be after middleware and before app.listen
app.use('/api', routes)

//listen for incoming http requests
app.listen(3000, function(){
  console.log("Express is listening")
})