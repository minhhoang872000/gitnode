import express from 'express'
import usersRouter from './routers/users.router'
import databaseService from './services/database.services'
const app = express()
app.use(express.json())
const port = 3000
app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.send('Hello word')
})
databaseService.connect()
app.listen(port, () => {
  console.log(`Example app is running on port ${port}`)
})
