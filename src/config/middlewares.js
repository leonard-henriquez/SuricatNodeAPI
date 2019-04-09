const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const logger = require('./logger');
const config = require('./');

const middlewares = (app) => {
  // Disable superfluous header
  app.disable('x-powered-by');

  // Add logger
  app.use(morgan(config.logFormat, { stream: logger.stream }));

  // Add method overrider
  app.use(methodOverride());

  // Add json parser
  app.use(bodyParser.json());

  // Add CORS headers
  app.use(cors({ origin: '*' }));

  // Add compression
  app.use(compression());

  return app;
};

module.exports = middlewares;
