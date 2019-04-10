import { createLogger, format, transports } from 'winston'

// Destructures format for easier access
const {
  combine,
  timestamp,
  prettyPrint,
  label,
} = format

// Create default logger that outputs both to file and console
const loggerFactory = (labelName = undefined, config = {}) => {
  const { logFilename = undefined, logLevel = 'debug' } = config

  const tsps = [
    new transports.Console(),
  ]

  if (logFilename) {
    const fileTsp = new transports.File({
      filename: logFilename,
      decolorize: true,
    })
    tsps.push(fileTsp)
  }

  const logger = createLogger({
    // Minimum log level to output
    level: logLevel,
    // Format of output
    format: combine(
      label({ label: labelName }),
      timestamp(),
      prettyPrint(),
    ),
    transports: tsps,
  })

  // Add stream for text
  logger.stream = { write(message) { logger.info(message) } }

  // Add stream for json
  logger.streamJson = { write(json) { logger.info(JSON.parse(json)) } }

  return logger
}

export default loggerFactory
