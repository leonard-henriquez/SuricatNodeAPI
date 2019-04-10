import { Router } from 'express'
import list from './list'

export default (models) => {
  const router = Router()

  router.get('/', list(models))

  return router
}
