const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const userCtrl = require('./controllers/userCtrl');
const config = require('./config/config');
const colorCtrl = require('./controllers/colorCtrl.js');

const app = express();

require('./config/passport.js')(passport);

app.use(session(config));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));
//
// app.post('/login', passport.authenticate("local-signup"), userCtrl.login);
// app.get('/logout', userCtrl.logout);
// app.get('/current', userCtrl.getMe);

app.get("/colors", colorCtrl.read);
app.post('/colors', colorCtrl.create);
// app.put('/colors/:id', colorCtrl.update);
// app.delete('/colors/:id', colorCtrl.delete);


mongoose.connect("mongodb://localhost:27017/colorDB");
mongoose.connection.once('open', function(){
  console.log("mongoose connected");
});

app.listen(7000, function(){
  console.log("7000");
});
