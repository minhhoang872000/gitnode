import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'

export const loginController = async (req: Request, res: Response) => {
  console.log(req)
  const { email, password } = req.body
  try {
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    return res.json({
      message: 'Register success'
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Login Failed'
    })
  }
}
