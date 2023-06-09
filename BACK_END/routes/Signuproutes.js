import { Router } from "express"
import * as Signup from '../controller/Signupcontroller.js'

const router =Router()

router.get('/',Signup.getsignup)
router.post('/login',Signup.postlogin)
router.post('/',Signup.postsignup)
router.delete('/:id', Signup.deletesignup)
router.patch('/:id', Signup.patchsignup)

export default router