const express = require('express')
const morgan = require('morgan')

require('dotenv').config()

const server = express()

server.use(
  express.json(),
  express.urlencoded({ extended: false }),
  morgan('dev')
)

server.set('port', process.env.PORT ?? 3333)

server.listen( server.get('port'), () => {
  console.log(`Server is running: ${server.get('port')}`);
})

