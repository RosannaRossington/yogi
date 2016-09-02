var mongoose   = require("mongoose");

var poseSchema = new mongoose.Schema({
  pose: String,
  benefit: String,
  caution: String,
  modification: String
}, {
  timestamps: true
}); 

module.exports = mongoose.model("Pose", poseSchema)