const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const boom = require('boom')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use((err, req, res, next) => {
  if (!err) return next()
  if (!err.isBoom) err = boom.badImplementation(err)
  if (err.isServer) console.error(err)

  const { output } = err

  res.status(output.statusCode).json(output.payload)
})

module.exports = app
