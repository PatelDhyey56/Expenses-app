import { Router } from "express"
import * as Expance from '../controller/Expancecontroller.js'

const router =Router()

router.get('/',Expance.getexpence)
router.post('/',Expance.postexpence )
router.delete('/:id', Expance.deleteexpence)
router.patch('/:id', Expance.patchexpence)

export default router