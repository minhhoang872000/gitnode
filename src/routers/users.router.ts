import express from 'express'
import { loginController } from '~/controllers/users.controller'
const usersRouter = express.Router()

// usersRouter.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   console.log('Time: abc')
//   next()
// })
usersRouter.post('/register', loginController)

export default usersRouter
