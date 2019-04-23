import { Router } from 'express'
import { list, create } from './user.controller'

const router = Router()

router.route('/')
  .get(list)
//   .post(validate, create)

// router.route('/:id')
//   .get(get)
//   .put(validate, update)
//   .delete(remove)

// router.param('id', load)

export default router
