import { Router } from 'express'
import multer from 'multer'
import cors from 'cors'

// Initialize Router
const router = Router()
// Cross-Origin Resource Sharing  ( CORS ) 
router.use(cors())
// Form-Data
router.use(multer().any())
// Cotrollers
import {  
    UsersController, 
} from './controllers'
import {
    PeopleControllers,
} from './controllers'

// EndPoints
router.get("/", (req,res) => res.send("Hello world") )

router.get('/user', UsersController.index)
router.post('/user', UsersController.store)   
router.get('/people', PeopleControllers.index)
module.exports = router