const { Router } = require('express')

const userController = require('../Controllers/user.js')

const userRouter = Router()

userRouter.get('/', userController.index)
userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)

module.exports = userRouter