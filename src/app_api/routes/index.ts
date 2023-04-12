import { Router } from 'express'
import jwt from 'express-jwt'

import * as testController from '../controllers/test'

const router = Router()

/**
 * @notice Test endpoint
 */
router.get('/test', testController.test)

export default router