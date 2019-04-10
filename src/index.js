import express from 'express'
import { env, port, host } from './config'
import connect from './config/db'
import middlewares from './config/middlewares'
import routes from './config/routes'
import errorHandler from './config/error-handler'
import loggerFactory from './config/logger'


// Instantiate express framework and apply middlewares
const app = express()

// Connect to database
connect()

// Add middlewares
middlewares(app)

// Import routes
routes(app)

// Add error handler
errorHandler(app)

// Create server
const start = async () => {
  const logger = loggerFactory('server')

  try {
    await app.listen(port, host)
    logger.info(`Server listening on ${host}:${port} in ${env} mode`)
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

// Instanciate server
start()
