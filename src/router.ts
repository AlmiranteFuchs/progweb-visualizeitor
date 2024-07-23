import dotenv from 'dotenv';
import { Router } from 'express';
import { home_controller } from './routes_controller/home';
import { grades_controller } from './routes_controller/grades';

dotenv.config();

const secret: string = process.env.auth_secret as string;
const router: Router = Router();

//Rotas
router.get('/', home_controller.Home);

router.get('/grades_info/:id/:code', grades_controller.GradesInfo);
router.get('/grades_data/:id/:code', grades_controller.GradesData);


export { router };