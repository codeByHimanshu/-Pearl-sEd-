import express from 'express';

import { signup, signin } from '../controllers/user.controller.js';

import userMiddleware from '../middleware/usermiddleware.js';


const userRouter = express.Router();



userRouter.post('/signup', signup);


userRouter.post('/signin', userMiddleware, signin);


 export default userRouter;
