var mongoose   = require("mongoose");

var poseSchema = new mongoose.Schema({
  name: String,
  translation: String,
  image: String,
  benefit: Array,
  caution: String,
  modification: String,
  category: String
}, {
  timestamps: true
}); 

// Ensure that the object is sent as JSON
poseSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model("Pose", poseSchema)