const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/getclub', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
