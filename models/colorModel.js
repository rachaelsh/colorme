var mongoose = require('mongoose');

var colorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  html: {type: String, required: true}
});


module.exports = mongoose.model("Colors", colorSchema);
