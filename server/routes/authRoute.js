import express from 'express'

import { registerController,loginController,testController, } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'

//router object
const router = express.Router()

//ROUTING

//REGISTER || METHOD POST
router.post('/register',registerController)

//LOGIN || METHOD POST
router.post('/login',loginController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

//Protected user route auth
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok:true})
})
//Protected admin route auth
router.get('/admin-auth', requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({ok:true})
})



export default router

