//require npm modules
var express     = require('express');
//create my express app
var app         = express();

var morgan      = require('morgan');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');

var environment = app.get('env');
var port        = process.env.PORT || 3000;

var databaseUri = require('./config/db')(environment);

var routes      = require("./config/routes")

//connect to database
mongoose.connect(databaseUri);

//using morgan for logging
if('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(cors());

//set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//must be after middleware and before app.listen
app.use('/api', routes)

//listen for incoming http requests
app.listen(port, function(){
  console.log("Express is listening")
})

module.exports = app;