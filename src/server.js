import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import config from './config'
import itemRouter from './resources/item/item.router'
import listRouter from './resources/list/list.router'
import userRouter from './resources/user/user.router'
import { protect, signin, signup } from './utils/auth'
import { connect } from './utils/db'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', protect)
app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)
app.use('/api/list', listRouter)
app.use('/api/signin', signin)
app.use('/api/signup', signup)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
