const { connect, connection } = require('mongoose');

// const connectionString = 
//   process.env.MONGODB_URI || 'mongodb://localhost:3001/';

const uri = process.env.MONGODB_URI;

connect('mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
