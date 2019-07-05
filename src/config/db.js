import mongoose from 'mongoose'
import loggerFactory from '../helpers/logger'
import config from '.'

const logger = loggerFactory('db', config)

export default () => {
  // Set debug
  if (config.debug) {
    mongoose.set('debug', (collection, method, query, doc, options) => {
      logger.info({
        collection,
        method,
        query,
        doc,
        options,
      })
    })
  }

  // Connect to MongoDb
  mongoose.connect(config.mongo.URI, config.mongo.options)
    .then(() => logger.info('MongoDB connected'))
    .catch(error => logger.error(error))

  // Return connection
  return mongoose.connection
}
