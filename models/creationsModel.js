var mongoose = require('mongoose');



var creationsSchema = new mongoose.Schema({
  name: {type: String, required: true},//default: my creation?
  svg: {type: String, required: true},
  creationType: String,
  timestamp: Date
});


module.exports = mongoose.model("creations", soundSchema);
