var mongoose   = require("mongoose");
var bcrypt     = require('bcrypt');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }
});


//remove information when set up as JSON
userSchema.set('toJSON', {
  transform: function(document, json) {
    delete json.passwordHash;
    delete json.__v;
    return json;
  }
});

//setup
userSchema.virtual('password')
  .set(function(password){
    this._password = password;

    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
  });

  userSchema.virtual('passwordConfirmation')
    .get(function(){
      return this._passwordConfirmation;
    })
    .set(function(passwordConfirmation){
      this._passwordConfirmation = passwordConfirmation;
    });

//validation
userSchema.path('passwordHash')
.validate(function(passwordHash){
  if(this.isNew) {
    if(!this._password) {
      return this.invalidate('password', 'a password is necessary.')
    }

    if(this._password !== this._passwordConfirmation){
      return this.invalidate('passwordConfirmation', 'Passwords match.')
    }
  }
});

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
}

module.exports = mongoose.model("User", userSchema);