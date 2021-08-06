require('dotenv').config() // this allows to inject fake environment variables

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors()) // enables CORS to get around browser's "same origin" policy
server.use(helmet()) // security

server.get('/', (req, res) => {
  res.send(`
    <h1>Web 44 is pretty alright, I guess...</h1>
  `)
})

server.use('*', (req, res, next) => {
  res.json({
    message: 'web 44 is pretty aight I guess'
  })
})

server.listen(PORT, () => { // heroku machine uses a different port
  console.log(`listening on ${PORT}`)
})
