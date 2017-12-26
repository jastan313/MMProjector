// Libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// Server Configuration
var basePath = '/mmprojector';
var port = 8080;

// Connection to MongoDB
var dbUrl = "mongodb://jastan313:mmprojectormlab@ds131697.mlab.com:31697/mmprojector-mlab";
var mongooseStates = {0: 'Disconnected', 1: 'Connected', 2: 'Connecting', 3: 'Disconnecting'};
mongoose.connect(dbUrl, {useMongoClient: true}, function (error) {
    if (error) {
        console.log("Mongoose Connection Error: " + error);
    } else {
        console.log("Mongoose Connection Success: " + mongooseStates[mongoose.connection.readyState]);
    }
});

// Routes and Backend Funcioncalities
var userRoutes = require('./src/routes/user-routes');

// App Instance
var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, userRoutes);

// Execute App
app.listen(port, () => {
  console.log('MMProjecter server running on port:',port);
});