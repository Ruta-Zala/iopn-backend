const mongoose = require('mongoose');

const userInfo = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  transactionHash: { type: String, required: true },
  walletAddress: { type: String, required: true },
  stackingType: { type: String, required: true }
});

const userModel = mongoose.model('User', userInfo);
module.exports = userModel;
