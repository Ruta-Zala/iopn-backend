require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CLOUD_URL_CLIENT);

mongoose.connection.on('connected', (result) => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB');
  process.exit(1);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = mongoose;
