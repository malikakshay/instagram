const express = require('express');

const { signup, signin,  getUser, logout } = require('../controller/authcontroller')
const jwtAuth = require('../middleware/jwtAuth')
const authRouter = express.Router();

//kuch create krna ha tb bhi aap post use kr skte ho orr data leak na ho tbb bhi app post use kr skte ho////
authRouter.post('/signup', signup)
authRouter.post('/signin', signin)
authRouter.get('/user',jwtAuth, getUser)
authRouter.get('/logout', jwtAuth, logout)


module.exports = authRouter;