import mongoose from 'mongoose'
import loggerFactory from '../helpers/logger'
import * as config from '.'

const logger = loggerFactory('db', config)

export default () => {
  // Set debug
  if (config.debug) {
    mongoose.set('debug', (coll, method, query, doc, options) => {
      logger.info({
        coll,
        method,
        query,
        doc,
        options,
      })
    })
  }

  // Remove deprecation warning
  mongoose.set('useCreateIndex', true)

  // Connect to MongoDb
  mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => logger.info('MongoDB connected…'))
    .catch(err => logger.error(err))

  // Return connection
  return mongoose.connection
}
