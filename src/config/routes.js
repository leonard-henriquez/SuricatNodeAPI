import { Router } from 'express'
import User from '../models/user'
import users from '../controllers/users'

const models = { User }

// Register routes
export default (app) => {
  // Instanciate router
  const router = Router()

  // Create routes
  router.use('/users', users(models))

  // Route for ping
  router.get('/health', async (req, res) => {
    res.status(200).send()
  })

  // Register routes
  app.use('/api', router)

  // Return app
  return app
}
