import express from 'express';
import { createCourse } from '../controllers/course.controller';

const courserouter = express.Router();

courserouter.post('/create-course', createCourse);

export default courserouter;