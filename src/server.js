import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: 'hello world!' })
})

app.get('/name', (req, res) => {
  res.send({ message: 'Hi Terry!' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

export const start = () => {
  const port = '3000'

  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}
