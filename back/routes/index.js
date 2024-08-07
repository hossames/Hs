const express = require('express');

const router = express.Router();

const userSignup = require('../controller/userSignUp')
const userSignIn = require('../controller/userSignIn')
const userDetails = require('../controller/userDetails');
const userLogout = require('../controller/userLogout');
const getcookies = require('../controller/getcookies');
const authToken = require('../middleware/authToken');
const users = require('../controller/users');

router.post('/signup', userSignup);

router.post('/signin', userSignIn);

router.get('/userDetails', authToken, userDetails);

router.get('/logout',userLogout);

router.get('/getcookies', getcookies);

router.get('/users', users);

module.exports = router;