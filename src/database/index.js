const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://atlas:atlas@cluster0.bja9a.gcp.mongodb.net/atlas?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
