import { Router } from 'express'
import list from './list'

const router = Router()

router.get('/', list)

export default router
