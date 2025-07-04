import express from 'express';
import { createCourse, getAllCoursesByInstructor} from '../controllers/course.controller.js';
import userMiddleware from '../middleware/usermiddleware.js';
import { isMentor } from '../middleware/mentor.middleware.js';

const courserouter = express.Router();

courserouter.post('/create-course',userMiddleware,isMentor, createCourse);
courserouter.get('/get-all-courses', userMiddleware, getAllCoursesByInstructor)

export default courserouter;