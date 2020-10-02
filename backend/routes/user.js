const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/profil/', auth, userCtrl.getOneUser)
router.delete('/profil/', auth, userCtrl.deleteOneUser)


module.exports = router;