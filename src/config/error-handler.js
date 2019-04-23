import config from '.'
import loggerFactory from '../helpers/logger'

const logger = loggerFactory('error', config)

// Build response for the client
const response = (err) => {
  let msg = ''
  if (config.env === 'development') {
    msg = err.message
  }

  return {
    message: msg,
    error: err,
  }
}

// Build error message from error object
const logMessage = err => ({ message: err.message, stack: err.stack.split('\n') })

// Error handler
const errorHandler = (err, req, res, _next) => {
  // Log error
  logger.error(logMessage(err))

  // Send response
  res.status(err.status || 500)
    .json(response(err))
}

export default (app) => {
  // Register errorHandler as a middleware
  app.use(errorHandler)

  return app
}
