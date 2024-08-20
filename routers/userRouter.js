const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users/:walletAddress',userController.getUser);
router.put('/users/:walletAddress',userController.updateUser);
router.delete('/users/:walletAddress',userController.deleteUser);

module.exports = router;
