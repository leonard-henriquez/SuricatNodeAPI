import { Router } from 'express'
import usersController from '../controllers/users'

// Register routes
export default (app) => {
  // Instanciate router
  const router = Router()

  // Create routes
  router.use('/users', usersController)

  // Route for ping
  router.get('/health', (req, res) => {
    res.status(200).send()
  })

  // Register routes
  app.use('/api', router)

  // Return app
  return app
}
