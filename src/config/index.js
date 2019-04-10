import {} from 'dotenv/config'
import path from 'path'

// Environment settings
export const appRoot = path.resolve(path.join(__dirname, '..', '..'))
export const env = process.env.NODE_ENV || 'development'
export const host = process.env.HOST || '0.0.0.0'
export const port = process.env.PORT || 3000
export const debug = process.env.DEBUG || (env === 'development')
export const mongoURI = process.env.MONGO_URI

// Logs
export const logFilename = path.join(appRoot, 'logs', 'app.log')
export const logLevel = process.env.LOG_LEVEL || 'debug'
