var mongoose   = require("mongoose");

var userSchema = new mongoose.Schema({
  username: { type: String, required: ture, unique: true },
  email: { type: String, required: ture, unique: true }
  passwordHash: { type: String, required: ture }
});

module.exports = mongoose.model("User", userSchema);