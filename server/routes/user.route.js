import express from 'express';

import { signup, signin } from '../controllers/user.controller.js';

import userMiddleware from '../middleware/usermiddleware.js';


const router = express.Router();



router.post('/signup', signup);


router.post('/signin', userMiddleware, signin);


 export default router;
