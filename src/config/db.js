import mongoose from 'mongoose'
import { debug, mongoURI } from '.'
import loggerFactory from './logger'

const logger = loggerFactory('db')

export default () => {
  // Set debug
  if (debug) {
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

  // Connect to MongoDb
  mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => logger.info('MongoDB connected…'))
    .catch(err => logger.error(err))

  // Return connection
  return mongoose.connection
}
