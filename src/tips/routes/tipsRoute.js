//dicasRoute
const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/dicas', userController.getSaudeMentalDicas);
router.post('/usuarios', userController.createUser);
router.get('/usuarios', userController.getUsers);
router.get('/usuarios/:id', userController.getUserById);
router.put('/usuarios/:id', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);

module.exports = router;
