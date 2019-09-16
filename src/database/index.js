var MongoClient = require('mongoose');

MongoClient.connect('mongodb://localhost:27017/noderest',{ useUnifiedTopology: true, useNewUrlParser: true });
MongoClient.Promise = global.Promise;