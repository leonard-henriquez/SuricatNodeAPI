import {} from 'dotenv/config'
import path from 'path'

const appRoot = path.resolve(path.join(__dirname, '..', '..'))
const env = process.env.NODE_ENV || 'development'

const config = {
  // Environment settings
  appRoot,
  env,
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  debug: process.env.DEBUG || (env === 'development'),

  // Database
  mongo: {
    URI: process.env.MONGO_URI,
    options: JSON.parse(process.env.MONGO_OPTIONS || '{}'),
  },

  // Logs
  logFilename: path.join(appRoot, 'logs', 'app.log'),
  logLevel: process.env.LOG_LEVEL || 'debug',
}

export default config
