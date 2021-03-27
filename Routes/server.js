import {Router} from 'express'
import {getAll, create, remove} from '../controllers/exchanges.js'
const router = Router()

router.get('/api/exchange', getAll)

router.post ('/api/exchange', create)

router.delete ('/api/exchange/:id', remove)

export default router