const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { name, email, transactionHash, walletAddress, stackingType } = req.body;
    if (!name || !email || !transactionHash || !walletAddress || !stackingType) {
      return res.status(400).json({ message: 'Name, email, transactionHash, walletAddress, and stackingType are required.' });
    }

    const newUser = new User({ name, email, transactionHash, walletAddress, stackingType });
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const walletAddress = req.params.walletAddress;

    const user = await User.findOne({ walletAddress });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

exports.updateUser = async (req, res) => {
  try {
    const walletAddress = req.params.walletAddress;
    const { name, email } = req.body;

    let user = await User.findOne({ walletAddress });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    console.log('delete');
    const walletAddress = req.params.walletAddress;

    const user = await User.findOneAndDelete({ walletAddress });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}