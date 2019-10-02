const http = require('http')
const app = require('./app')

const server = http.createServer(app)
const port = process.env.PORT || 1413

server.listen(port, () => {
  console.info(`The server is running on port: ${port}`)
})
