require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
