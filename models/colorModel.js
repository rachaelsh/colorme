var mongoose = require('mongoose');

var colorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  svg: {type: String, required: true},
  timestamp: Date
});


module.exports = mongoose.model("colors", soundSchema);
