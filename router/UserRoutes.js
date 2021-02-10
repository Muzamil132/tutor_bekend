import express from 'express'

import {CreateUser,RegisterUser,loginuser,UpdateUser} from '../Controllers/userController.js'
import {getPosts, PostCreate} from '../Controllers/PostController.js'


const router =express.Router()


router.get('/',getPosts)
router.put('/',UpdateUser)
router.put('/register',RegisterUser)
router.put('/login',loginuser)
router.put('/CreatePost',PostCreate)



export default router