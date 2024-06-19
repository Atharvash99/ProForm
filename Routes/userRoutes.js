const express = require('express');
const router = express.Router();
const user = require('../Controller/userController')

router.post('/signUp',user.signUp);
router.post('/login',user.login);

module.exports=router;
